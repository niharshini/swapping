console.log("Swapping using Pass by Value :");

function swapPassByValue(a,b){
    console.log("Values before swapping are a ="+ a +" " + "b ="+ b);
    let temp;
    temp = b;
    b = a;
    a = temp;
    console.log("Values after swapping are a ="+ a + " " + "b ="+ b);
}
swapPassByValue(10,20);