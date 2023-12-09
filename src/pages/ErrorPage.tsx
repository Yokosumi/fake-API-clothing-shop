import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <>
            <p>
                <span className="font-bold text-red-500">Error 404:</span> Page
                not found -{' '}
                <NavLink to={'/welcome'}>
                    <span className=" underline">go back to home page</span>
                </NavLink>
            </p>
        </>
    )
}
