//Definir dos variables, asignarles un valor y utilizar decisiones en primir en la consolña la que tenga mayor valor 

let a=28;
let b=49;

if(a<b){
    console.log("el numero mayor es:" + b);
}
else{

    console.log("el numero menor es:" + a);

} 

// definir tres variables asignarles un valor y utilizar desiciones para imprimir el de mayor valor

let c=29;
let d=35;
let e=10;

if(c>d && c>e){

    console.log("El numero menor es:"+ c);

}else if(d>c && d>e){
    console.log("El numero mayor es:"+ d);
}else{
    console.log("El numero menor es:"+ e);

}