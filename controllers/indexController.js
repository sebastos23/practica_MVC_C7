let db = require('../data/dataBase')

module.exports = {
    index:(req, res) => {
        res.render('index', {
            title:"Concesionarias DH",
            sucursales: db
        });
    }
}