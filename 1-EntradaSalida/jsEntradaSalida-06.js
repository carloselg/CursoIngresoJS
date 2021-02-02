/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaraciones
	var primero;
	var segundo;
	var resultado;
	var PrimeroParseado;
	var SegundoParseado;

	//Asignaciones
	primero  = txtIdNumeroUno.value;
	segundo  = txtIdNumeroDos.value;

	//Transformar Parse

	PrimeroParseado = parseInt(primero);
	SegundoParseado = parseInt(segundo);

	//Operacion Aritmetica

	resultado = PrimeroParseado + SegundoParseado;

	//Mostrar

	alert("El suma es " + resultado );
}

