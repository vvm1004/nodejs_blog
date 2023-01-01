const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            //Nếu ko lỗi thì vào then
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            //Nếu lỗi thì vào catch
            .catch(next);

        // res.render('home');
    }

    //[GET] / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
