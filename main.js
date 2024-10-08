// VARIABLES

// 1 y 2
alert('JavaScript funcionando correctamente');
// 3
let variableSinValor;
// 4
let booleano1= true;
let booleano2= false;
// 5
const PI= 3.14;
// 6
const TAU= 2*PI;
// 7
const miNombre= "Alberto";
// 8
const miNumeroFav= 8;
// 9
let esAzul= true;
// 10
console.log(miNombre.length)
// 11
console.log(typeof miNumeroFav)
// 12
console.log(`Mi nombre es ${miNombre} y mi número favorito es ${miNumeroFav}`);
// 13
console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase());
// 14
console.log("Hola soy un crack".substring(0,4));
// 15
let str= miNumeroFav.toString();
console.log(typeof miNumeroFav);
// 16
const miApellido= "Santos";
let procedencia=(`El apellido ${miApellido} procede de España`);
console.log(procedencia);
// 17
// console.log(PI.toFixed(2)); 
// me da error


// ARRAYS

// 1
const arrayVacio= [];
// 2
const arrayNumeros=[0,1,2,3,4,5,6,7,8,9];
// 3
const arrayNumeros2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// 4
const arrayNumerosPares=[0,2,4,6,8];
// 5
const arrayNumerosNeg=[0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
// 6
const holaMundo=['Hola','Mundo'];
// 7
const loGuardoTodo=['hola','que',23,42.33,'tal'];
// 8
const arrayDeArrays= [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
// 9
console.log(loGuardoTodo.length);
// 10
loGuardoTodo.push(8);
console.log(loGuardoTodo[5]);
// 11
console.log(loGuardoTodo[1]);
// 12
loGuardoTodo.unshift('Euralio');
console.log(loGuardoTodo[0]);


// OBJETOS

// 1
const coche={
    marca:"Lamborghini",
    modelo:"Gallardo",
    matrícula:"3830DBC",
},
// 2
const casa={
    codPostal:36211,
    calle:"Los Ángeles",
    portal:46,
    piso:5,
},
// 3
const FullStackDeveloper ={
    lenguajes: ['javascript', 'php','mercury','prolog'],
    proyectos: ['mi página personal', 'e-commerce', 'blog personal',]
},
// 4
const Perro ={
    nombre:'Rex',
    raza:'Caniche',
    color:'Marrón',
    edad:6,
},
// 5
const Noticia ={
    titular:'Los perros negros',
    cuerpo:'A Jeremy, huérfano desde los ocho años, siempre le han fascinado los padres de sus amigos. En la adolescencia, cuando ellos se rebelaban contra sus padres, él era el buen chico que les acompañaba y satisfacía sus deseos. Ahora, a los cuarenta años, su último amor filial son los padres de su esposa, June y Bernard Tremaine, personas de cierta notoriedad, cuya biografía Jeremy ha decidido escribir.',
},
// 6
const Persona={
    nombre: 'Alberto',
    apellidos: 'Santos González',
    edad:26,
},
// 7
console.log(Persona['nombre']),
// 8
console.log(FullStackDeveloper['javascript']),
// 9
const Portatil = {
    marca: 'Dell'
},
console.log(Portatil.marca);
// 10


