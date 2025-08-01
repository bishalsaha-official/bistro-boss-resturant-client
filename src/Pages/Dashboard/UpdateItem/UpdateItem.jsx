import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {

    const { name, category, recipe, price, _id } = useLoaderData();

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // hosting iamge an imgbb and get image url
        const imageFile = { image: data.image[0] }
        console.log(data.image)
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })

        // Post menu items to the server
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            if (menuRes.data.modifiedCount > 0) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-[#F3F3F3]">
            <h2 className="text-yellow-800 font-semibold text-2xl mb-10 text-center uppercase">Update An Items</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Recipe Name */}
                <div>
                    <label className="block mb-1 font-medium">Recipe name*</label>
                    <input
                        {...register("name", { required: true })}
                        defaultValue={name}
                        placeholder="Recipe name"
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none" />
                    {errors.name && (
                        <p className="text-red-500 text-sm">This field is required</p>
                    )}
                </div>

                {/* Category and Price */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Category*</label>
                        <select defaultValue={category}
                            {...register("category", { required: true })}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none" >
                            <option value="default" disabled>Select a Category</option>
                            <option value="salad">Salad</option>
                            <option value="dessert">Dessert</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="drinks">Drinks</option>
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-sm">This field is required</p>
                        )}
                    </div>

                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Price*</label>
                        <input
                            type="number"
                            defaultValue={price}
                            step="0.01"
                            {...register("price", { required: true })}
                            placeholder="Price"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none" />
                        {errors.price && (
                            <p className="text-red-500 text-sm">This field is required</p>
                        )}
                    </div>
                </div>

                {/* Recipe Details */}
                <div>
                    <label className="block mb-1 font-medium">Recipe Details*</label>
                    <textarea
                        {...register("recipe", { required: true })}
                        defaultValue={recipe}
                        placeholder="Recipe Details"
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none h-32" />
                    {errors.recipe && (
                        <p className="text-red-500 text-sm">This field is required</p>
                    )}
                </div>

                {/* File Upload */}
                <div>
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-warning "
                    />
                    {errors.image && (
                        <p className="text-red-500 text-sm">File is required</p>
                    )}
                </div>

                {/* Submit Button */}
                <div>
                    <button type="submit" className="bg-yellow-800 text-white px-6 py-2 rounded hover:bg-yellow-900 transition flex items-center gap-2" > Update Item</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;