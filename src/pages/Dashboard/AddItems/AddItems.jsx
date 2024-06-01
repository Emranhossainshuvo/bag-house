import { useForm } from "react-hook-form";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY; 
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {

    const { register, handleSubmit } = useForm();

    const axiosPublic = useAxiosPublic(); 
    const axiosSecure = useAxiosSecure(); 

    const onSubmit = async(data) => {
        console.log(data); 
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        } ); 
        if(res.data.success){
            const menuItem = {
                name: data.name, 
                category: data.category, 
                price: parseFloat(data.price), 
                recipe: data.recipe, 
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem); 
            console.log(menuRes.data); 
            if(menuRes.data.insertedId){
                // show an alert to let the user know that his mission was successfull
                alert('successfully added'); 
            }

        }
        console.log(res.data)
    };

    return (
        <div>
            <SectionTitles subHeading={"---What's new?---"} heading={"Add an item"}></SectionTitles>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe name"
                            {...register('name', {required: true})}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="flex gap-6">
                        {/* cetegory */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', {required: true})} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                                <option value="desserts">Desserts</option>

                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', {required: true})}
                                className="input input-bordered w-full"
                            />
                        </div>

                    </div>
                    {/* recipe details textare */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe detail</span>
                        </label>
                        <textarea {...register('recipe', {required: true})} className="textarea textarea-bordered h-24" placeholder="Your recipe here"></textarea>
                    </div>
                    <div className="mt-4">
                        <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn btn-neutral my-4">
                        Add item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;