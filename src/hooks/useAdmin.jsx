import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, loading} = useAuth(); 
    const axiosSecure = useAxiosSecure(); 
    const {data : isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn : async() => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`); 
            // console.log(res.data)
            // console.log(res?.data?.admin);
            return res?.data?.admin;
        }
    })
    // console.log("isAdmin", isAdmin)
    return [isAdmin, isAdminLoading]; 
};

export default useAdmin;