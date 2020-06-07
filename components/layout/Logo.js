import Link from 'next/link';

export default class Logo extends React.Component {
  render() {
    const { path } = this.props;
    const logoImg = path === '/'
      ? '/img/home/SRIE-header-white.svg'
      : '/img/home/SRIE-header-color.svg';
    return (
      <Link href="/">
        <img src={logoImg} alt="Plataforma SRIE" width="100%" />
      </Link>
    );
  }
}
