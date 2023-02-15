from app import db,app,ma
# defino la tabla
class Postulante(db.Model):   # la clase Producto hereda de db.Model     
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    apellido=db.Column(db.String(100))
    email=db.Column(db.String(200))
    cv=db.Column(db.String(1500))
    puesto=db.Column(db.String(1000))
    estado=db.Column(db.Integer)
    anotaciones=db.Column(db.String(2000))
    def __init__(self,nombre,apellido,email,cv,puesto):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.apellido=apellido
        self.email=email
        self.cv=cv
        self.puesto=puesto
        self.estado=0
        self.anotaciones=""

with app.app_context():
    db.create_all()  # crea las tablas


#  ************************************************************
class PostulanteSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','apellido','email','cv','puesto','estado','anotaciones')
postulante_schema=PostulanteSchema()            # para crear un producto
postulantes_schema=PostulanteSchema(many=True)  # multiples registros
 
