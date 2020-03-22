import nextConnect from "next-connect";
import CountryService from "../../../services/Country.service";

const handler = nextConnect();

handler.get(async (req, res) => {
  CountryService.getByCode(req.query.code).then(results => {
    res.status(200).json(results);
  });
});

export default (req, res) => handler.apply(req, res);
