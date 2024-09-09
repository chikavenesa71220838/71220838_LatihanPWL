const cars = ['BMW','Mercy','ASD','XYZ'];
let text = '';
for(let i = 0 ; i<cars.length; i++){
    //melihat jumlah cars
    text += cars[i]+'<br>';
}

document.getElementById('demo').innerHTML = text;

//hasilnya BMW Merxy ASD XYZ tapi ke bawah

for(let i=0; i<5;i++){

    text+= "i="+i+'<br>';
}
document.getElementById('demo').innerHTML = text;

//for in 
const person = {ln:'John', fn:'Doe', age:"25"}
text='';
for(let x in person){
    text += person[x]+'<br>'
}
document.getElementById('demo').innerHTML = text;


const number = [8,9,2,17,19];
text ='';
for (let x in number){
    text += number[x] + "<br>";
}
document.getElementById('demo').innerHTML = text;


//for dalam for
const coba = [
    {name:'Danny',nim:'22074222'},
    {name:'Nila',nim:'22074223',gender:'F'},
    {name:'Mitta',nim:'22074224', status:'menikah'}
];
text =''
for (let x in coba){
    for (let i in coba[x]){
        text += coba[x][i]+"; ";
    }
    text+= '<br>'
}
document.getElementById('demo').innerHTML = text;

//cara 2
text += ''
for(let i of coba){
    text += `${i.name}: ${i.nim}: ${i.gender ?? ''}: ${i.status ?? ''} <br>`
    //text += "<br>";
}

text += "<br>";
for(let i in coba){
    text += `${coba[i].name}: ${coba[i].nim}: ${coba[i].gender ?? ''}: ${coba[i].status ?? ''} <br>`
}

document.getElementById('demo').innerHTML = text;

//map
const fruits = new Map();
fruits.set('apples',500)
fruits.set('bananas',300)
fruits.set('oranges',200)

document.getElementById('demo').innerHTML = fruits.get("apples");


//ITERASI map
let recipeMap = new Map(
    [
        ['cucumber', 500],
        ['tomtato', 350],
        ['orange', 200]
    ]
);
text='';
for (let veg of recipeMap.keys()){
    text += recipeMap.get(veg)+'<br>';
}

text += '<br>'
for (let veg of recipeMap.values()){
    text += veg+'<br>';
}

text += '<br>'
//itearate over(key, value) for of
for(let entry of recipeMap){
    text+= entry+'<br>';

}

text += '<br>'
//itearate over(key, value) for each
recipeMap.forEach((value, key) => {
    text+= `${key} =>  ${value} <br>`;
});


document.getElementById('demo').innerHTML = text;

//set
let satset = new Set();
let danny = {name: "Danny"};
let nila = {name: "Nila"};
let mita = {name: "Mita"};

satset.add(danny);
satset.add(nila);
satset.add(mita);
satset.add(danny);
mita.name="1232";
let asd = mita;
console.log(mita==asd)
satset.add(asd);

text='';
text+= satset.size +'<br>';
for(let user of satset){
    text+= user.name
}
document.getElementById('demo').innerHTML = text;

//array n object
const ages =[32,33,5,9];
const checkAdult = (age) =>{
    return age >18
};
const result = ages.filter(checkAdult);
console.log(result)

const check = checkAdult(20);
if(check){
    document.getElementById('demo').innerHTML = 'dewasa';
}
else{
    document.getElementById('demo').innerHTML = 'muda';
}

let employees = [
    {name: 'danny', dept:'it'},
    {name: 'nila', dept:'feb'},
    {name: 'mita', dept:'it'}
];

const comp = (employee) => {
    return `<p> ${employee.name}:${employee.dept}</p>`;
};

const ITEmp = employees.filter
((employee) => employee.dept =="it");


document.getElementById('demo').innerHTML = ITEmp.map((emp)=>comp(emp)).join("");

//sort
const frts = ['Banana','Apol','Orang','apple'];
frts.sort();
document.getElementById('demo').innerHTML = frts;

// frts.sort((a,b)=>{return b-a});
// document.getElementById('demo').innerHTML = frts;

frts.reverse();
document.getElementById('demo').innerHTML = frts;

//numeric sort
text =''
const point = [40,100,1,5,25,10];

point.sort((a,b)=>{return a-b});
text=+'sort number: '+point+"<br>";

point.sort((a,b)=>{return b-a});
text=+'sort number: '+point+"<br>";

document.getElementById('demo').innerHTML = text;
