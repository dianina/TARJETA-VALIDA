//alert("estoy aqui");  Comprobando conexion con javascript

    var tarjetaIngresadaUsuario = prompt("Indique los digitos de su tarjeta. Sólo números");

        var cantidadCaracteres = tarjetaIngresadaUsuario.length;

            for (var i = 0; i < cantidadCaracteres; i++) {
                
                /*var msg = "iteracion: " + i + "</br>";
                document.write(msg);   (comprobando que el for corre)*/  
                //recorrer cada caracter para par o impar (x2)
                var caracter = parseInt(tarjetaIngresadaUsuario.charAt(i));
                /*var msg = "caracter: " + caracter + "</br>";
                document.write(msg);  (comprobando que variable caracter corre)*/
                var tipo = (caracter%2)?"impar":"par";
                /*var msg = "caracter: " + caracter + " es:  " + tipo +"</br>";
                document.write(msg);  (comprobando que variable tipo corre) */
                //Comenzando a aplicar Algoritmo Luhn y comprobando si el if corre)
                if (tipo == "impar") {  
                    var msg = "caracter: " + caracter + " es:  " + tipo +"</br>";
                    document.write(msg); 
                 
                
                var imparPordos = caracter * 2;  
                /*Paso 1 Luhn:  El primer paso es tomar 
                todos los números en posiciones impares y multiplicarlos por 2*/
                 //impares[i] = imparPordos;

                } 

    }

//function isValidCard(numero_tarjeta){    


//alert("bien");

//}


