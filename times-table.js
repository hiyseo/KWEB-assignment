const displayTimes = () => {
    var num = document.getElementById('number').value;
    multi_table=[]
    if (num>=1 && num<=9){
        for (let i=1; i<=9;i++){
            multi_table.push(num*i);
        }
    }
    else{
        multi_table.push('Input Error!');
    }
    document.getElementById('times-result').innerText=multi_table;
}