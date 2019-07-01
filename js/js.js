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
    document.getElementById("personas").innerHTML=" "

    Personas.sort(function(a, b){
        if(a.nombre < b.nombre) { return -1; }
        if(a.nombre > b.nombre) { return 1; }
        return 0;
    })
    for(q=0;q<Personas.length; q++){
        var todo = Personas[q].nombre + " " + Personas[q].edad + " " + Personas[q].mail
        var n = document.createElement("LI");
        var t = document.createTextNode(todo);
        n.appendChild(t);
        document.getElementById("personas").appendChild(n);
     }
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

	var tabla =  document.getElementById("body1");
	var o = document.createTextNode(Informacion.length).nodeValue;
	var q = document.createTextNode(Informacion[Informacion.length-1].nombre).nodeValue;
	var f = document.createTextNode(Informacion[Informacion.length-1].descripcion).nodeValue;
	var n = document.createTextNode(Informacion[Informacion.length-1].motivo).nodeValue;
	var z = document.createTextNode(Informacion[Informacion.length-1].duracion).nodeValue;
	var x = document.createTextNode(Informacion[Informacion.length-1].celular).nodeValue;

	
	
	


	var columna = tabla.insertRow(-1); 
	var cel1 = columna.insertCell(0); 
	var cel2 = columna.insertCell(1); 
	var cel3 = columna.insertCell(2); 
	var cel4 = columna.insertCell(3); 
	var cel5 = columna.insertCell(4); 
	var cel6 = columna.insertCell(5); 
	cel1.innerHTML = o; 
	cel2.innerHTML = q;
	cel3.innerHTML = f;
	cel4.innerHTML = n;
	cel5.innerHTML = z;
	cel6.innerHTML = x;
	





	/*celda.appendChild(o);
	hilera.appendChild(celda);
	document.getElementById("body1").append(celda);*/
	


	/*celda.appendChild(o);
	hilera.appendChild(celda).insertrow(0)
	
	document.getElementById("body1").append(hilera)*/

	/*document.getElementById("body1").append(p)
	document.getElementById("body1").append(y)*/



/*
	
	y.appendChild(o)
	document.getElementById("body1").appendChild(y);

	

	y.appendChild(q);
	document.getElementById("body1").appendChild(y);



	y.appendChild(f);
	document.getElementById("body1").appendChild(y);

	y.appendChild(n);
	document.getElementById("body1").appendChild(y);

	y.appendChild(z);
	document.getElementById("body1").appendChild(y);

	y.appendChild(x);
	document.getElementById("body1").appendChild(y);


	





	/*
	var p = document.createElement("tr");  
	var y = document.createElement("td");
	var o = document.createTextNode(Informacion.length);
	var q = document.createTextNode(Informacion[v].nombre);
	var f = document.createTextNode(Informacion[v].descripcion);
	var n = document.createTextNode(Informacion[v].motivo);
	var z = document.createTextNode(Informacion[v].duracion);
	var x = document.createTextNode(Informacion[v].celular);

	p.appendChild();
	y.appendChild(o);
	document.getElementById("body1").appendChild(y);
	y.appendChild(q);
	document.getElementById("body1").appendChild(y);
	y.appendChild(f);
	document.getElementById("body1").appendChild(y);
	y.appendChild(n);
	document.getElementById("body1").appendChild(y);
	y.appendChild(z);
	document.getElementById("body1").appendChild(y);
	y.appendChild(y);
	document.getElementById("body1").appendChild(y);
	y.appendChild(x);
	document.getElementById("body1").appendChild(y);
	document.getElementById("body1").appendChild(p);*/








}















