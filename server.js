const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException',err=>{
  console.log('Unhandle the exception')
  console.log(err.name, err.message)
  process.exit(1)
})



dotenv.config({ path: './config.env' });

const app = require('./app');

const DB  = process.env.DATABASE.replace(
  '<PASSWORD>',
   process.env.DATABASE_PASSWORD
   );
   
mongoose
.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  userFindModify:false
})
.then(()=>{
  console.log('DB connections succsessful')

})

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection',err =>{
  console.log(err.name,err.message);
  console.log('Unhandle the rejection shuting down ')
  server.close(()=>{
    process.exit(1)
  })
}); 