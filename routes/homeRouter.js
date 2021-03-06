var express = require('express')
var router = express.Router()
var homeController = require('../controllers/homeController')


router.route('/')
.get(homeController.intro)

router.route('/contents')
.get(homeController.contents)

router.route('/keyboard')
.get(homeController.keyboard)

router.route('/1')
.get(homeController.chaptOne)

router.route('/2')
.get(homeController.chaptTwo)

router.route('/3')
.get(homeController.chaptThree)

router.route('/4')
.get(homeController.chaptFour)

router.route('/5')
.get(homeController.chaptFive)

router.route('/6')
.get(homeController.chaptSix)

router.route('/7')
.get(homeController.chaptSeven)

router.route('/8')
.get(homeController.chaptEight)

router.route('/9')
.get(homeController.chaptNine)

router.route('/10')
.get(homeController.chaptTen)

module.exports = router
