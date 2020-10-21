const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

function index(req, res) {
  Flight.find({}, function(err, flights) {
  res.render('flights/index', { title: 'All Flights', flights })
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', {title: 'Flight Detail', flight, tickets});
    });
  });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
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
    show,
    new: newFlight,
    create
  };

