class Persona{
	constructor(nombre, edad, mail){
		this.nombre = nombre;
		this.edad = edad;
		this.mail = mail
		this.perso = [nombre, edad, mail]
	}
	agregar(nombre, edad, mail){
		this.perso.push(nombre)
		this.perso.push(edad)
		this.perso.push(mail)
	
	}
}
class datos{
	constructor(nombre, descripcion, motivo, duracion, celular){
		this.nombre = nombre
		this.descripcion = descripcion
		this.motivo = motivo
		this.duracion = duracion
		this.celular = celular
		this.info = [nombre, descripcion, motivo, duracion, celular]
	}
		
		
}