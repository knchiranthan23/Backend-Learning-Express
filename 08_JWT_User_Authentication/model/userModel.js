exports.insertUser = async (db,username,usermail,password)=>{
   const collection = db.collection("Auth_users");
   await collection.insertOne({
     username,
     usermail,
     password
   });
};

exports.getUser = async (db,usermail)=>{
  const collection = db.collection("Auth_users");
  return await collection.findOne({
    usermail
  })
}