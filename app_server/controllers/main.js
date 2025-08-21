const index = (req, res) => {
  res.render('index', { title: 'Home' });
};

const about = (req, res) => {
  res.send('About page');
};

const get = (req, res) => {
  res.send('GET /get route works!');
};


const locations = (req, res) => {
  res.send('Locations page'); 
}
const others = (req, res) => {
  res.send('Others page');  
}

module.exports = {
  index,
  about,
  get,
  locations,
  others
};