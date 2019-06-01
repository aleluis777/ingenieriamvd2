var express = require('express');
var router = express.Router();
const rutasController = require('../controllers/rutasController');


//Rutas de alarmas
router.post('/send', rutasController.contactMessage);
router.get('/index', rutasController.indexGet);
router.get('/', rutasController.indexGet);
router.get('/blog-detail-leftbar', rutasController.blog_detail_leftbarGet);
router.get('/blog-detail-rightbar', rutasController.blog_detail_rightbarGet);
router.get('/blog-detail', rutasController.blog_detailGet);
router.get('/blog-with-leftbar', rutasController.blog_with_leftbarGet);
router.get('/blog-with-rightbar', rutasController.blog_with_rightbarGet);
router.get('/blog', rutasController.blogGet);
router.get('/contact', rutasController.contactGet);
router.get('/portfolio-detail', rutasController.portfolio_detailGet);
router.get('/galeria', rutasController.galeriaGet);
router.get('/galeria1', rutasController.galeria1Get);
router.get('/galeria2', rutasController.galeria2Get);
router.get('/galeria3', rutasController.galeria3Get);
router.get('/galeria4', rutasController.galeria4Get);
router.get('/price', rutasController.priceGet);
router.get('/services-detail', rutasController.services_detailGet);
router.get('/about', rutasController.aboutGet);
router.get('/services', rutasController.servicesGet);
router.get('/team', rutasController.teamGet);
router.get('/solutions-electricity', rutasController.electricityGet);
router.get('/solutions-control', rutasController.controlGet);
router.get('/solutions-teleco', rutasController.telecoGet);
router.get('/solutions-sanea', rutasController.saneaGet);
router.get('/proyectocp03', rutasController.proy03Get);
router.get('/proyectocp04', rutasController.proy04Get);
router.get('/proyectocp08', rutasController.proy08Get);
router.get('/listamvd', rutasController.ListaGet);
router.post('/addMessage', rutasController.contactMessage);







module.exports = router;