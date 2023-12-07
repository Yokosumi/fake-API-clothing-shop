import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <>
            <ul className="flex justify-center  leading-6  gap-6 p-5 mb-4 bg-indigo-300 text-2xl font-serif">
                <li>
                    <NavLink className={'active-page'} to="/welcome">
                        Welcome
                    </NavLink>
                </li>
                <li>
                    <NavLink className={'active-page'} to="/clothing">
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink className={'active-page'} to="/cart">
                        Cart
                    </NavLink>
                </li>
            </ul>
        </>
    )
}
