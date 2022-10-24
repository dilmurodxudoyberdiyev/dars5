

let a = +prompt("birinchi sonni kiriting");
let b = prompt("amalni kiriting");
let c = +prompt("ikkinchi sonni kiriting");

function calc(a){
    if ( b =="+"){
        natija = a + c
        console.log(natija);
    }
    else if (b =="-"){
        natija = a - c
        console.log(natija);
    }
    else if (b=="*"){
        natija = a * c
        console.log(natija);
    }
    else if (b =="/"){
        natija = a/ c
        console.log(natija);
    }

}
// let k =+prompt("k sonni kiriting");
// let n = +prompt("n sonni kiriting")
// for(i=1; i <=n; i++){
//     console.log(k);
// }

// k dan engacha bulgan sonni kursatadigan dastur
let k = +prompt("k sonni chiqaring");
let n = +prompt("n sonni kiriting");
if (n>k){
    for(let i = k; i <=n; i++){
        console.log(i);
    }
}
else{
    for(let i = n; i <=k; i++){
        console.log(i);
    }
}
