console.log("Swapping using Pass by Reference :");
let num ={
    a : 10,
    b : 20
}

function swapPassByValue(num){
    console.log("Values before swapping are a ="+ num.a +" " + "b ="+ num.b);
    let temp;
    temp = num.b;
    num.b = num.a;
    num.a = temp;
    console.log("Values after swapping are a ="+ num.a + " " + "b ="+ num.b);
}
swapPassByValue(num);