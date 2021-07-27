let db = require('../data/dataBase')

module.exports = {
    index: (req, res) =>{
        let marcas =[];
        db.forEach((sucursal) => {
            sucursal.autos.forEach((auto) => {
                if(!marcas.includes(auto.marca)){
                    marcas.push(auto.marca)
                }
            })
        })
        res.render('Marcas', {
            title: 'Nuestras Marcas',
            marcas: marcas
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
        res.render('marca', {
            marca: filtradosPorMarca,
            title: marcaParams.toUpperCase()
        })
       
    }
    
}