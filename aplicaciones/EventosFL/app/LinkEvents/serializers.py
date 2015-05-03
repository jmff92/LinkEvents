from marshmallow import Serializer, fields
 
class UserSerializer(Serializer):
    class Meta:
        fields = ("id", "username", "email", "password", "nombre", "apellido", "isAdmin")
 
class EventoSerializer(Serializer):
    user = fields.Nested(UserSerializer) 
    class Meta:
        fields = ("id", "nombre", "descripcion", "fecha", "lugar", "capacidad", "afiche")