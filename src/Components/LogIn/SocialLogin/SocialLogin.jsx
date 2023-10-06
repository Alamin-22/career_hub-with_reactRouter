import { useContext } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
const SocialLogin = () => {
    const { GoogleLogin } = useContext(AuthContext)

    const handleSocialLogin = media => {
        media()
            .then(response => {
                console.log(response.user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="divider">continue with</div>
            <div className=" flex justify-evenly mb-5">
                <button onClick={()=>handleSocialLogin(GoogleLogin)} className="btn btn-neutral btn-sm  btn-outline">Google</button>
                <button className="btn btn-neutral btn-sm  btn-outline normal-case">GitHub</button>
                <button className="btn btn-neutral btn-sm  btn-outline normal-case">FaceBook</button>
            </div>
        </div>
    );
};

export default SocialLogin;