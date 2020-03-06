var express = require('express');
var cors = require('cors');
var graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://teste:maik123@cluster0-jf8xl.mongodb.net/blog?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(response => console.log('Conectado com sucesso!'))
    .catch(error => console.log('Não foi possível conectar: ', error.message));

var resolvers = require("./resolvers");
var schema = require("./schema");

var app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));

app.listen(process.env.PORT || 3000);