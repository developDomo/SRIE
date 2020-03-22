import fetch from "isomorphic-unfetch";
import InfoSlider from "../components/homepage/InfoSlider";
import CountrySelector from "../components/homepage/CountrySelector";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Home = props => (
  <div className="home">
    <InfoSlider />
    <CountrySelector countries={props.countries} />
  </div>
);

Home.getInitialProps = async function() {
  const res = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await res.json();

  return {
    countries: countries
  };
};

export default Home;
