const express = require("express");
const graphqlHTTP = require('express-graphql');
const mongoose = require("mongoose");
const cors = require("cors");
const schema =  require("./schema/schema");

const app = express();
app.use(cors())

mongoose.connect("mongodb://mahen:12345a@ds161022.mlab.com:61022/graphql_test",
{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once("open",()=>{
  console.log("mongodb is connected");
})

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql:true
    }),
  );


app.listen(4000,()=>{
    console.log("my first qraphql application")
})