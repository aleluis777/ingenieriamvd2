var dbconfig = require('../config/database');
var Database = require('../models/database');

var database = new Database(dbconfig.connection);

var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);


const controller = {};
controller.indexGet = function(req, res){
    console.log('index');
    res.render('pages/index', {
        title: 'Inicio | MVD',
        tipo: 'inicio'});
}

controller.aboutGet = function(req, res){
    console.log('index');
    res.render('pages/about', {
        title: 'Nosotros | MVD',
        tipo: 'nosotros'});
}

controller.blog_detail_leftbarGet = function(req, res){
    console.log('blog-detail-leftbar');
    res.render('pages/blog-detail-leftbar');
}

controller.blog_detail_rightbarGet = function(req, res){
    console.log('blog_detail_rightbar');
    res.render('pages/blog-detail-rightbar');
}

controller.blog_detailGet = function(req, res){
    console.log('blog_detail');
    res.render('pages/blog-detail');
}

controller.blog_with_leftbarGet = function(req, res){
    console.log('blog_with_leftbar');
    res.render('pages/blog-with-leftbar');
}

controller.blog_with_rightbarGet = function(req, res){
    console.log('blog_with_rightbar');
    res.render('pages/blog-with-rightbar');
}

controller.blogGet = function(req, res){
    console.log('blog');
    res.render('pages/blog');
}

controller.contactGet = function(req, res){
    console.log('contact');

    res.render('pages/contact');
}
controller.contactMessage = function(req, res){
    console.log("controlador de envio");
    if(req.body.habilitacionmvd=='true'){
        var query = 'INSERT INTO consultas ( nombre, email, consulta ) values ( ?, ?, ? )'
        var params = [req.body.namemvd, req.body.emailmvd, req.body.messagemvd];

        database.query(query, params)
        .then( results => {
            
            console.log(results);
            console.log( { success: true, "dbResponse": results } );
            res.redirect('/');
        })
        .catch( err => {
            
            console.log(err);
            console.log( { error: err } );
            res.redirect('/');
        })
        
    }
}


controller.portfolio_detailGet = function(req, res){
    console.log('portfolio-detail');
    res.render('pages/portfolio-detail');
}

controller.galeriaGet = function(req, res){
    console.log('galeria');
    res.render('pages/galeria');
}

controller.galeria1Get = function(req, res){
    console.log('galeria1');
    res.render('pages/galeria1');
}

controller.galeria2Get = function(req, res){
    console.log('galeria2');
    res.render('pages/galeria2');
}

controller.galeria3Get = function(req, res){
    console.log('galeria3');
    res.render('pages/galeria3');
}

controller.galeria4Get = function(req, res){
    console.log('galeria4');
    res.render('pages/galeria4');
}

controller.priceGet = function(req, res){
    console.log('price');
    res.render('pages/price');
}

controller.services_detailGet = function(req, res){
    console.log('services-detail');
    res.render('pages/services-detail');
}

controller.aboutGet = function(req, res){
    console.log('about');
    res.render('pages/about');
}

controller.servicesGet = function(req, res){
    console.log('services');
    res.render('pages/services');
}

controller.teamGet = function(req, res){
    console.log('team');
    res.render('pages/team');
}

controller.electricityGet = function(req, res){
    console.log('electricity');
    res.render('pages/solutions-electricity');
}
controller.controlGet = function(req, res){
    console.log('control');
    res.render('pages/solutions-control');
}
controller.telecoGet = function(req, res){
    console.log('telecomunicaciones');
    res.render('pages/solutions-teleco');
}
controller.saneaGet = function(req, res){
    console.log('saneamiento');
    res.render('pages/solutions-sanea');
}
controller.proy03Get = function(req, res){
    console.log('proyecto03');
    res.render('pages/proyecto03');
}
controller.proy04Get = function(req, res){
    console.log('proyecto04');
    res.render('pages/proyecto04');
}
controller.proy08Get = function(req, res){
    console.log('proyecto08');
    res.render('pages/proyecto08');
}

controller.ListaGet = function(req, res){
    console.log('ListaGet');
    
    var query = 'SELECT * FROM consultas';
    connection.query('USE ' + dbconfig.database);
    connection.query(query, (err, cursos) => {
        console.log(cursos);
        if (err) {
            res.json(err);
        }
        res.render('pages/lista', {
        cursos: cursos,
        title: 'Usuarios de Plataforma'
        });
    });
}



    




module.exports = controller;