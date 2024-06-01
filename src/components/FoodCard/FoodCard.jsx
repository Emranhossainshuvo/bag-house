import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import {  useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item || {};
    const { user } = useAuth();
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const axiosSecure = useAxiosSecure(); 
    const [, refetch]= useCart(); 




    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id, 
                email: user.email, 
                name, 
                image, 
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                // TODO: sweetAlert
                //  if(res.data.insertedId){

                //  }
                refetch(); 
            })
        }
        else {
            Swal.fire({
                title: "Your aren't logged in!",
                text: "Please login to add a product to you cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from : location }})
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food items" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 p-2 rounded-md">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-slate-700 hover:bg-slate-500 bg-slate-300 border-0 border-b-4 text-black">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;