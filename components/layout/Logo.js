import Link from "next/link";
export default class Logo extends React.Component {
    
    render() {
    const {path} = this.props
    return (        
        <div>
            <h1>
                <Link href='/'>
                    <a>
                        {path == "/" 
                            ? <img src="/img/home/SRIE-header-white.svg" alt="Plataforma SRIE"/>
                            : <img src="/img/home/SRIE-header-color.svg" alt="Plataforma SRIE"/>
                        }
                    </a>
                </Link>
            </h1>
            <style jsx>{`
            `}</style>
        </div>
    )}

}
