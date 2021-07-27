let db = require('../data/dataBase')
module.exports = {
    index: (req, res) => {
        res.render('sucursales', {
            title: "Nuestras Sucursales",
            sucursales: db
        })
    },
    sucursal : (req, res) => {
        let paramsSucursal = req.params.sucursal.trim();
        let sucursal = db.find(element => element.sucursal.toLowerCase() === paramsSucursal.toLowerCase())
        if (sucursal !== undefined){
            res.render('sucursal', {
                title: paramsSucursal,
                sucursal: sucursal
            })
        }else{
            res.send('No tenemos esa sucursal')
        }
        
    }
}