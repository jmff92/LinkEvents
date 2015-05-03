# Archivo de modelos
from flask import g
from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    password = db.Column(db.String(10), nullable=False)
    nombre = db.Column(db.String(30), nullable=False)
    apellido = db.Column(db.String(30), nullable=False)
    isAdmin = db.Column(db.Boolean)

    eventos = db.relationship('Evento', secondary=eventos, backref='users', lazy='dinamic')

    def __repr__(self):
        return '<Usuario %r>' % (self.username)

class Evento(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = 
    descripcion = 
    fecha = 
    lugar = 
    capacidad = 
    afiche = 

    def __repr__(self):
        return '<Evento %r>' % (self.nombre)        

# Tabla many-to-many
events = db.Table('events', 
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('evento_id', db.Integer, db.ForeignKey('evento.id'))	
	)