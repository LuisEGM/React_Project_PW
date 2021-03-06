import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => { 
                // eslint-disable-next-line no-unused-expressions
                return isAuthenticated ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location}
                        }}
                    />
                )
            }}
        />
    )
}

export default PrivateRoute
