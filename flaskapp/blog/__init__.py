import datetime
import os
from flask import Flask, jsonify
from flask_restplus import Resource, Api
from flask_sqlalchemy import SQLAlchemy

# instantiate the app
app = Flask(__name__)

api = Api(app)

# set config
app_settings = os.getenv('APP_SETTINGS')  
app.config.from_object(app_settings)

# instantiate the db
db = SQLAlchemy(app)

class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)    
    title = db.Column(db.String(128), index=True, unique=True, nullable=False)
    body = db.Column(db.String(140))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    # categories = db.relationship('Category',
    #     secondary=categories,
    #     lazy='subquery',
    #     backref=db.backref('posts', lazy=True))
    slug = db.Column(db.String(64), unique=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __repr__(self):
        return '<Post {}>'.format(self.title)

class Ping(Resource):
    def get(self):
        return {
            'status':'success',
            'message': 'pong!'
        }

api.add_resource(Ping, '/ping')