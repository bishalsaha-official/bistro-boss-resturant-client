import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("Review submitted:", data);
        // TODO: send data to backend here
        reset();
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Add Review</title>
            </Helmet>
            <div className="bg-gray-100 p-8 rounded-xl shadow-md max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-4">Rate Us!</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Recipe input */}
                    <div>
                        <label className="block font-medium mb-1">
                            Which recipe you liked most?
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe you liked most"
                            {...register("recipe", { required: "This field is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.recipe && (
                            <p className="text-red-500 text-sm mt-1">{errors.recipe.message}</p>
                        )}
                    </div>

                    {/* Suggestion input */}
                    <div>
                        <label className="block font-medium mb-1">
                            Do you have any suggestion for us?
                        </label>
                        <input
                            type="text"
                            placeholder="Suggestion"
                            {...register("suggestion")}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Review textarea */}
                    <div>
                        <label className="block font-medium mb-1">
                            Kindly express your care in a short way.
                        </label>
                        <textarea
                            placeholder="Review in detail"
                            {...register("review", { required: "Please provide your review" })}
                            className="textarea textarea-bordered w-full"
                            rows="4"
                        ></textarea>
                        {errors.review && (
                            <p className="text-red-500 text-sm mt-1">{errors.review.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn bg-yellow-700 hover:bg-yellow-800 text-white">
                        Send Review
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddReview;