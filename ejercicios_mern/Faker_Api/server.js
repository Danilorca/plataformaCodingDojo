const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8080;


class Usuario{
  constructor(){
    this._id= faker.datatype.uuid() ;
    this.primer_nombre= faker.name.firstName() ;
    this.apellido=  faker.name.firstName()  ;
    this.numero_de_telefono= faker.phone.phoneNumber() ;
    this.email= faker.internet.email();
    this.contraseña = faker.internet.mac()  ;

  }
}

class Empresa {
    constructor(){
      this._id= faker.datatype.uuid();
      this.nombre= faker.name.firstName() ;
      this.dirección ={
        calle: faker.address.direction(),
        ciudad: faker.address.city(),
        estado: faker.address.state() ,
        código_postal: faker.address.zipCode() ,
        pais:faker.address.county()
      }
    }
}

app.post('/api/users/new',(req,res)=>{
  res.json( new Usuario());
})

app.post('/api/companies/new',(req,res)=>{
  res.json( new Empresa());
})

app.post('/api/user/company',(req,res)=>{
  res.json( [new Usuario(), new Empresa()]);
})

app.listen(port, ()=>console.log(`Te estoy escuchando ${port}`))
