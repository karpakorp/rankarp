
db.system.js.remove({_id:"getNextSequence"});

//getNextSequence
db.system.js.save({_id:"getNextSequence", value: 
    function getNextSequence(name){
    var ret = db.counters.findAndModify(
    {
      query: { _id: name },
      update: { $inc: { seq: 1 } },
      new: true
    });

    return ret.seq;
  }
});