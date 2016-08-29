var condicion = true;
do{

	var opcion = parseInt(prompt("Escoga una opción: \n" +
	"1. Suma \n"+
	"2. Resta \n" + 
	"3. Multiplicación \n" +
	"4. División \n" +
	"5. Resto \n" +
	"6. Comparación \n" +
	"7. Salir"));

	if(opcion <= 6){
		var num1 = parseInt(prompt("Ingrese el primer numero: "));
		var num2 = parseInt(prompt("Ingrese el segundo numero: "));
		switch(opcion){
			case 1:
				var suma = num1 + num2;
				alert("La suma es: " + suma);
				break;
			case 2:
				var resta = num1 - num2;
				alert("La resta es: " + resta);
				break;
			case 3:
				var multi = num1 * num2;
				alert("La multiplicación es: " + multi);
				break;
			case 4:
				var divi = num1 / num2;
				alert("La división es: " + divi);
				break;
			case 5:
				var resto = num1 % num2;
				alert("El resto es: " + resto);
				break;
			case 6:
				if (num1 == num2)
					alert(num1 + " es igual que " + num2);
				else if(num1 > num2)
					alert(num1 +" es mayor que "+ num2);
				else
					alert(num1 +" es menor que "+ num2);
				break;
		}
	}else if(opcion == 7){
		condicion = false;
	}
}while (condicion);