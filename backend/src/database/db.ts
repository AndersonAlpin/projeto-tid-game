const mongoose = require('mongoose')
export default {
  async startAsync  () {
    const mongodbUrl = 'mongodb+srv://tid2:0hS9jLI1dfZoCmQy@tid2.78uyk.mongodb.net/tid2?retryWrites=true&w=majority'
  
    await mongoose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  
    mongoose.set('useFindAndModify', false)
  },
  
  async stopAsync () {
    await mongoose.disconnect()
  }
}
