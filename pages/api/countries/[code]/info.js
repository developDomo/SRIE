import nextConnect from "next-connect";
import IndicatorDataService from "../../../../services/IndicatorData.service";

const handler = nextConnect();

handler.get(async (req, res) => {
  const country = req.query.code.toUpperCase();
  const response = {};

  response.free_edu = await IndicatorDataService.getFreeEducationYearsByCountry(
    country
  );

  response.comp_edu = await IndicatorDataService.getCompulsoryEducationYearsByCountry(
    country
  );

  response.literacy_rate = await IndicatorDataService.getLiteracyRateByCountry(
    country
  );

  response.net_enrollment_rate = await IndicatorDataService.getNetEnrollmentRateByCountry(
    country
  );

  response.completion_rate = await IndicatorDataService.getCompletionRateByCountry(
    country
  );

  response.out_of_school_rate = await IndicatorDataService.getOutOfSchoolRateByCountry(
    country
  );

  res.status(200).json(response);
});

export default (req, res) => handler.apply(req, res);
