const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })
    app.use('/', siteRouter);
}

module.exports = route;
