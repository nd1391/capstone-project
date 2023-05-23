const express = require("express");
const router = express.Router();
const outfitCtrl = require("../../controllers/api/outfits")


router.post('/', outfitCtrl.create)

router.get('/', outfitCtrl.index)

router.put('/:id', outfitCtrl.update)

router.delete('/:id', outfitCtrl.remove)

module.exports = router;