export const DisplayTypes = Object.freeze({
  TABLE: Symbol('table'),
  CHART: Symbol('chart'),
});

export const ChartMetrics = Object.freeze({
  LAST_YEAR: Symbol('last year'),
  HISTORICAL: Symbol('historical'),
});

export const ChartTypes = Object.freeze({
  TOTAL: Symbol('total'),
  SEX: Symbol('sex'),
  SOCIOECONOMIC_LEVEL: Symbol('socioeconomic level'),
  GEOZONE: Symbol('geo zone'),
  indexes: Symbol('indexes'),
});

export const IndexeType = Object.freeze({
  GPI: Symbol('GPI'),
  GPIA: Symbol('GPIA'),
  GLPI: Symbol('GLPI'),
  GLPIA: Symbol('GLPIA'),
  SESPI: Symbol('SESPI'),
  SESPIA: Symbol('SESPIA'),
  IPIA: Symbol('IPIA'),
});
