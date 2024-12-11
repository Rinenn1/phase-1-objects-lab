//create an eployee variable with the name and streetAddress elements
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(obj, key){
    const newObject = {...obj};
    delete newObject[key];
    return newObject;
}

deleteFromEmployeeByKey(employee, "name");



function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return  obj;
}

destructivelyDeleteFromEmployeeByKey(employee, "name");