const employee = {
    name: "erik",
    streetAddress: "303 denver",
}

function updateEmployeeWithKeyAndValue( employee, key, value ) {
const updateEmployeeWithKeyAndValue = {...employee };
updateEmployeeWithKeyAndValue[key]= "11 Broadway"
return updateEmployeeWithKeyAndValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const destructivelyUpdateEmployeeWithKeyAndValue = employee;
     destructivelyUpdateEmployeeWithKeyAndValue[key] = '12 Broadway' 
        return destructivelyUpdateEmployeeWithKeyAndValue;
}
  

function deleteFromEmployeeByKey(employee, key) {
   const deleteFromEmployeeByKey = {...employee};
  delete deleteFromEmployeeByKey[key]
  return deleteFromEmployeeByKey;
} 

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const destructivelyDeleteFromEmployeeByKey = employee;
    delete destructivelyDeleteFromEmployeeByKey[key]
    return destructivelyDeleteFromEmployeeByKey;
}