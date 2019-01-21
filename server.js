const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('./config/db')

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', function() {
    console.log('DB chal gya')
  });

app.listen(process.env.PORT || 5000,()=>{
    console.log('Server Chal Gya...!')
})

app.use(express.json());

app.use(cors())
app.use('/',require('./routes/index'))
