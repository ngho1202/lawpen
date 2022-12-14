import pandas as pd
import gensim
from gensim.models import KeyedVectors
from gensim.models import Word2Vec
from gensim.models.doc2vec import TaggedDocument, Doc2Vec
import sys
import json

Doc2Vec_model = Doc2Vec.load("lawpen_doc2vec")
law_list = pd.read_csv("./law_list.csv", encoding="utf-8", keep_default_na=False)
morphs_law = pd.read_csv("./morphs_law.csv", memory_map=True, encoding="utf-8", keep_default_na=False)
morphs_law["token_list"] = morphs_law["token_list"].str.replace("'", "")
morphs_law["token_list"] = morphs_law["token_list"].str.replace("[", "")
morphs_law["token_list"] = morphs_law["token_list"].str.replace("]", "")
morphs_law["token_list"] = morphs_law["token_list"].str.split(", ")

id_tagged = []
for i in range(len(morphs_law)):
    id_tagged.append(
        TaggedDocument(morphs_law["token_list"][i], [str(morphs_law["구분ID"][i])])
    )

check_space = sys.argv[1].replace(" ","")
if len(check_space) != len(sys.argv[1]):
        law_id = str(law_list[law_list["법령명한글"] == sys.argv[1]]["법령ID"].values[0])
else:
    try:
        law_id = str(law_list[law_list["공백제거법령명"] == sys.argv[1]]["법령ID"].values[0])
    except:
        print("")


target_index = 0
for i in range(len(id_tagged)):
    if id_tagged[i].tags[0] == law_id:
        target_index = i

inferred_vector = Doc2Vec_model.infer_vector(id_tagged[target_index].words)
sims = Doc2Vec_model.docvecs.most_similar([inferred_vector], topn=30)

top_list = []
for lid, value in sims:
    one_dict = {}
    # df_title = law_list[law_list['법령ID']==title]
    one_lid_series = law_list[law_list["법령ID"] == int(lid)]
    tmp_start_date = str(one_lid_series["시행일자"].values[0])
    one_dict = {
        "law_id": str(one_lid_series["법령ID"].values[0]),
        "law_title": one_lid_series["법령명한글"].values[0],
        "law_url": one_lid_series["법령상세링크"].values[0],
        "law_short_title": one_lid_series["법령약칭명"].values[0],
        "law_raw_id": str(one_lid_series["법령일련번호"].values[0]),
        "law_make_date": str(one_lid_series["공포일자"].values[0]),
        "law_org_code": str(one_lid_series["소관부처코드"].values[0]),
        "law_org_name": one_lid_series["소관부처명"].values[0],
        "law_kind": one_lid_series["법령구분명"].values[0],
        "law_start_date": tmp_start_date[:4]+"년 "+tmp_start_date[4:6]+"월 "+tmp_start_date[6:]+"일",
    }
    top_list.append(one_dict)

print(json.dumps(top_list, ensure_ascii=False))

"""
if __name__ == "__main__":
    model_result(sys.argv[1])
"""
