# Archivo de modelos
from flask import g
from Nodos import db

# Tabla many-to-many
eventos = db.Table('eventos', 
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('evento_id', db.Integer, db.ForeignKey('evento.id'))	
	)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    password = db.Column(db.String(10), nullable=False)
    nombre = db.Column(db.String(30), nullable=False)
    apellido = db.Column(db.String(30), nullable=False)
    isAdmin = db.Column(db.Boolean)
    eventos = db.relationship('Evento', secondary=eventos, backref=db.backref('users', lazy='dynamic'))

    def __repr__(self):
        return '<Usuario %r>' % (self.username)

class Evento(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(30), nullable=False)
    descripcion = db.Column(db.String(300))
    fecha = db.Column(db.DateTime)
    lugar = db.Column(db.String(30))
    capacidad = db.Column(db.Integer, nullable=False)
    afiche = db.Column(db.String(100))

    def __repr__(self):
        return '<Evento %r>' % (self.nombre)        