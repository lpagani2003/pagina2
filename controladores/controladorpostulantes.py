from flask import jsonify,request
from app import *
from modelos.modelopostulantes import *

# crea los endpoint o rutas (json)
@app.route('/postulantes',methods=['GET'])
def get_Postulantes():
    all_postulantes=Postulante.query.all()     # query.all() lo hereda de db.Model
    result=postulantes_schema.dump(all_postulantes)  # .dump() lo hereda de ma.schema
    return jsonify(result)

@app.route('/postulantes/<id>',methods=['GET'])
def get_postulante(id):
    postulante=Postulante.query.get(id)
    return postulante_schema.jsonify(postulante)

@app.route('/postulantes/<id>',methods=['DELETE'])
def delete_postulante(id):
    postulante=Postulante.query.get(id)
    db.session.delete(postulante)
    db.session.commit()
    return postulante_schema.jsonify(postulante)

@app.route('/postulantes', methods=['POST']) # crea ruta o endpoint
def create_postulante():
    print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    email=request.json['email']
    cv=request.json['cv']
    puesto=request.json['puesto']
    new_postulante=Postulante(nombre,apellido,email,cv,puesto)
    db.session.add(new_postulante)
    db.session.commit()
    return postulante_schema.jsonify(new_postulante)

@app.route('/postulantes/<id>' ,methods=['PUT'])
def update_postulante(id):
    postulante=Postulante.query.get(id)
   
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    email=request.json['email']
    cv=request.json['cv']
    puesto=request.json['puesto']
    estado=request.json['estado']
    anotaciones=request.json['anotaciones']

    postulante.nombre=nombre
    postulante.apellido=apellido
    postulante.email=email
    postulante.cv=cv
    postulante.puesto=puesto
    postulante.estado=estado
    postulante.anotaciones=anotaciones
    db.session.commit()
    return postulante_schema.jsonify(postulante)
 
 