import pandas as pd
import gensim
from gensim.models import KeyedVectors
from gensim.models import Word2Vec
from gensim.models.doc2vec import TaggedDocument, Doc2Vec
import random
import json

Doc2Vec_model = Doc2Vec.load("lawpen_doc2vec")
law_list = pd.read_csv('law_list.csv')
morphs_law = pd.read_csv('morphs_law.csv')

morphs_law['token_list'] = morphs_law['token_list'].str.replace('\'','')
morphs_law['token_list'] = morphs_law['token_list'].str.replace('[','')
morphs_law['token_list'] = morphs_law['token_list'].str.replace(']','')
morphs_law['token_list'] = morphs_law['token_list'].str.split(', ')

def model_result(law_title: str):
    
    id_tagged = []
    for i in range(len(morphs_law)):
        id_tagged.append(TaggedDocument(morphs_law['token_list'][i], [str(morphs_law['구분ID'][i])]))

    
    law_id = str(law_list[law_list['법령명한글']==law_title].법령ID.values[0])
    
    target_index = 0
    print(target_index)
    for i in range(len(id_tagged)):
        if id_tagged[i].tags[0] == law_id:
            target_index = i
    
    print(type(id_tagged[target_index].words))
    print(len(id_tagged[target_index].words))
    inferred_vector = Doc2Vec_model.infer_vector(id_tagged[target_index].words)
    sims = Doc2Vec_model.docvecs.most_similar([inferred_vector], topn=10)

    print(sims)
    similarity_json = dict()
    for title, value in sims:
        df_title = law_list[law_list['법령ID']==title]
        df_value = value
        # print(f'{df_title}, {df_value} \n')
        # print()

    similarity_json

    return similarity_json

model_result("여신전문금융업법")
#3155