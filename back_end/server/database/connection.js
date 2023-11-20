const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL
  // console.log(`Connecting to database with URL: ${databaseUrl}`) 


module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
