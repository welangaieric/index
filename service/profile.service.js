const db = require('../db')


module.exports.getAllprofiles = async()=>{
        const [records] =  await db.query("select * from profiles")
        return records
    }


module.exports.getprofileById = async(id)=>{
    const [record] =  await db.query("select * from profiles where id= ?",[id])
    return record
}

module.exports.deleteprofile = async(id)=>{
    const [record] =  await db.query("delete from profiles where id= ?",[id])
    return record.affectedRows
}   

module.exports.updateprofile = async([name,type,amount,station,devices,admin_id,id])=>{
    var sql =  ("UPDATE profiles set name=?,type=?,amount=?,station=?,devices=? where id = ?")
    const [record] =  await db.query(sql,[name,type,amount,station,devices,admin_id,id])
    return record.affectedRows
}

module.exports.addprofile = async(values)=>{
    var sql = "INSERT INTO profiles (name,type,amount,station,devices,admin_id) VALUES (?)";
    const [record] =  await db.query(sql,[values])
    return record.affectedRows
}
