import theme from "../../styles/theme";
import Link from "next/link";

const CountryItem = props => (
  <div className="country-item">
    <Link href="/country/[id]" as={`country/${props.country.id}`}>
      <a title={props.country.title}>
        <img src={props.country.img} />
        <style jsx>{`
          img {
            height: 75px;
            width: 125px;
            padding: 10px;
          }
        `}</style>
      </a>
    </Link>
  </div>
);

export default CountryItem;
