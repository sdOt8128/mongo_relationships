const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MONGO CONNECTION OPEN")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR")
    console.log(err)
})