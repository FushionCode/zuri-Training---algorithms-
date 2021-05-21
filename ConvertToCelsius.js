function convertFarhToCelsius(farh){
    let Cels = (farh - 32)*(5/9);
    let result;

    if (typeof(farh) == "number"){
        result =  Cels.toFixed(4);
    }

    else if(typeof(farh) == "string"){
        let number = parseInt(farh);
        if( number === "number"){
            result = (number - 32)*(5/9);
        } 
    }

    else if (typeof(farh) == Array.isArray){
        result = `[${farh}] is not a valid number but a/an Array`;
    }

    else if (typeof(farh) == Object){
        result = `${farh} is not a valid number but a/an ${(typeof(farh))}`;
    }

    else{
        result = `${farh} is not a valid number but a/an ${typeof(farh)}`;
    }
    

return result;
}

console.log(convertFarhToCelsius({1: 'one', 2: 'two', 3: 'three'}));
