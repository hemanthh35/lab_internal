const homelist = (req, res) => {
 res.render('index', { title: 'Hemanth Webiste' });
};
const locationInfo = (req, res) => {
 res.render('index', { title:"Roll Number:23EG107E37" });
};
const addReview = (req, res) => {
 res.render('index', { title: 'Add review' });
};
module.exports = {
 homelist,
 locationInfo,
 addReview
};