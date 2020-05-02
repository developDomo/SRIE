export default {
  filter: (data, filters) => {
    const keys = Object.keys(filters);

    return data.filter((item) => {
      for (let idx = 0; idx < keys.length; idx++) {
        const filter = keys[idx];
        const dataValue = item[filter];
        const filterValue = filters[filter];

        if (Array.isArray(filterValue) && !filterValue.includes(dataValue)) {
          return false;
        } else if (!Array.isArray(filterValue) && filterValue != dataValue) {
          return false;
        }
      }

      return true;
    });
  },
};
