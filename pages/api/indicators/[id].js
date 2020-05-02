import nextConnect from "next-connect";
import IndicatorService from "../../../services/Indicator.service";

const handler = nextConnect();

handler.get(async (req, res) => {
  let indicator = await IndicatorService.findById(
    req.query.id,
    req.query.country
  );

  if (indicator) {
    res.status(200).json(indicator);
  } else {
    res.status(404).json({ error: true, message: "Indicator not found" });
  }
});

export default (req, res) => handler.apply(req, res);
