from flask import jsonify,request
from app import *
from modelos.modelopasantes import *

# crea los endpoint o rutas (json)
@app.route('/pasantes',methods=['GET'])
def get_Pasantes():
    all_pasantes=Pasante.query.all()     # query.all() lo hereda de db.Model
    result=pasantes_schema.dump(all_pasantes)  # .dump() lo hereda de ma.schema
    return jsonify(result)

@app.route('/pasantes/<id>',methods=['GET'])
def get_pasante(id):
    pasante=Pasante.query.get(id)
    return pasante_schema.jsonify(pasante)

@app.route('/pasantes/<id>',methods=['DELETE'])
def delete_pasante(id):
    pasante=Pasante.query.get(id)
    db.session.delete(pasante)
    db.session.commit()
    return pasante_schema.jsonify(pasante)

@app.route('/pasantes', methods=['POST']) # crea ruta o endpoint
def create_pasante():
    print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    email=request.json['email']
    cv=request.json['cv']
    area=request.json['area']
    new_pasante=Pasante(nombre,apellido,email,cv,area)
    db.session.add(new_pasante)
    db.session.commit()
    return pasante_schema.jsonify(new_pasante)

@app.route('/pasantes/<id>' ,methods=['PUT'])
def update_pasante(id):
    pasante=Pasante.query.get(id)
   
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    email=request.json['email']
    cv=request.json['cv']
    area=request.json['area']
    estado=request.json['estado']
    anotaciones=request.json['anotaciones']

    pasante.nombre=nombre
    pasante.apellido=apellido
    pasante.email=email
    pasante.cv=cv
    pasante.area=area
    pasante.estado=estado
    pasante.anotaciones=anotaciones
    db.session.commit()
    return pasante_schema.jsonify(pasante)
 
 
