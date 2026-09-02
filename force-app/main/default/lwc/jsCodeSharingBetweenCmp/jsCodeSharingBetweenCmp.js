
//Plain js function-> no LWC 
const getSum = function(firstVal,secondVal){
    try{
        return firstVal + secondVal;
    }catch(error){
        return undefined;
    }
}


export{
        getSum
    };