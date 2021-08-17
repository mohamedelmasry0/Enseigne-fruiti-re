const router = require("express").Router();
const Magasins = require("../models/MagasinsModel");

let magasinss = [];
router.get("/", (req, res, next) => {
  Magasins.find()
    .then((magasinss) => {
      res.status(200).send(magasinss);
    })
    .catch((error) => next(error));
});
router.delete("/:magasinsId", function (req, res, next) {
  const magasinsId = req.params.magasinsId;

  Magasins.findOneAndDelete({
    _id: magasinsId,
  })
    .then((magasinss) => {
      res.status(200).send("user well deleted !");
    })
    .catch((error) => next(error));
});

router.post("/add", async (req, res) => {
  const magasins = new Magasins({
    Magasin: req.body.Magasin,
    Orange: req.body.Orange,
    Banane: req.body.Banane,
    Pomme: req.body.Pomme,
    Fraise: req.body.Fraise,
    Cerise: req.body.Cerise,
  });
  try {
    const savedMagasins = await magasins.save();
    res.send(savedMagasins);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/:magasinsId", function (req, res, next) {
  const magasinsId = req.params.magasinsId;

  Magasins.findOneAndUpdate(
    {
      _id: magasinsId,
    },
    {
      Magasin: req.body.Magasin,
      Orange: req.body.Orange,
      Banane: req.body.Banane,
      Pomme: req.body.Pomme,
      Fraise: req.body.Fraise,
      Cerise: req.body.Cerise,
    }
  )
    .then((magasinss) => res.status(200).send(magasinss))
    .catch((error) => next(error));
});
module.exports = router;
