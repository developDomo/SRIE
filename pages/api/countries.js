export default (req, res) => {
  res.status(200).json([
    {
      countryId: "bh",
      title: "Belice",
      img:
        "/img/home/bandera-belice.png"
    },
    {
      countryId: "cr",
      title: "Costa Rica",
      img:
        "/img/home/bandera-costa_rica.png"
    },
    {
      countryId: "es",
      title: "El Salvador",
      img:
        "/img/home/bandera-el_salvador.png"
    },
    {
      countryId: "gt",
      title: "Guatemala",
      img:
        "/img/home/bandera-guatemala.png"
    },
    {
      countryId: "ho",
      title: "Honduras",
      img:
        "/img/home/bandera-honduras.png"
    },
    {
      countryId: "nu",
      title: "Nicaragua",
      img:
        "/img/home/bandera-nicaragua.png"
    },
    {
      countryId: "pm",
      title: "Panamá",
      img:
        "/img/home/bandera-panama.png"
    },
    {
      countryId: "dr",
      title: "Rep. Dominicana",
      img:
        "/img/home/bandera-rep_dominicana.png"
    },
  ]);
};
