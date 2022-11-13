function parseCount(value){
    let parsedValue = Number.parseInt(value);
    if (isNaN(parsedValue) == true){
      throw new Error("Невалидное значение");
    }
    else{
    return parsedValue;
    }
  }
  
function validateCount(value){
  try{
    return parseCount(value)
  }
  catch(error){
    return error;
  }
}