import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import logo from '../../../assets/logo.png'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className='bg-sky-500'>
            <div className="navbar container mx-auto py-3 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/all-toys'>All Toys</Link></li>
                            {
                                user
                                    ?
                                    <>
                                        <li><Link to='/my-toys'>My Toys</Link></li>
                                        <li><Link to='/add-toy'>Add Toy</Link></li>
                                    </>

                                    :
                                    ''
                            }
                            <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} className='w-full md:w-1/2' alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/all-toys'>All Toys</Link></li>
                        {
                            user
                                ?
                                <>
                                    <li><Link to='/my-toys'>My Toys</Link></li>
                                    <li><Link to='/add-toy'>Add Toy</Link></li>
                                </>

                                :
                                ''
                        }


                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user
                            ?
                            <div className='flex items-center'>
                                <button onClick={handleLogOut} className='btn bg-white border-none text-black px-8 py-2 hover:bg-white'>Logut</button>
                                <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                                    <img src={user?.photoURL} className={user?.photoURL ? 'rounded-full w-10 ms-3' : ''} alt="" />
                                </div>
                            </div>

                            :
                            <Link className='btn bg-white border-none text-black px-8 py-2 hover:bg-white' to='/login'>Login</Link>
                    }

                </div>
            </div>
        </div>

    );
};

export default Header;