const Caisse = require('./caisse');

const getAllCaisse = async (req, res) => {
  const listDepenses = await Caisse.find({});
  res.status(200).json({ listDepenses });
};
let date_caisse = new Date();
let datesys = (("0" + date_caisse.getDate()).slice(-2)+"/"+("0" + (date_caisse.getMonth() + 1)).slice(-2)+"/"+date_caisse.getFullYear());
const createCaisse = async (req, res) => {
  const mot=req.body.motif;
  const fact=req.body.facture;
  const rect=req.body.recette;
  const dep=req.body.depence;
  const caisse = await Caisse.create({date : datesys , motif : mot, facture : fact, recette : rect , depence : dep});
  
  res.status(201).json({ caisse });
};


module.exports = {
    getAllCaisse,
    createCaisse
}