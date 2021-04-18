const mongoose = require('mongoose')
export default {
  async startAsync  () {
    const mongodbUrl = 'mongodb://127.0.0.1:27017/sublime-games'
  
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
