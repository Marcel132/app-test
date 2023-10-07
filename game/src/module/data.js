// // Components with forms (login and signup) are in main.jsx - 'src/components/game/main.jsx'
// const mongoose = require('mongoose')
// const config = require('./config')

// // Connect to MongoDB 

// mongoose
//   .connect(config.mongoURL, {useNewUrlParser: true, useUnifieldTopology: true})
//   .then(() => {
//     console.log('Connected to MongoDB')
//   })
//   .catch((error) => {
//     console.log(error, "Error connecting to MongoDB")
//   });

// // Shema 

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;