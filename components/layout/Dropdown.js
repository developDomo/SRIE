import Link from 'next/link';

export default class extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        { items.map((item) => (
          <Link href={item.href}>
            <a className="dropdown-item" href="#0">{item.label}</a>
          </Link>
        )) }
      </div>
    );
  }
}
