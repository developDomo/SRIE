import Link from 'next/link';
import { withTranslation } from '../../i18n';

const NavSecondaryCountry = ({ t, country, selected }) => (
  <div>
    <Link href="/[id]" as={`/${country.short_name}`} key={country.short_name}>
      <a
        title={t(`countries.${country.code}`)}
        id={`link_${country.code}`}
        className={`country-link ${country.code} ${country.code === selected ? 'active' : ''}`}
      >
        <span className="country-link">{country.title}</span>
      </a>
    </Link>
    <style jsx>
      {`

        a.country-link {
            font-size: 0;
            width: 45px;
            display: block;
            height: 45px;
            background-size: 100%;
            margin: 0 5px;
            border-radius: 50%;
            border: 2px solid white;
            transition: 0.2s;
        }
        a.country-link:hover {
            transform: scale(1.1);
        }

        a.country-link.${country.code} {
            background-image: url(/img/home/${country.code}-flag-bw.png);
        }

        a.country-link.${country.code}:hover, a.country-link.${country.code}.active {
            background-image: url(/img/home/${country.code}-flag.png);
        }

            `}

    </style>
  </div>
);

export default withTranslation('countries')(NavSecondaryCountry);
