//alert("estoy aqui");  Comprobando conexion con javascript
 //function isValidCard(numero_tarjeta){ 

    var tarjetaIngresadaUsuario = prompt("Indique los digitos de su tarjeta. 16 dígitos");

        var cantidadCaracteres = tarjetaIngresadaUsuario.length;
             //Comenzando a aplicar Algoritmo Luhn.  Recorrer dato   
            for (var i = 0; i < cantidadCaracteres; i++) {
                
                /*var msg = "iteracion: " + i + "</br>";
                document.write(msg);   (comprobando que el for corre)*/  
                //recorrer cada caracter para par o impar (x2)
                var caracter = parseInt(tarjetaIngresadaUsuario.charAt(i));
                /*var msg = "caracter: " + caracter + "</br>";
                document.write(msg);  (comprobando que variable caracter corre)*/
                
                //Buscando pares
                var tipo = (caracter%2)?"par":"impar"; 
                /*var msg = "caracter: " + caracter + " es:  " + tipo +"</br>";
                document.write(msg);  (comprobando que variable tipo corre) */
               
                if (tipo == "par") {  
                    var msg = "caracter: " + caracter + " es:  " + tipo +"</br>";
                    document.write(msg);  //Comprobando si el if corre)
                  
                    //
                    var parPorDos = caracter * 2; 
                   
                   // Para validar si var parPorDos es mayor o igual 10
                    if (parPorDos >=10){
                        
                    }
                /*Paso 1 Luhn:  El primer paso es tomar 
                todos los números en posiciones pares y multiplicarlos por 2*/
                 //pares[i] =   parPordos;

                 /* ----------------------------------------------------------- 
                 Hasta aquí llego mi código que compila, los demás intentos
                  me bloqueaban el desarrollo del codigo anterior
                  ------------------------------------------------------------*/ 

                } 

    }


//function isValidCard(numero_tarjeta){    





