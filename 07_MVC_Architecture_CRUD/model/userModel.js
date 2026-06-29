const { ObjectId } = require("mongodb");
exports.userInsert = async(db,username,usermail)=>{
    const collection = db.collection("users_crud");
    await collection.insertOne({
        username,
        usermail
    });
};

exports.userGet = async(db)=>{
    const collection = db.collection("users_crud");
    return await collection.find().toArray();
}

exports.singleUser = async(db,id)=>{
    const collection = db.collection("users_crud");
    return await collection.findOne({
        _id : new ObjectId(id)
    });
};

exports.userSet = async(db,id,username,usermail)=>{
    const collection = db.collection("users_crud");
    await collection.updateOne({
        _id : new ObjectId(id)
    },
    {
        $set : {
            username,
            usermail
        }
    }
  );
};

exports.userRemove = async(db,id)=>{
    const collection = db.collection("users_crud");
    await collection.deleteOne({
        _id: new ObjectId(id)
    });
};