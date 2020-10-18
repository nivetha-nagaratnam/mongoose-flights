const Flight = require('../models/flight');

function index(req, res) {
  Flight.find({}, function(err, flights) {
  res.render('flights/index', {flights})
  });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
  //if you want to do somehting after the save u need to pass a 
  //a callback function but here we are redirect so we need to
  //have a callback
  // if not you can do movie.save() it will save but not send resp
  // remove empty properties
  
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  const flight = new Flight(req.body);
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect('/flights');
  });
}
 



module.exports = {
    index,
    new: newFlight,
    create
  };

