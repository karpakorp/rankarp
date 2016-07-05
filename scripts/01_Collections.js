//Scritps in mongo shell session
db.loadServerScripts();

//Drop collections, if exists
if(db.counters.exists()) db.counters.drop();
if(db.companies.exists()) db.companies.drop();

//Auxiliars Collection
db.createCollection("counters");

//Companies: Collection
db.createCollection("companies");



//Auxiliar Counter
db.counters.insert({_id: "id_company", seq: 0});

//Companies: Data
try {
  db.companies.insertMany([
    {_id: getNextSequence("id_company"), name: "Sony Corporation", dt_foundation: new Date("1946-05-07"), country: "Japan", city: "Tokyo", dt_creation: new Date(), dt_change: null, status: true},
    {_id: getNextSequence("id_company"), name: "Microsoft Studios", dt_foundation: new Date("2002-01-01"), country: "United States", city: "Tokyo", dt_creation: new Date(), dt_change: null, status: true},
    {_id: getNextSequence("id_company"), name: "Nintendo", dt_foundation: new Date("1889-09-23"), country: "Japan", city: "Kyoto Prefecture", dt_creation: new Date(), dt_change: null, status: true},
    {_id: getNextSequence("id_company"), name: "Sega", dt_foundation: new Date("1960-06-03"), country: "United States", city: "Honolulu", dt_creation: new Date(), dt_change: null, status: false}
  ]);
}
catch(e){
  print(e);
}
db.companies.find().sort({"id_company": 1}).pretty();



