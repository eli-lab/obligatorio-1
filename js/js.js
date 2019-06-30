window.addEventListener("load",inicio);

var Personas= [];
var Informacion=[];

function inicio(){

	document.getElementById("botonagregar").addEventListener("click", agregar)
	document.getElementById("botonagregar").addEventListener("click", opcionesnombres)
	document.getElementById("botonagregar2").addEventListener("click", Informacionn)
	document.getElementById("botonagregar2").addEventListener("click", primerbody)
	
}

function agregar(){
	var nombre = document.getElementById("nombre").value
	var edad = parseInt(document.getElementById("edad").value)
	var mail = document.getElementById("mail").value
	var todo = nombre + " " +edad + " " + mail


	var n = document.createElement("LI");   
    var t = document.createTextNode(todo);
     n.appendChild(t);
	document.getElementById("personas").appendChild(n); 


	var persona = new Persona(nombre, edad, mail);
	Personas.push(persona);
}
 

function ordenartablanom(){

	ordenar(Personas)

}

function ordenartablanum(){
	document.getElementById("personas").innerHTML=" "

	for(p=0;p<=(Personas.length+1);p++){
		for(i=0;i<Personas.length;i++){
			for(r=0;r<Personas.length;r++){
				if(Personas[i].edad>Personas[r].edad){
					Personas.push(Personas[i])
					Personas.splice(i, 1)
				}
			}
			r=0	
		}	
	}
	for(q=0;q<Personas.length; q++){
	   var todo = Personas[q].nombre + " " + Personas[q].edad + " " + Personas[q].mail
	   var n = document.createElement("LI");   
	   var t = document.createTextNode(todo);
	   n.appendChild(t);
	   document.getElementById("personas").appendChild(n);
	}
}

function opcionesnombres(){
	

		var f = document.createElement("option")
		var g = document.createTextNode(Personas[(Personas.length-1)].nombre)
		f.appendChild(g);
	   document.getElementById("opciones1").appendChild(f);
	
}

function Informacionn(){
	
		var nombre = document.getElementById("opciones1").value
		var descripcion = document.getElementById("descripcion").value
		var motivo = parseInt(document.getElementById("motivo").value)
		var duracion = parseInt(document.getElementById("duracion").value)
		var celular = parseInt(document.getElementById("celular").value)

		var info = new datos(nombre, descripcion, motivo, duracion, celular);
		Informacion.push(info);
}

function primerbody(){




	for(v=o;v<Informacion.length;v++){
	var p = document.createElement("tr");  
	var y = document.createElement("td")
	let o = document.createTextNode(Informacion[v].nombre);
	let o = document.createTextNode(Informacion[v].nombre);
	let o = document.createTextNode(Informacion[v].nombre);
	let o = document.createTextNode(Informacion[v].nombre);
	let o = document.createTextNode(Informacion[v].nombre);

	p.appendChild();
	y.appendChild(o);
	document.getElementById("body1").appendChild(y);
	document.getElementById("body1").appendChild(p);


	}
}














