import Link from "next/link";

export default class Dropdown extends React.Component {
    render() {
    const { items } = this.props
    return <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        { items.map(item=>(
            <Link href={item.href}>
                <a className="dropdown-item">{item.label}</a>
            </Link>
        )) }
    </div>
    }
}



