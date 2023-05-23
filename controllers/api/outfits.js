const Outfit = require('../../models/Outfit');

module.exports = {
  index,
  show,
  update,
  remove,
  create
};

async function index(req, res) {
  try{
    const outfits = await Outfit.find({}).exec();
    res.status(200).json(outfits);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const outfit = await Outfit.findById(req.params.id);
    res.status(200).json(outfit);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

async function update(req, res) {
  try {
    const outfit = await Outfit.findByIdAndUpdate(req.body);
    console.log(outfit)
    } catch (err) {
    res.status(400).send(err)
    }
}


async function remove(req, res) {
  try {
    const outfit = await Outfit.findByIdAndDelete(req.body);
    console.log(outfit)
    res.redirect('/wardrobe')
  } catch (err) {
    res.status(400).send(err)
    }
}


// Create
async function create(req, res) {
  try {
      const newOutfit = await Outfit.create(req.body);
      console.log(newOutfit)
      res.status(200).send(newOutfit)
  } catch (err) {
      res.status(400).send(err)
  }
}