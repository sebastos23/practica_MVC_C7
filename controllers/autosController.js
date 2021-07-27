let db = require('../data/dataBase')

module.exports = {
    index:(req, res) => {
        let autos = []
        db.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
                autos.push(auto);
            })
        });
        res.render('autos', {
            title: "Nuestros Autos",
            autos: autos,
        })
    },
    marca:(req, res) => {
        let marcaParams = req.params.marca.trim();
        let filtradosPorMarca = [];
        db.forEach(sucursal =>{
            sucursal.autos.forEach(auto => {
                if(auto.marca.toLowerCase() === marcaParams.toLowerCase()){
                    filtradosPorMarca.push(auto)
                }
            })
            
        })
        res.render('auto', {
            title: marcaParams.toUpperCase(),
            marca: filtradosPorMarca,
        })
    },
    dato: (req, res) => {
        let marcaParams = req.params.marca.trim();
        let datoParams = req.params.dato.trim();
        let filtradosPorMarca = [];

        db.forEach(sucursal =>{
            sucursal.autos.forEach(auto => {
                if(auto.marca.toLowerCase() === marcaParams.toLowerCase()){
                    filtradosPorMarca.push(auto)
                }
            })
        })
        let filtradosPorDato = filtradosPorMarca.filter(auto => {
            return auto.anio == datoParams || auto.color.toLowerCase() === datoParams.toLowerCase()
        })

        if(filtradosPorDato.length > 0){
            res.render('dato', {
                title: 'Autos segun tu busqueda',
                autos: filtradosPorDato,

            })
        }else {
            res.send("No hay datos que coincidan con tu busqueda")
        }

    }

}