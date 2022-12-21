from flask import Flask, request, make_response
from flask_cors import CORS
# import model
import os
from rating import db, Rating

app = Flask(__name__)

CORS(app)

# 술BTI 반영
@app.rout('/flask/drink-bti', methods = ['POST'])
def drink_bti():
    userID = request.headers.get('User-Id')
    params = request.get_json()
    proof = params['proof']
    fruity = params['fruity']
    colorful = params['colorful']

    ()


    

# 오늘의 칵테일, 유저 기반 추천


# 키워드 기반 추천
# @app.route('/flask/search', methods = ['GET'])
# def model_result():
#     if request.method == 'GET' :
#         keyword = request.args.get('keyword')
        
#         recommend_list = model.model_call(keyword)

#         result = list()

#         for i in range(5) :
#             this_name = recommend_list[i]["이름 (영어)"]
#             # print(recommend_list[i]["이름 (영어)"])
#             this_image = recommend_list[i]["사진링크"]
            
#             this_dict = dict()
#             this_dict['name'] = this_name
#             this_dict['image'] = this_image

#             result.append(this_dict)

#         return result

# 별점 매기기
@app.route("/flask/star", methods = ['POST'])
def update_rating():
    userID = request.headers.get('User-Id')
    params = request.get_json()
    name = params['name']
    star = params['star']

    print(f"userID : {userID}, name : {name}, star : {star}")

    exits = db.session.query(db.exists().where(Rating.userID == userID and Rating.name == name)).scalar()
    print(exits)

    if exits:
        db.session.query(Rating).filter(Rating.userID == userID and Rating.name == name).update({'star': star})
        db.session.commit

        print('Record was successfully updated')

    else :
        rating = Rating(userID, name, star)
        # print(rating)
        db.session.add(rating)
        db.session.commit

        print('Record was successfully added')

    return "hi"


basedir = os.path.abspath(os.path.dirname(__file__))
dbfile = os.path.join(basedir, 'db.sqlite')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbfile
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'jqiowejrojzxcovnklqnweiorjqwoijroi'

db.init_app(app)
db.app = app

# db.create_all() 
# 대신에 $ flask shell -> flask db.create_all()

if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=5000, debug = False)
    app.run(host='127.0.0.1', port=5000, debug = True)
