const express = require("express");
const router = express.Router();

const Shuttle = require("../../models/Shuttle");
const Trip = require("../../models/Trip");

// methodds to support shuttles
router.get("/test", (req, res) => res.json({ msg: "shuttle works" }));

router.post("/newshuttle", (req, res) => {
  // const { errors, isValid } = validateRegisterInput(req.body);

  // // Check Validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  //User.findOne({ email: req.body.email }).then(user => {
  // if (user) {
  //   errors.email = "Email already exists";
  //   return res.status(400).json(errors);
  // } else {
  //   const avatar = gravatar.url(req.body.email, {
  //     s: "200", // Size
  //     r: "pg", // Rating
  //     d: "mm" // Default
  //   });
  const newShuttle = new Shuttle({
    name: req.body.name,
    model: req.body.model,
    size: req.body.size
  });

  newShuttle
    .save()
    .then(shuttle => res.json(shuttle))
    .catch(err => console.log(err));
});

router.get("/shuttles", (req, res) => {
  Shuttle.find()
    .then(shuttles => res.json(shuttles))
    .catch(err => res.status(404).json({ nousersfound: "No shuttle found" }));
});

// methods to support trips
// no form for create trip yet

router.get("/triptest", (req, res) => res.json({ msg: "trip works" }));

router.post("/newtrip", (req, res) => {
  const newTrip = new Trip({
    shuttlename: req.body.shuttlename,
    driver: req.body.driver,
    guestname: req.body.guestname,
    property: req.body.property,
    roomnum: req.body.roomnum,
    pickuploc: req.body.pickuploc,
    numpassengers: req.body.numpassengers,
    pickuptime: req.body.pickuptime,
    dropoffloc: req.body.dropoffloc,
    booktime: req.body.booktime,
    status: req.body.status
  });

  newTrip
    .save()
    .then(trip => res.json(trip))
    .catch(err => console.log(err));
});

router.get("/trips", (req, res) => {
  Trip.find()
    .then(trips => res.json(trips))
    .catch(err => res.status(404).json({ nousersfound: "No trips found" }));
});

module.exports = router;
