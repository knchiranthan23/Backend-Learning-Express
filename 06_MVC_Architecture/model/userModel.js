exports.insertUsers = async (db,username,usermail)=>{
    const collection = db.collection("users")
    await collection.insertOne({
        username,
        usermail
    })
}
exports.usersFetch = async(db)=>{
  const collection = db.collection("users")
  return await collection.find().toArray() 
};