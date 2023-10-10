import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../authcontext/Authprovider";

const Navbar = () => {

    const {user, logout} = useContext(Authcontext)
    console.log(user)

    const handlelogout = () => {
        logout()
        .then()
    }

    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/event"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Event
            </NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-purple-300 md:px-10 py-3 flex flex-col md:flex-row gap-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="normal-case text-lg md:text-3xl font-bold text-Black">Entertainers books</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {links}
                    </ul>
                </div>
                
                <div className="navbar-end gap-4 flex flex-col md:flex-row">

                    <div>
                        {
                            user && <div className="flex items-center gap-3">
                                <p className="text-xl font-bold text-black">{user?.displayName}</p> 
                                <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
                            </div>
                        }
                    </div>
                     
                    <div>
                    {
                        user ? <button onClick={handlelogout} className="btn btn-active btn-neutral">Sign out</button> : <Link to='/login' className="btn btn-active btn-neutral">Login</Link>
                    }
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;