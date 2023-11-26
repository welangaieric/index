const db = require('../db')


module.exports.getAllEmployees = async()=>{
        const [records] =  await db.query("select * from employees")
        return records
    }


module.exports.getAllEmployeesById = async(id)=>{
    const [record] =  await db.query("select * from employees where id = ?",[id])
    return record
}
module.exports.getAllEmployeesByPhone = async(phone)=>{
    const [record] =  await db.query("select * from employees where phone = ?",[phone])
    return record
}


module.exports.deleteEmployee = async(id)=>{
    const [record] =  await db.query("delete from employees where id= ?",[id])
    return record.affectedRows
}

module.exports.updateEmployee = async([email,phone,employeeType,salary,userType,id])=>{
    var sql =  ("UPDATE employees set email=?,phone=?,employeeType=?,salary=?,userType=? where id = ?")
    const [record] =  await db.query(sql,[email,phone,employeeType,salary,userType,id])
    // console.log( record.affectedRows)
    return record.affectedRows

}

module.exports.addEmployee = async(values)=>{
    var sql = "INSERT INTO employees (id,firstname,lastname,email,phone,employeeType,salary,employeeRole,userType,password) VALUES (?)";
    const [record] =  await db.query(sql,[values])
    return record.affectedRows
}