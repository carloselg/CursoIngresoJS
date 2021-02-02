/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()

{	
	//Declaracion
	var edad;
	var nombre;

	//Asignacion La asignacion va de derecha a izquierda
	
	nombre = txtIdNombre.value ;

	edad= txtIdEdad.value;

	//Mostrar
	alert("Usted se llama " + nombre + " y su edad es " + edad);
}

