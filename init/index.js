const mongoose = require('mongoose')
const initData = require('./data.js')
const Listing = require('../models/listing.js')

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main()
    .then(() => {
        console.log("Connected to DB")
    })
    .catch(() => {
        console.log(err)
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}
 
const initDB = async() => {
    await Listing.deleteMany({}); 

    initData.data = initData.data.map((obj) => ({...obj, owner : "6815c067c0f89f4eb2eaf38e"}))

    await Listing.insertMany(initData.data); 

    console.log("Data was Initialised")
}

initDB(); 
