import React, { useContext } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const SingleMyToy = ({ myToy, handleDelete, handleUpdate }) => {

    const { _id, name, category, price, seller_name, available_quantity, description, picture_url } = myToy;

    const { user } = useContext(AuthContext);

    // const handleEdit = (event) => {
    //     event.preventDefault();
    //     handleUpdate(_id);
    //   };

    const handleEdit = async (event) => {
        event.preventDefault();
      
        const form = event.target; // Get the form element
        const formData = new FormData(form); // Create a new FormData object
      
        // Convert the FormData object to a plain object
        const updatedToy = Array.from(formData.entries()).reduce(
          (acc, [key, value]) => ({ ...acc, [key]: value }),
          {}
        );
      
        // Pass the _id separately from the form data
        updatedToy._id = myToy._id;
      
        await handleUpdate(updatedToy);
      };

    return (

        <tr>
            <td>
                <h3 className='font-bold'>{name}</h3>
            </td>
            <td>
                <img src={picture_url} className='w-10' alt="" />
            </td>
            <td>
                {category}
            </td>
            <td>
                $ {price}
            </td>
            <td>
                {available_quantity}
            </td>
            <th>
                <label htmlFor={`my-modal-${_id}`} className="btn btn-circle">
                    <FaUserEdit className="h-6 w-6"></FaUserEdit>
                </label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <form onSubmit={(event) => handleEdit(event)} className='w-3/4 mx-auto'>
                            <div className='flex-column md:flex gap-5'>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name='seller_name' placeholder="Enter your Name" className="input input-bordered" defaultValue={user?.displayName} disabled/>
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" name='seller_email' placeholder="Enter your email" className="input input-bordered" defaultValue={user?.email} disabled />
                                </div>
                            </div>

                            <div className='flex-column md:flex gap-5'>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name='toy_name' placeholder="Enter Toy name" className="input input-bordered" defaultValue={name} required />
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name='price' placeholder="Enter Toy Price" className="input input-bordered" step="any" required defaultValue={price}/>
                                </div>
                            </div>

                            

                            <div className='flex-column md:flex gap-5'>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered" required defaultValue={available_quantity}/>
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Enter your Toy photo url" className="input input-bordered" defaultValue={picture_url} />
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
                                    defaultValue={description}
                                    required
                                ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <input className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded font-bold text-lg" type="submit" value="Update Toy" />
                            </div>
                        </form>
                        <div className="modal-action">
                            <label htmlFor={`my-modal-${_id}`} className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle border-none bg-red-600 hover:bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>

    );
};

export default SingleMyToy;