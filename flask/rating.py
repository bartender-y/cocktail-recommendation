from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Rating(db.Model):
    __tablename__ = 'rating'

    userID = db.Column(db.String(32), primary_key=True, unique=True)
    name = db.Column(db.String(32), primary_key=True)
    star = db.Column(db.Integer[1,5])

    def __init__(self, userID, name, star) :
        self.userID = userID
        self.name = name
        self.star = star