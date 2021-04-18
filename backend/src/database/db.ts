const mongoose = require('mongoose')
export default {
  async startAsync  () {
    const mongodbUrl = process.env.URL_MONGODB_CLOUD
  
    await mongoose.connect(mongodbUrl, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  
    mongoose.set('useFindAndModify', false)
  },
  
  async stopAsync () {
    await mongoose.disconnect()
  }
}
