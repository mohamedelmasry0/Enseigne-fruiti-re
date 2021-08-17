const router = require("express").Router();
const Dijon = require("../models/DijonModel");

let dijons = [];
router.get("/", (req, res, next) => {
  Dijon.find()
    .then((dijons) => {
      res.status(200).send(dijons);
    })
    .catch((error) => next(error));
});
router.delete("/:dijonId", function (req, res, next) {
  const dijonId = req.params.dijonId;

  Dijon.findOneAndDelete({
    _id: dijonId,
  })
    .then((dijons) => {
      res.status(200).send("user well deleted !");
    })
    .catch((error) => next(error));
});

router.post("/add", async (req, res) => {
  const dijon = new Dijon({
    Orange: req.body.Orange,
    Banane: req.body.Banane,
    Pomme: req.body.Pomme,
    Fraise: req.body.Fraise,
    Cerise: req.body.Cerise,
  });
  try {
    const savedDijon = await dijon.save();
    res.send(savedDijon);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/:dijonId", function (req, res, next) {
  const dijonId = req.params.dijonId;

  Dijon.findOneAndUpdate(
    {
      _id: parisId,
    },
    {
      Orange: req.body.Orange,
      Banane: req.body.Banane,
      Pomme: req.body.Pomme,
      Fraise: req.body.Fraise,
      Cerise: req.body.Cerise,
    }
  )
    .then((dijons) => res.status(200).send(dijons))
    .catch((error) => next(error));
});
module.exports = router;
