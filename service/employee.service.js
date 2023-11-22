const db = require('../db')


module.exports.getAllEmployees = async()=>{
        const [records] =  await db.query("select * from employees")
        return records
    }


module.exports.getAllEmployeesById = async(id)=>{
    const [record] =  await db.query("select * from employees where id= ?",[id])
    return record
}

module.exports.deleteEmployee = async(id)=>{
    const [record] =  await db.query("delete from employees where id= ?",[id])
    return record.affectedRows
}

module.exports.updateEmployee = async([firstname,lastname,email,phone,employeeType,salary,employeeRole,id])=>{
    var sql =  ("UPDATE employees set firstname=?,lastname=?,email=?,phone=?,employeeType=?,salary=?,employeeRole=? where id = ?")
    const [record] =  await db.query(sql,[firstname,lastname,email,phone,employeeType,salary,empdate,employeeRole,id])
    return record.affectedRows
}

module.exports.addEmployee = async(values)=>{
    var sql = "INSERT INTO employees (firstname,lastname,email,phone,employeeType,salary,employeeRole) VALUES (?)";
    const [record] =  await db.query(sql,[values])
    return record.affectedRows
}