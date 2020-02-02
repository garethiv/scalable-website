from datetime import datetime
from sqlalchemy.sql import func
from blog import db


class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)    
    title = db.Column(db.String(128), index=True, unique=True, nullable=False)
    body = db.Column(db.String(140))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    slug = db.Column(db.String(64), unique=True)

    def __init__(self, title, body):
        self.title = title
        self.body = body
