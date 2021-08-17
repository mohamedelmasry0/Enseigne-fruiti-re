const router = require("express").Router();
const Marseille = require("../models/MarseilleModel");

let marseilles = [];
router.get("/", (req, res, next) => {
  Marseille.find()
    .then((dijons) => {
      res.status(200).send(dijons);
    })
    .catch((error) => next(error));
});
router.delete("/:marseilleId", function (req, res, next) {
  const marseilleId = req.params.marseilleId;

  Marseille.findOneAndDelete({
    _id: marseilleId,
  })
    .then((marseilles) => {
      res.status(200).send("user well deleted !");
    })
    .catch((error) => next(error));
});

router.post("/add", async (req, res) => {
  const marseille = new Marseille({
    Orange: req.body.Orange,
    Banane: req.body.Banane,
    Pomme: req.body.Pomme,
    Fraise: req.body.Fraise,
    Cerise: req.body.Cerise,
  });
  try {
    const savedMarseille = await marseille.save();
    res.send(savedMarseille);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/:marseilleId", function (req, res, next) {
  const marseilleId = req.params.marseilleId;

  Marseille.findOneAndUpdate(
    {
      _id: marseilleId,
    },
    {
      Orange: req.body.Orange,
      Banane: req.body.Banane,
      Pomme: req.body.Pomme,
      Fraise: req.body.Fraise,
      Cerise: req.body.Cerise,
    }
  )
    .then((marseilles) => res.status(200).send(marseilles))
    .catch((error) => next(error));
});
module.exports = router;
