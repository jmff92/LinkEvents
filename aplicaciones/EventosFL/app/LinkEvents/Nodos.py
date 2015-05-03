# -*- coding: utf-8 -*-
from flask import request, session, Blueprint, json


# Importando SQLAlchemy y conectando a la BD

from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)

# from app import views, models
import models



Nodos = Blueprint('Nodos', __name__)


@Nodos.route('/nodos/ABorrarEvento')
def ABorrarEvento():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VEventos', 'msg':[ur'Evento borrado']}, {'label':'/VEvento', 'msg':[ur'Error al borrar evento']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/ACancelarReserva')
def ACancelarReserva():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VEvento', 'msg':[ur'Reservación cancelada exitosamente']}, {'label':'/VEvento', 'msg':[ur'Error al cancelar la reservación']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/ACerrarSesion')
def ACerrarSesion():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VInicioSesion', 'msg':[ur'Sesión cerrada'], "actor":None}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/ACrearEvento', methods=['POST'])
def ACrearEvento():
    #Access to POST/PUT fields using request.form['name']
    #Access to file fields using request.files['name']
    results = [{'label':'/VEventos', 'msg':[ur'Evento creado']}, {'label':'/VCrearEvento', 'msg':[ur'Error al crear evento']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/AGenerarCertificado')
def AGenerarCertificado():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VCertificado', 'msg':[ur'Certificado generado exitosamente']}, {'label':'/VEvento', 'msg':[ur'Error al generar certificado']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/AGenerarCredenciales')
def AGenerarCredenciales():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VCredenciales', 'msg':[ur'Credenciales generados exitosamente']}, {'label':'/VEvento', 'msg':[ur'Error al generar credenciales']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/AIniciarSesion', methods=['POST'])
def AIniciarSesion():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VEventos', 'msg':[ur'Sesión iniciada'], "actor":"usuario"}, {'label':'/VInicioSesion', 'msg':[ur'Error al iniciar sesión']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/ARegistrarUsuario', methods=['POST'])
def ARegistrarUsuario():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VInicioSesion', 'msg':[ur'Usuario registrado']}, {'label':'/VRegistroUsuario', 'msg':[ur'Error al registrar usuario']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/AReservarEvento')
def AReservarEvento():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VEvento', 'msg':[ur'Evento reservado exitosamente']}, {'label':'/VEvento', 'msg':[ur'Error al reservar evento']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/AVerificarAsistencia')
def AVerificarAsistencia():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VParticipantes', 'msg':[ur'Asistencia verificada exitosamente']}, {'label':'/VParticipantes', 'msg':[ur'Error al verificar asistencia']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@Nodos.route('/nodos/VActEvento')
def VActEvento():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VActUsuario')
def VActUsuario():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VCertificado')
def VCertificado():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VCrearEvento')
def VCrearEvento():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VCredenciales')
def VCredenciales():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VEvento')
def VEvento():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VEventos')
def VEventos():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VInicioSesion')
def VInicioSesion():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VParticipante')
def VParticipante():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VParticipantes')
def VParticipantes():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@Nodos.route('/nodos/VRegistroUsuario')
def VRegistroUsuario():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)





#Use case code starts here


#Use case code ends here