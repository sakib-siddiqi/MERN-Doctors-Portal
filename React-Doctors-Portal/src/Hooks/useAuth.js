import { useContext } from "react";
import { AuthProvicder } from "../Context/AuthContext";

const useAuth = () => {
    return useContext(AuthProvicder);
}
export default useAuth;