"use strict";
//Question 1
let num1=5;
let num2=10;
let num3=8;
function max(num1,num2){
    if(num1>num2){
       return num1;
    }
    else return num2;
}
console.log("The largest number is : "+max(num1,num2));


//Question 2

function maxOfThree(num1,num2,num3) {
    if(num1>num2&&num1>num3) return num1;
    else if(num2>num1&&num2>num3) return num2;
    else return num3;
}
console.log("The largest number among three number is: "+maxOfThree(num1,num2,num3));

//Question 3

function isVowel(character) {
    let vowels=['a','e','i','o','u'];
    for (let i = 0; i < vowels.length; i++) {
        if(character===vowels[i]) return true;
    }
    return false;
}

console.log("Is the given character vowel ?:  "+isVowel('a'));

//Question 4

function sum(numbers) {
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total+=numbers[i];
    }
    return total;
}
function multiply(numbers) {
    let total=1;
    for (let i = 0; i < numbers.length; i++) {
        total*=numbers[i];
    }
    return total;
}
console.log("The sum of the given array is: "+sum([1,2,3,4]));
console.log("The multiply of the given array is: "+multiply([1,2,3,4]));

//Question 5
function reverse(name) {
    let reversed=" ";
    for (let i = name.length; i >=0; i--) {
        reversed+=name.charAt(i);
    }
    return reversed;
}
console.log("The reversed String is: "+reverse("jag testar"));

//Question 6
function findLongestWord(words) {
    let longestLength=-1;
    for (let i = 0; i < words.length; i++) {
        if(words[i].length>longestLength){
            longestLength=words[i].length;
        }
    }
    return longestLength;
}
console.log("The longest Length of word is: "+findLongestWord(["Bipin","Shree Krishna","Abhishek","Kamal"]));

//Question 7
/*
function filterLongWords(words,size) {
    let newWords=[];
    for (let i = 0; i < words.length; i++) {
        if(words[i].length>size){
            newWords.push(words[i]);
        }
    }
    return newWords;
}
console.log("new Array is: "+filterLongWords(["Bipin","Shree Krishna","Abhishek","Kamal"],6));
*/

const filteredWords=(words,i)=>words.filter(w=>w.length>i);
filteredWords(["Bipin","Shree Krishna","Abhishek","Kamal"],6).forEach(a=>console.log(a));

//Question 8
const numArray=[19,9,11,0,12];
const computeSumOfSquares=numArray.map(x=>x*x).reduce((x,y)=>x+y);
console.log(computeSumOfSquares);

//Question 9
const printOddNumbersOnly=numArray.filter(x=>x%2===1).forEach(x=>console.log(x));

//Question 10
const computeSumOfSquaresOfEvensOnly=numArray.filter(x=>x%2===0).map(x=>x*x).reduce((x,y)=>x+y);
console.log(computeSumOfSquaresOfEvensOnly);


//Question 11
const sumfunc=numArray.reduce((x,y)=>x+y);
console.log(sumfunc);

const multiplyfunc=numArray.reduce((x,y)=>x*y);
console.log("Question 11=> "+multiplyfunc);

//Qustion 12
function findSecondBiggest(numbers){
    let first=0,second=0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]>first){
            second=first;
            first=numbers[i];
        }
        else if(numbers[i]>second&&numbers[i]!=first){
            second=numbers[i];
        }
    }
    return second;
}
console.log(findSecondBiggest(numArray));


//Question 13
 function printFibo(n,a,b){
     let fibo=[];
     let prev;
    while (n>0) {
        prev=a;
        a=a+b;
        b=prev;
        fibo.push(b);
        n--;
    }
    return fibo;
 }
 console.log(printFibo(6,0,1));



 function loginClicked(){
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const website=document.getElementById("website");
    const checkout=document.getElementById("checkout");
   
     console.log("Email :"+email.value," Password: "+password.value," Website: "+website.value);
 }

 function submitted(){
     const pNumber=document.getElementById("pNumber").value;
     const pName=document.getElementById("pName").value;
     const pPrice=document.getElementById("pPrice").value;
     const pQty=document.getElementById("pQty").value;
     const pSupplier=document.getElementById("pSupplier").value;

     let newWindow=window.open("","","width=550,height=350");
     newWindow.console.log("Product Number: "+pNumber," Name: "+pName," Price: "+pPrice," Qty: "+pQty," Supplier: "+pSupplier);
 }

 function counterClock(){
     let now=new Date();
     let year=now.getFullYear();
     let month=now.getMonth();
     let day=now.getDay();
     let hour=now.getHours();
     let minute=now.getMinutes();
     let second=now.getSeconds();

     let datetime=year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
     return datetime;
     

 }
 setInterval(function(){
   let currentTime = counterClock();
    document.getElementById("clock").innerHTML = currentTime;
}, 1000);
