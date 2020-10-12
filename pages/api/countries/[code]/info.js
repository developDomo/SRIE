import nextConnect from 'next-connect';
import IndicatorDataService from '../../../../services/IndicatorData.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  const country = req.query.code.toUpperCase();

  const free_edu_promise = IndicatorDataService.getFreeEducationYearsByCountry(
    country,
  );

  const comp_edu_promise = IndicatorDataService.getCompulsoryEducationYearsByCountry(
    country,
  );

  const literacy_rate_promise = await IndicatorDataService.getLiteracyRateByCountry(
    country,
  );

  const government_expenditure_promise = await IndicatorDataService.getGovernmentExpenditureByCountry(
    country,
  );

  const net_enrollment_rate_promise = await IndicatorDataService.getNetEnrollmentRateByCountry(
    country,
  );

  const completion_rate_promise = await IndicatorDataService.getCompletionRateByCountry(
    country,
  );

  const out_of_school_rate_promise = await IndicatorDataService.getOutOfSchoolRateByCountry(
    country,
  );

  const [
    free_edu,
    comp_edu,
    literacy_rate,
    government_expenditure,
    net_enrollment_rate,
    completion_rate,
    out_of_school_rate,
  ] = await Promise.all([
    free_edu_promise,
    comp_edu_promise,
    literacy_rate_promise,
    government_expenditure_promise,
    net_enrollment_rate_promise,
    completion_rate_promise,
    out_of_school_rate_promise,
  ]);

  res.status(200).json({
    free_edu,
    comp_edu,
    literacy_rate,
    government_expenditure,
    net_enrollment_rate,
    completion_rate,
    out_of_school_rate,
  });
});

export default (req, res) => handler.apply(req, res);
