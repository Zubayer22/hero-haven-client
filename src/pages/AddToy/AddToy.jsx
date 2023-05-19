import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {

    const {user} = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const toy_name = form.toy_name.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;


        console.log(seller_email, seller_name, seller_email, toy_name, category, photo, price, rating, quantity, description);
    }
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-4xl font-bold text-center mb-10">Add Your Toy</h1>
            <div className="">

                <div className=''>
                    <form onSubmit={handleAddToy} className='w-3/4 mx-auto'>
                        <div className='flex-column md:flex gap-5'>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='seller_name' placeholder="Enter your Name" className="input input-bordered" defaultValue={user?.displayName} required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name='seller_email' placeholder="Enter your email" className="input input-bordered" defaultValue={user?.email} required />
                            </div>
                        </div>

                        <div className='flex-column md:flex gap-5'>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" name='toy_name' placeholder="Enter your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select className="input input-bordered" name='category' required>
                                    <option disabled selected>Select Category</option>
                                    <option value="Avengers">Avengers</option>
                                    <option value="Marvel">Marvel</option>
                                    <option value="Justice League">Justice League</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex-column md:flex gap-5'>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' placeholder="Enter Toy Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name='rating' placeholder="Give Rating" className="input input-bordered" min="0" max="5" required />
                            </div>
                        </div>

                        <div className='flex-column md:flex gap-5'>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Toy Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter your Toy photo url" className="input input-bordered" />
                            </div>
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Toy Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Enter Description"
                                className="textarea textarea-bordered h-24"
                                required
                            ></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded font-bold text-lg">Add Toy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;