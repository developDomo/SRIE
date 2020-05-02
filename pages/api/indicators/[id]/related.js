import nextConnect from "next-connect";
import IndicatorService from "../../../../services/Indicator.service";

const handler = nextConnect();

handler.get(async (req, res) => {
  let relatedIndicators = await IndicatorService.findRelated(req.query.id);
  res.status(200).json(relatedIndicators);
});

export default (req, res) => handler.apply(req, res);
