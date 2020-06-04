const FilterResult = ({ pec, level, topic }) => (
  <>
    <div className="col-lg-12 mb-1">Resultados de la búsqueda por:</div>
    <div className="col-lg-12 mb-3">
      Meta Pec:
      {' '}
      <strong>{pec}</strong>
      {' '}
      / Tema:
      <strong>
        {' '}
        {level}
      </strong>
      {' '}
      / Nivel:
      <strong>
        {' '}
        {topic}
      </strong>
    </div>
  </>
);

FilterResult.propTypes = {};

export default FilterResult;
