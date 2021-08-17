const router = require('express').Router();
const Nice = require('../models/NiceModel');

let nices = []
router.get('/', (req, res, next) => {
    Nice.find()
    .then(nices => {
        res.status(200).send(nices);
    })
    .catch(error => next(error))
})
router.delete('/:niceId', function (req, res, next) {
    const niceId = req.params.niceId
    
    Nice.findOneAndDelete({
        _id: niceId
    }).then(pnices => {
        res.status(200).send('user well deleted !')
    })
    .catch(error => next(error))

  
})

router.post('/add', async (req, res)=>{
  
    const nice = new Nice({
        Orange: req.body.Orange,
        Banane: req.body.Banane,
        Pomme: req.body.Pomme,
        Fraise: req.body.Fraise,
        Cerise: req.body.Cerise

    });
    try{
        const savedNice= await nice.save(); 
        res.send(savedNice);

    }
    catch(err)
    {
        res.status(400).send(err);

    }

    
})
router.put('/:niceId', function (req, res, next) {
    const niceId = req.params.niceId
    
    Nice.findOneAndUpdate({
        _id: niceId
    }, {
    
        Orange: req.body.Orange,
        Banane: req.body.Banane,
        Pomme: req.body.Pomme,
        Fraise: req.body.Fraise,
        Cerise: req.body.Cerise
	
	
    })
    .then(nices => res.status(200).send(nices))
    .catch(error => next(error))
    
   
})
module.exports= router;