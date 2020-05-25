import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

const Country = ({ country }) => (
  <div>
    <p>
      Country content for
      {country.name}
      .
    </p>
    <Link href="#0">
      <a href="#0">Back to home</a>
    </Link>
  </div>
);

Country.getInitialProps = async ({ query }) => {
  const res = await fetch(`${process.env.API_URL}/api/countries/${query.id}`);
  const country = await res.json();

  return {
    country,
  };
};

export default Country;
