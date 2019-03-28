from flask import Flask
from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required
from flask_cors import CORS

from security import authenticate, identity

app = Flask(__name__)
CORS(app)
app.secret_key = 'histo20151'

# @app.route("/")
# def hello():
#     return "<b>Página de LOGIN</b>"

api = Api(app) # cria um flask_restful

jwt = JWT(app, authenticate, identity) #cria um endpoint /auth

class CheckLogin(Resource):
    @jwt_required()
    def get(self):
        return { "logged" : True }, 401

api.add_resource(CheckLogin, "/checkLogin")

app.run(port=5000, debug=True)