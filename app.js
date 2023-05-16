// PREGUNTA 1 :
// Crea una funcion que retorne la potencia de un numero dado,esta funcion
// debera recibir la potencia y el numero a potenciar.

function potenciacion(base, potencia) {
        let numero = 1;
         for ( i = 1; i <= potencia; i++ ) {
         numero = numero * base;
         numero = numero;
        };
console.log('el resultado es '+ numero);       
};
potenciacion(5, 4);


// PREGUNTA 2 :
// Crea una funcion que tome el array numeros y devuelva la suma de los cubos
// sumOfCubes(1, 5, 9) --> 855
// Since 1 3 + 5 3 + 9 3 = 1 + 125 + 729 = 855

function  sumadecubos(a, b, c) {
       let numero1 = 1;
       for ( i = 1; i <= 3; i++ ) {
            numero1 = numero1 * a;
            numero1 = numero1;
       };
       let numero2 = 1;
       for ( i = 1; i <= 3; i++ ) {
            numero2 = numero2 * b;
            numero2 = numero2;
         };
       let numero3 = 1;
       for ( i = 1; i <= 3; i++ ) {
            numero3 = numero3 * c;
            numero3 = numero3;
        };
 let total = numero1 + numero2 + numero3;        
 console.log('la suma de los cubos es ' + total);
};
sumadecubos(1, 5, 9);


// PREGUNTA 3:
// Utilizando funcion arrow, crear una funcion que reciba como parametros un nombre
// apellido, y edad y los retorne en un string concatenado "Hola mi nombre es sebastian
// yabiku y mi edad 33"
 

const personal = (nombre,apellido,edad) => 'Hola mi nombre es '+nombre+' y mi apellido es '+apellido+' y mi edad es '+edad;

console.log(personal("Sebastian","Yabiku",33));



// PREGUNTA 4 :
// Crear una funcionquer reciba n cantidad de argumentos y los sume )utilizar parametros
// rest)

function sumaparametro(...rest) {
     let suma = 0 ;
     for ( let i=0; i<rest.length ; i++) {
          suma = suma + rest[i];
     }
     return suma;
};
console.log(sumaparametro(10,20,30,40,50));



// PREGUNTA 5 :
// Crear una funcion que reciba un array de valores y filtre los que no son string.

function nosonstring(valores) {

     for (let i=0; i<valores.length ; i++) {
      
          if  ( valores[i]>=0 || valores[i]<=-0 ) {
    //         console.log(valores[i] + " Este elemento no es un string");
         } else {
  //           console.log(valores[i]+ " Este elemento es un string");
         } ;   
     };
    // return  valores;
 };
let valores = [1,2,3,"lalo",50,"Jesus",0.50,"Luis",20,-4];
console.log(nosonstring(valores));   


// Pregunta 6 :
// Cree una funcion que tome un array de numeros y devuelva los numeros minimos
// y maximos en ese orden.
// minMax( [1,2,3,4,5]) -> [1,5]

function maxmin(...arregloNum) {
     let longitud = arregloNum.length;
     let maximo = 0;
     let minimo = 0;
     if ( longitud > 0 ) {
          maximo = Math.max(...arregloNum);
          minimo = Math.min(...arregloNum);
     };
  //   console.log("El numero maximo es " + maximo);
  //   console.log("El numero minimo es " + minimo);
};
const arregloNum = [10,4,30,2,50,605,6,900];
console.log(maxmin(...arregloNum));



// PREGUNTA 7 :
// Escriba una funcion que tome un array de 10 enteros  (entre 0 y 9)
// y devuelva una cadena en formade un numero de telefono
// formatPhoneNumber([1,2,3,4,5,6,7,8,9]) -> "(123) 456-7890"


function enteros(arrayEnteros) {
     let acumula = [];
     let acumula2 =[];
     let acumula3 = [];
        
     for ( let i=0; i<arrayEnteros.length ; i++ ) {
          if ( i < 3 ) {
             acumula = acumula + arrayEnteros[i];
          } else if ( i < 6 ) {
               acumula2 = acumula2 + arrayEnteros[i];
          } else if ( i <= 9 ) {
              acumula3 = acumula3 + arrayEnteros[i];
          };
          };
         return "("+acumula+") " + acumula2 + "-"+ acumula3 ;
};
let arrayEnteros = [1,2,3,4,5,6,7,8,9,0];
console.log(enteros(arrayEnteros));


// PREGUNTA 8 :
// Dada una palabra  escriba  una funcion que devuelva el primer indice y el ultimo
// indice de un caracter.
// charIndex("hello","l") -> [2,3]
// the first "l" has index 2, the "c" has index 3.
//
// charIndex("circumlocution","c") -> [0,8]
// the first "c" has i  ndex 2, the "c" has index 8.

function primerUltimo(palabra,caracter) {
     
     let primerIndice = palabra.indexOf(caracter);
     let ultimoIndice = palabra.lastIndexOf(caracter);
     return [primerIndice,ultimoIndice];
};
console.log(primerUltimo("pachacutec","c"));


// PREGUNTA 9 :
// Cree una funcion que tome un array de objetos y devuelve la suma de los 
// presupuestos de las personas.
// getBudgets([ {name : "John",age:21, budget: 23000}
//                {name : "Steve",age:32, budget: 40000}
//               {name : "Martin",age:16, budget: 2700} ]) -> 65700


 const  arrayObjetos = [ {name : "John",age:21, budget: 2400},
                        {name : "Steve",age:32, budget: 15000},
                        {name : "Martin",age:16, budget: 9000} ];

function devPresupuesto(arrayObjetos) {
     sumapresu = 0;
     for ( let i=0; i<arrayObjetos.length; i++) {
          sumapresu = sumapresu + arrayObjetos[i].budget;
     };
     return sumapresu;
     };
console.log(devPresupuesto(arrayObjetos));


 
// PREGUNTA 10 :
// Crea una funcion que tome unn array de estudiantes y devuelva un array de nombres 
// de estudiantes.
// getStudentNames( [
//   { name : "steve"}
//   { name : "mike"}
//   { name : "john"} ]
//   ->["steve","mike","john"]


function estudiantes(datos) {
   nuevoArray = [];
   for ( let i=0 ; i<datos.length; i++ ) {
          nuevoArray.push(datos[i].name);
   };
   return nuevoArray;
   };
let datos = [{name : "Luis"},{name : "miguel"},{name : "bryan"}];
console.log(estudiantes(datos));


// PREGUNTA 11 :
// Crea una funcion donde, dadoel numero n, devuelva la suma de todos los
// numeros cuadrados incluyen n.

function sumacuadrados (base) {
     let numero = 0;
      for ( let i = 1; i <= base; i++ ) {
      numero = numero + (i * i);
      numero = numero;
     };
console.log('la suma de los cuadrados de los numeros del 1 al '+ base + ' es '+ numero);       
};
sumacuadrados(6);


// PREGUNTA 12 :
// Cree una funcion para multiplicar todos los valores de un array por la
// cantidad de valores del array dado.
// multiplyByLength([2,3,1,0]) -> [8,12,4,0]


function multiplicar(arrayNum) {
     let numeroElemento= arrayNum.length;
     let newArray = [];
     for ( let i = 0; i < arrayNum.length; i++ ) {
          newArray.push(arrayNum[i] * numeroElemento);
          console.log(newArray)
     };
     return newArray;
};
let arrayNum = [2,3,1];
console.log(multiplicar(arrayNum));


// Pregunta 13 :
// Cree una funcion que tome un numero como argumento
// y devuelva una matriz de numeros contando desde este numero a cero.
// countdown(5) -> [5,4,3,2,1]


function contDown(num) {
     let nArray = [];
     
     for ( let i = num; i >= 1; i-- ) {
          nArray.push(i);
     };
     return nArray;
};

console.log(contDown(7));


// Pregunta 14 :
// Cree una funcion que tome un array y devuelva la diferencia entre el
// numero mas grande y mas pequeño.
// countdown(5) -> [5,4,3,2,1]


function diferenciaNumeroGrandePequeño(...numeros) {
     
     let longitudarray = numeros.length;
     let numGrande = 0;
     let numPequeño = 0;

     if ( longitudarray > 0 ) {
          numGrande = Math.max(...numeros);
          console.log(numGrande);
          numPequeño = Math.min(...numeros);
          console.log(numPequeño);
     };
     return "la diferencia de "+ numPequeño + " y " + numGrande + " es " + (numPequeño + numGrande);
};    
let numeros = [4,2,5,6,8,-50,-100,300,800];

console.log(diferenciaNumeroGrandePequeño(...numeros));


// Pregunta 15 :
// Cree una funcion que filtre las cadenas de un array y devuelva un array que
// solo contenga enteros
// filetrList ( [ 1,2,3,"x","y",10 ] ) -> [1,2,3,10]


function devuelveEnteros() {
     
     let long = cadenasEnteros.length;
     let Enteros = [];
     
     for ( let i=0; i<long ; i++) {
          if (cadenasEnteros[i] >= 0 ) {
            Enteros.push(cadenasEnteros[i]);
           };
      };     
     return Enteros ;
};    
let cadenasEnteros = [4,"Gianmarco",5,"Luis",8,"Miguel","Ivonne",300,"Bryan"];

console.log(devuelveEnteros(cadenasEnteros));


// Pregunta 16 :
// Cree una funcion que tome dos argumentos (elemento,tiempos). El primer argumento (elemento)
//  es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad
// de  veces que se debe repetir el elemento. Devuelve el resultado en un array.
// repeat(13,5) -> [13,13,13,13,13]


function repeat(a,b) {
     
     let arrayrepeat = [];
     
     for ( let i=1; i<=b ; i++) {
          
            arrayrepeat.push(a);
     };        
     return arrayrepeat ;
};    
console.log(repeat(20,10));


