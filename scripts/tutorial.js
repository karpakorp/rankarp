//Create Collection
//db.createCollection('usuario')

//Drop Collection
//db.usuario.drop();

//Insert
db.usuario.insert({'nome': 'André Galioni', 'usuario': 'galioni', 'idade': 29, 'dt_criacao': new Date(), 'dt_alteracao': null});
db.usuario.insert({'nome': 'Thiago Macahyba', 'usuario': 'macahyba', 'idade': 30, 'dt_criacao': new Date(), 'dt_alteracao': null});
db.usuario.insert({'nome': 'Daniel Nero', 'usuario': 'nero', 'idade': 23, 'dt_criacao': new Date(), 'dt_alteracao': null});

//Select
db.usuario.find().pretty();
db.usuario.find({'usuario': 'galioni'}).pretty();
db.usuario.find().pretty().sort({"idade": 1}); //Order by asc
db.usuario.find().pretty().sort({"idade": -1}); //Order by desc
db.usuario.find({'idade': {$lt:29}}).pretty(); //Less Than
db.usuario.find({'idade': {$lte:29}}).pretty(); //Less Than Equals
db.usuario.find({'idade': {$gt:29}}).pretty(); //Greater Than
db.usuario.find({'idade': {$gte:29}}).pretty(); //Greater Than Equals


//Update
db.usuario.update({'usuario': 'galioni'}, {$set:{'dt_alteracao': new Date()}});
db.usuario.update({'usuario': 'macahyba'}, {$set:{'dt_alteracao': new Date()}});
db.usuario.update({'usuario': 'nero'}, {$set:{'dt_alteracao': new Date()}});

//Delete One
db.usuario.deleteOne({'usuario': 'nero'});

//Remove
db.usuario.remove('');









