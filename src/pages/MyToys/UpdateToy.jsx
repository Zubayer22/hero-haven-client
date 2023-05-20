import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UpdateToy = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-5" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form className='w-3/4 mx-auto'>
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
                                <input type="number" name='price' placeholder="Enter Toy Price" className="input input-bordered" step="any" required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name='rating' placeholder="Give Rating out of 5" className="input input-bordered" min="0" max="5" step="any" required />
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

export default UpdateToy;