const demo = document.getElementById("demo");
const testLet = () => {
    // ini adalah functtion () => functionnya ngapain
    let num = 100;
    {
        let num = 200;
        //klo return di sini yg di return yg di sini
    }
    return num;
    //ini yg di return yang let num 100
}
document.getElementById("demo").innerHTML = testLet();

const testVar = () => {
    //var itu global jdi varnya ketimpa lgi sm yg baru
    var num = 101;
    {
        var num = 201;
    }
    return num;
    //enih hrusnya ada penjelasannya lgi nnti tnya wkwkwk

}

document.getElementById("demo").innerHTML = testVar();

try{
    const PI = 3.141598765432;
    PI = 3.14;
    document.getElementById('demo').innerHTML = PI;
}
catch(err){
    document.getElementById('demo').innerHTML = err;
}

//Deklarasi variabel tipe data primitve 
// let nama = 'Bonbon'; //string
// let age = 25; //number
// let isApproved = true; //boolean
// let firstName; //not defined -> undefined
// let lastName = null; // empty the variable, type of var: object
// demo.innerHTML = `<p>This Undefined variable is: ${lastName}</p>`;

var a = 3.14;
var b = a;
a = 4;
demo.innerHTML = `<p>${b}<\p>`;

//tipe data by reference
let person = {
    name,
    age
}

console.log("Person:", person, "Name =", person.name, "Age:", person.age);

person["name"] = 'Mary';
person.age = 25;
let selection = "name";

console.log("Person:", person, ' Name =', person['name'], 'Age:',person['age'], person[selection]);



//array 

let selectColors = ['red','blue'];
selectColors.push('pink');
selectColors.push(1);
console.log("Selected Colors: ", selectColors, selectColors[0]);
console.log(selectColors.pop());
//FIFO yg diambil paling akhir nnti yg ilang yg 1
console.log("Selected Colors: ", selectColors, selectColors[0]);

function greet(names){
    names ='mbuh'
    console.log('halo'+names)

}
let names = 'John';
greet (names);
// out: haloJohn
greet ('Maria');
console.log(names);
//haloMaria


//by reference jg
var a = [1,2,3]
var b = a;
a[0] = 99;
alert(b);

//out: 99,2,3


//4 cara membuat function
function rectangle(w,h){
    return w*h;
}
console.log(rectangle(2,3))

//func expressiion
const rectangle2 = function(w,h){
    return w*h;
}
console.log(rectangle2(3,4))

//func arrow expression
const rectangle3 = (w,h) => {
    return w*h;
}

console.log(rectangle3(4,5))

//shorthand arrw export
const rectangle4 = (w,h) => w*h;
console.log(rectangle4(5,6));

//ES5
//object car di dalamnya ada atribut name sm prod, method showprod
var car = {
    name : 'Honda',
    products: ['jazz','civic','hrv'],
    showProduct: function(){
        this.products.map(
            function(products){
                console.log(`${this.name} has launched ${product}`);
            }.bind(this)
        );
    },
};
car.showProduct();

//es6
var car = {
    name : 'Honda',
    products: ['jazz','civic','hrv'],
    showProduct: function(){
        this.products.map((product)=>{
            console.log(`${this.name} has launched ${product}`);
        });
    },
};
car.showProduct();

// let firstName = ' john';
let lastName = 'doe';
// let text = `Welcome ${firstName} ${lastName}`;
document.getElementById('demo').innerHTML = text;

text = `
ini
multi
line
string
`

document.getElementById('demo').innerHTML = text;

const formatMsg = (name, id, avatar) => {
    return{
        name,
        id,
        avatar,
        timestamp: Date.now(),
        save(){
            console.log('save')
        }
    }
}

// const msg = formatMsg('belajar programming',1,'https://i.pravatar.cc/300');
// document.getElementById('demo').innerHTML = msg.save();
// console.log(msg)

let person = {
    firstName :'John',
    lastName : 'Doe'
};

let {firstName,lastName: lname} = person;

document.getElementById('demo').innerHTML = `firstName: ${firstName}, lastname ${lname}`;


let func = (a,b=2) => {
    return a+b;
}
document.getElementById('demo').innerHTML = func(10);
document.getElementById('demo').innerHTML = func(10,5);

const q1= ['jan','feb','mar'];
const q2 = ['apr','mei','jun'];
const q3 = ['jul','aug','sept'];
const q4 = ['okt','nov','dec'];

const year = [...q1,...q2,...q3,...q4];
console.log(year)

const year2 = [q1,q2,q3,q4];
console.log(year2)
//pake titik2 biar keconcat, jdi kegabung semua, klo satu-satu kepisah jdinya. tpi kalo di innerhtml sama hasilnya, yg beda di console

const numbers =  [23,24,25,26,27];
let maxValue = Math.max(...numbers);
//klo ga pake titik2 jdinya nan, karena ga baca valuenya
console.log(maxValue)

document.getElementById('demo').innerHTML = year;
//ngeprint semua bulan



import {name,age} from './person.js';
import { message } from './person.js';
let text = "name, age";
document.getElementById('demo').innerHTML = text;
document.getElementById('demo').innerHTML = message();
































































































































































































































































































