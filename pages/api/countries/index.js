import nextConnect from "next-connect";
import CountryService from "../../../services/Country.service";

const handler = nextConnect();

handler.get(async (req, res) => {
  const countries = await CountryService.findAll();
  res.status(200).json(countries);
});

export default (req, res) => handler.apply(req, res);
