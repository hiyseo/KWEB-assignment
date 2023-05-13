function isValidNumber(x){
    if(x>=1 && x<=9){
        if(Math.ceil(x)==x){
            console.log('true');
        }
        else{
            console.log('false');
        }
    } else{
        console.log('false');
    }
}
isValidNumber(9);
isValidNumber('4');
isValidNumber('abc');
isValidNumber(-5);
isValidNumber(3.5);
isValidNumber(3/0);