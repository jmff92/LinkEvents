from flask.ext.wtf import Form 
from wtforms_alchemy import model_form_factory
from wtforms import StringField
from wtforms.validators import DataRequired 
from Nodos import db
from models import User, Evento
 
BaseModelForm = model_form_factory(Form)
 
class ModelForm(BaseModelForm):
    @classmethod
    def get_session(self):
        return db.session
 
class UserCreateForm(ModelForm):
    class Meta:
        model = User
 
class SessionCreateForm(Form):
    email = StringField('email', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
    username = StringField('username', validators=[DataRequired()])
    nombre = StringField('nombre', validators=[DataRequired()])
    apellido = StringField('apellido', validators=[DataRequired()])
 
class EventoCreateForm(ModelForm):
    class Meta:
        model = Evento