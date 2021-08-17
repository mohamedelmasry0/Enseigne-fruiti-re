const router = require("express").Router();
const Paris = require("../models/ParisModel");

let pariss = [];
router.get("/", (req, res, next) => {
  Paris.find()
    .then((pariss) => {
      res.status(200).send(pariss);
    })
    .catch((error) => next(error));
});
router.delete("/:parisId", function (req, res, next) {
  const parisId = req.params.parisId;

  Paris.findOneAndDelete({
    _id: parisId,
  })
    .then((pariss) => {
      res.status(200).send("user well deleted !");
    })
    .catch((error) => next(error));
});

router.post("/add", async (req, res) => {
  const paris = new Paris({
    Orange: req.body.Orange,
    Banane: req.body.Banane,
    Pomme: req.body.Pomme,
    Fraise: req.body.Fraise,
    Cerise: req.body.Cerise,
  });
  try {
    const savedParis = await paris.save();
    res.send(savedParis);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/:parisId", function (req, res, next) {
  const parisId = req.params.parisId;

  Paris.findOneAndUpdate(
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
    .then((pariss) => res.status(200).send(pariss))
    .catch((error) => next(error));
});
module.exports = router;
