function checkYuGiOh(n) {
    let checkedDivisibles;
    if(!Number(n)){
        let result = JSON.stringify(n);
        return `invalid parameter: "${result}"`;
    }

    else{
        let checkDivisible = [];

        for (let i=1; i<=n; i++){
            checkDivisible.push(i);
        }
    

        for (let i=1; i<=checkDivisible.length; i++){
        
            if (checkDivisible[i]%2 == 0){
                if(checkDivisible[i]%3 == 0 && checkDivisible[i]%5 == 0){
                    checkDivisible[i] = "yu-gi-oh";
                }
                else if(checkDivisible[i]%3 == 0){
                    checkDivisible[i] = "yu-gi";
                }
                else if(checkDivisible[i]%5 == 0){
                    checkDivisible[i] = "yu-oh";
                }
                else{
                    checkDivisible[i] = "yu";
                }
            }

            else if (checkDivisible[i]%3 == 0){

                if(checkDivisible[i]%5 == 0 ){
                    checkDivisible[i] = "gi-oh";
                }
                else {
                    checkDivisible[i] = "gi";
                }
            }

            else if (checkDivisible[i]%5 == 0){
                checkDivisible[i] = "oh";
            }
        
        };
        return checkDivisible;
    };
    checkedDivisibles = checkDivisible;
    return checkedDivisibles;
}

console.log(checkYuGiOh('5'));
