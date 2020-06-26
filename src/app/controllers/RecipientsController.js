import Recipents from "../models/Recipients";

class RecipientsController {
  async store(req, res) {
    const {
      id,
      name,
      street,
      number,
      complement,
      uf,
      city,
      cep,
    } = await Recipents.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      uf,
      city,
      cep,
    });
  }
}

export default new RecipientsController();
