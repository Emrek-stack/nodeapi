'use strict';
import axios  from 'axios';

class HomeController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.index.bind(this));
    }

    index(req, res) {
        res.render('web/home/index', {title: 'aa', layout: 'layout.hbs' });
    }

    
}

module.exports = HomeController;