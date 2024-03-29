const jsonServer = require('json-server');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({static: __dirname + '/dist'});


app.use(middlewares)
app.use(router);
app.listen(process.env.PORT || 3000, () => {
    console.log('JSON Server is running');
});