from marshmallow import Schema, fields
 
class UserSerializer(Schema):
    class Meta:
        fields = ("id", "username", "email", "password", "nombre", "apellido", "isAdmin")
 
class EventoSerializer(Schema):
    user = fields.Nested(UserSerializer) 
    class Meta:
        fields = ("id", "nombre", "descripcion", "fecha", "lugar", "capacidad", "afiche")