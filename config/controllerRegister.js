var path = require('path'),
    fs = require('fs'),
    express = require('express');


module.exports = {

    register: function registerController(controllerPath, registerRouter) {
        // MVC Controllers
        var controllerList = [];
        fs.readdirSync(path.join(__dirname, controllerPath)).forEach(function (file) {
            if (file.substr(-3) === ".js") {
                var basePath = path.basename(file, ".js");
                var Controller = require(`./${controllerPath}/${file}`);
                var router = express.Router();
                registerRouter.use(`/${basePath}`, router);
                controllerList[basePath] = new Controller(router);
            }
        });
    }
}