const db = require('../db')


module.exports.getAlltransactions = async()=>{
        const [records] =  await db.query("SELECT * FROM transactions WHERE date >= CURRENT_DATE - INTERVAL 20 DAY;")
        return records
    }


module.exports.gettransactionById = async(id)=>{
    const [record] =  await db.query("select * from transactions where code= ?",[code])
    return record
}

module.exports.addtransaction = async(values)=>{
    var sql = "INSERT INTO transactions (code,business_no,name,phone,username,profile,amount,type,station,admin_id) VALUES (?)";
    const [record] =  await db.query(sql,[values])
    return record.affectedRows
}
