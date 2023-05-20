import React, { useContext } from 'react';
import login from '../../../assets/undraw_Mobile_login_re_9ntv.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../../hooks/useTitle';


const SignUp = () => {
    useTitle('Sign Up');
    const {createUser, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);


        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);

            return updateProfile (createdUser,{
                displayName: name,
                photoURL: photo
            });
        })
        .then(()=>{
            logOut();
            navigate('/login')
        })
        .catch(error => {
            console.log(error);
        })

    }


    return (
        <div className="container mx-auto my-10">
            <h1 className="text-4xl font-bold text-center">Sign Up</h1>
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-md-1/2 w-full'>
                    <img src={login} className="w-full" />
                </div>

                <div className='w-md-1/2 w-full'>
                    <form onSubmit={handleSignUp} className='w-3/4 mx-auto'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phot URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter your photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded font-bold text-lg">Sign Up</button>
                        </div>
                        
                        <p className='text-center pt-5'>Already have an account? <Link className='bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-700' to='/login'>Log In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;