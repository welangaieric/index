const db = require('../db')


module.exports.getAllclients = async()=>{
        const [records] =  await db.query("select * from ppp_clients")
        return records
    }


module.exports.getClientById = async(username)=>{
    const [record] =  await db.query("select * from ppp_clients where username= ?",[username])
    return record
}

module.exports.deleteClient = async(id)=>{
    const [record] =  await db.query("delete from ppp_clients where id= ?",[id])
    return record.affectedRows
}

module.exports.updateClient = async([username,client,phone,location,coordinates,profile,billable,account,wallet,is_router_ours,is_receiver_ours,created,updated,admin_id,id])=>{
    var sql =  ("UPDATE ppp_clients set username=?,client=?,phone=?,location=?,coordinates=?,profile=?,billable=?,account=?,wallet=?,is_router_ours=?,is_receiver_ours=?,created=?,updated=?,admin_id=? where id = ?")
    const [record] =  await db.query(sql,[username,client,phone,location,coordinates,profile,billable,account,wallet,is_router_ours,is_receiver_ours,created,updated,admin_id,id])
    return record.affectedRows
}

module.exports.addClient = async(values)=>{
    var sql = "INSERT INTO ppp_clients (username,client,phone,location,coordinates,profile,billable,account,wallet,is_router_ours,is_receiver_ours,created,updated,admin_id) VALUES (?)";
    const [record] =  await db.query(sql,[values])
    return record.affectedRows
}
