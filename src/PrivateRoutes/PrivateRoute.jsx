import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <span className=" loading loading-bars loading-lg"></span>
    }


    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;