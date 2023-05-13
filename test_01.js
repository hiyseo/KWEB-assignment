function getDivisors(x){
    const arr= new Array();
    for(let i=1; i<=x; i++){
        if(x%i==0){
            arr.push(i);
        }
    }
    console.log(arr);
}

getDivisors(5);
getDivisors(24);
getDivisors(196);