import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SingleMyToy from './SingleMyToy';
import Swal from 'sweetalert2';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [myToysList, setMyToysList] = useState([]);
    const [filterOption, setFilterOption] = useState(''); // Default filter option is empty
    const [filteredToys, setFilteredToys] = useState([]); // State variable to store the filtered toys



    const url = `http://localhost:3000/products?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToysList(data);
                console.log(data)
            })
    }, [user])

    //Delete any toy that
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/products/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = myToysList.filter(toy => toy._id !== id);
                            setMyToysList(remaining);
                        }
                    })

            }
        })
    }

    //update toy details
    // const handleUpdate = id => {
    //     fetch(`http://localhost:3000/products/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {

    //             }
    //         })
    // }

    // Update toy details
    // const handleUpdate = id => {
    //     // Find the specific toy in the myToysList using the id
    //     const updateToyDetails = myToysList.find(toy => toy._id === id);
    //     console.log(updateToyDetails)


    //     // Check if the toy is found
    //     if (updateToyDetails) {

    //         fetch(`http://localhost:3000/products/${id}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 toy_name: updateToyDetails.toy_name,
    //                 available_quantity: updateToyDetails.quantity,
    //                 price: updateToyDetails.price,
    //                 picture_url: updateToyDetails.photo,
    //                 description: updateToyDetails.description
    //             })
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.modifiedCount > 0) {
    //                     // Handle the successful update
    //                     Swal.fire(
    //                         'Updated!',
    //                         'Your Toy has been updated.',
    //                         'success'
    //                     );
    //                 }
    //             });
    //     }
    // };

    const handleUpdate = async (updatedToy) => {
        const id = updatedToy._id;

        // ...

        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                toy_name: updatedToy.toy_name,
                available_quantity: updatedToy.quantity,
                price: updatedToy.price,
                picture_url: updatedToy.photo,
                description: updatedToy.description
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // Handle the successful update
                    Swal.fire(
                        'Updated!',
                        'Your Toy has been updated.',
                        'success'
                    );
                }
            });
    };


    const handleFilterByPrice = (option) => {
        setFilterOption(option); // Update the filter option state

        // Perform filtering based on the selected option
        switch (option) {
            case 'ascending':
                const ascendingToys = [...myToysList].sort((a, b) => a.price - b.price);
                setFilteredToys(ascendingToys);
                break;
            case 'descending':
                const descendingToys = [...myToysList].sort((a, b) => b.price - a.price);
                setFilteredToys(descendingToys);
                break;
            default:
                setFilteredToys([]); // If the filter option is empty, clear the filtered list
                break;
        }
    };


    return (
        <div>
            <div className='container mx-auto py-10'>
                <h1 className="text-4xl font-bold text-center mb-10">My Toys</h1>

                <div className="dropdown dropdown-hover mb-10">
                    <label tabIndex={0} className="btn m-1">Filter With Price</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleFilterByPrice('descending')}>Descending</a></li>
                        <li><a onClick={() => handleFilterByPrice('ascending')}>Ascending</a></li>
                        <li><a onClick={() => handleFilterByPrice('')}>Clear Filter</a></li> {/* Add a clear filter option */}
                    </ul>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy Name</th>
                                <th>Toy Image</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {
                                myToysList.map(myToy => <SingleMyToy key={myToy._id} myToy={myToy} handleDelete={handleDelete} handleUpdate={handleUpdate}></SingleMyToy>)
                            } */}
                            {
                                (filteredToys.length > 0 ? filteredToys : myToysList).map(myToy => (
                                    <SingleMyToy key={myToy._id} myToy={myToy} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;