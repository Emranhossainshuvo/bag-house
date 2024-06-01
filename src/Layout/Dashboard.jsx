import { NavLink, Outlet } from "react-router-dom";
import { MdApartment,  MdCalendarToday, MdCall, MdHome, MdList, MdMenu, MdPeople, MdReviews, MdShoppingCart, MdWallet } from "react-icons/md";
import { ImBook, ImList, ImSpoonKnife } from "react-icons/im";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart();

    const [isAdmin] = useAdmin();

    // console.log(isAdmin)

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <MdApartment></MdApartment>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems">
                                        <ImSpoonKnife />
                                        Add items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <ImList/>
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/Bookings">
                                        <ImBook/>
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <MdPeople />
                                        All users
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <MdHome />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <MdCalendarToday />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <MdWallet />
                                        payment history
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <MdShoppingCart />
                                        My cart ({cart.length})
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addReview">
                                        <MdReviews />
                                        Add review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myBooking">
                                        <MdList />
                                        My Booking
                                    </NavLink>
                                </li>
                            </>
                    }
                    {/* common items */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <MdHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <MdMenu />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <MdCall />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;