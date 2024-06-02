import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { HiMiniShoppingCart } from "react-icons/hi2";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin();

    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err)
            })
    }

    const navOptions = <>

        <li><Link to="/menu">Category</Link></li>
        <li><Link to="/order/salad">All bags</Link></li>
        <li><Link>About us</Link></li>
        <li><Link>Contact us</Link></li>
        {
            user ?
                <>
                    {/* <span>{user?.displayName}</span> */}
                    <button onClick={handleLogOut}>Log out</button>
                </>
                :
                <>
                    <li><Link to="/login">Login</Link></li>
                </>
        }

        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-20 max-w-screen-2xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    <Link to="/"><a className="btn btn-ghost normal-case text-xl">Bag House</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/dashboard/cart">
                        <button className="flex justify-between items-center hover:btn">
                            <HiMiniShoppingCart className="mr-1" />
                            <div className="badge badge-secondary">+{cart.length}</div>
                        </button>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Navbar;