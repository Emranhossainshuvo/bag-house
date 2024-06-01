import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const navigate = useNavigate(); 
    const {googleSignIn} = useAuth(); 

    const axiosPublic = useAxiosPublic(); 

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user)
            const userInfo = {
                email: res?.user?.email, 
                name: res?.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(result => {
                console.log(result.data); 
                // navigate('/'); 
                navigate('/')
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="px-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="w-full btn-outline btn">
                    <FaGoogle></FaGoogle>
                    Google 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;