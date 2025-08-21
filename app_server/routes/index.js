const express = require('express');
const router = express.Router();
const ctrlLocation =
require('../controllers/location');
const ctrlOthers = require('../controllers/others');
router.get('/', ctrlLocation.homelist);
router.get('/location', ctrlLocation.locationInfo);
router.get('/location/review/new', ctrlLocation.addReview);
router.get('/about', ctrlOthers.about);
module.exports = router;