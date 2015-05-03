from flask import g
from flask.ext import restful
 
from Nodos import api, db, flask_bcrypt, auth
from models import User, Evento
from forms import UserCreateForm, SessionCreateForm, EventoCreateForm
from serializers import UserSerializer, EventoSerializer
 
@auth.verify_password
def verify_password(email, password):
    user = User.query.filter_by(username=username).first()
    if not user:
        return False
    g.user = user
    return flask_bcrypt.check_password_hash(user.password, password)
 
# class UserView(restful.Resource):
#     def post(self):
#         form = UserCreateForm()
#         if not form.validate_on_submit():
#             return form.errors, 422
 
#         user = User(form.email.data, form.password.data)
#         db.session.add(user)
#         db.session.commit()
#         return UserSerializer(user).data
 
# class SessionView(restful.Resource):
#     def post(self):
#         form = SessionCreateForm()
#         if not form.validate_on_submit():
#             return form.errors, 422
 
#         user = User.query.filter_by(email=form.email.data).first()
#         if user and flask_bcrypt.check_password_hash(user.password, form.password.data):
#             return UserSerializer(user).data, 201
#         return '', 401
 
class EventoListView(restful.Resource):
    def get(self):
        eventos = Evento.query.all()
        return EventoSerializer(eventos, many=True).data
 
    @auth.login_required
    def evento(self):
        form = EventoCreateForm()
        if not form.validate_on_submit():
            return form.errors, 422
        evento = Evento(form.title.data, form.body.data)
        db.session.add(evento)
        db.session.commit()
        return EventoSerializer(evento).data, 201
 
class EventoView(restful.Resource):
    def get(self, id):
        eventos = Evento.query.filter_by(id=id).first()
        return EventoSerializer(eventos).data
 
#api.add_resource(UserView, '/api/v1/users')
#api.add_resource(SessionView, '/api/v1/sessions')
api.add_resource(EventoListView, '/api/v1/eventos')
api.add_resource(EventoView, '/api/v1/eventos/<int:id>')