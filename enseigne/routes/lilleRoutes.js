const router = require("express").Router();
const Lille = require("../models/LilleModel");

let lilles = [];
router.get("/", (req, res, next) => {
  Lille.find()
    .then((lilles) => {
      res.status(200).send(lilles);
    })
    .catch((error) => next(error));
});
router.delete("/:lilleId", function (req, res, next) {
  const lilleId = req.params.lilleId;

  Lille.findOneAndDelete({
    _id: lilleId,
  })
    .then((lilles) => {
      res.status(200).send("user well deleted !");
    })
    .catch((error) => next(error));
});

router.post("/add", async (req, res) => {
  const lille = new Lille({
    Orange: req.body.Orange,
    Banane: req.body.Banane,
    Pomme: req.body.Pomme,
    Fraise: req.body.Fraise,
    Cerise: req.body.Cerise,
  });
  try {
    const savedLille = await lille.save();
    res.send(savedLille);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/:lilleId", function (req, res, next) {
  const lilleId = req.params.lilleId;

  Lille.findOneAndUpdate(
    {
      _id: lilleId,
    },
    {
      Orange: req.body.Orange,
      Banane: req.body.Banane,
      Pomme: req.body.Pomme,
      Fraise: req.body.Fraise,
      Cerise: req.body.Cerise,
    }
  )
    .then((lilles) => res.status(200).send(lilles))
    .catch((error) => next(error));
});
module.exports = router;
