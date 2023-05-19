import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SingleMyToy from './SingleMyToy';
import Swal from 'sweetalert2';

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [myToysList, setMyToysList] = useState([]);


    const url = `http://localhost:3000/products?email=${user?.email}`;
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyToysList(data);
            console.log(data)
        })
    },[user?.email])

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
    const handleUpdateToyDetails = id => {
        fetch(`http://localhost:3000/products/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {

            }
        })
    }


    return (
        <div>
            <div className='container mx-auto py-10'>
            <h1 className="text-4xl font-bold text-center mb-10">My Toys</h1>
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

                        {
                            myToysList.map(myToy => <SingleMyToy key={myToy._id} myToy={myToy} handleDelete={handleDelete}></SingleMyToy>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyToys;