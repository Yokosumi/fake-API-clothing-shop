import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/welcome">Welcome</NavLink>
                </li>
                <li>
                    <NavLink to="/clothes">Clothes</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>
            </ul>
        </>
    )
}
