const Ticket = require('../models/ticket');
// add the Movie model
const Flight = require('../models/flight');
	
  
function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err) {
    res.redirect(`/flights/${req.body.flight}`);
  })
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {title: 'Add Tickets', flight});
      })
}

module.exports = {
    new: newTicket,
    create,
  };
      