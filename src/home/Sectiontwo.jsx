/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Sectiontwo = () => {
    return (
        <div className="flex-col-reverse flex md:flex-row items-center justify-center gap-20 md:gap-28 lg:gap-48 px-5 md:px-16 lg:px-24">
            <div>
                <img className="rounded-xl" src="https://i.ibb.co/cLGbWGz/385082970-712927890877879-3928610837293876113-n.jpg" alt="" />
            </div>
            <div>
                <h1 className="text-lg font-semibold pb-4">Here is some info about the Crickets biggest event <br /> <span className="text-fuchsia-600 font-semibold text-xl">Men's ODI World cup</span> was helding at the present</h1>
                <p className="text md:text-lg font-medium pb-4">You can see this full event <span className="text-fuchsia-600 font-semibold text-xl">Free</span> from our site. <br /> Hope you will enjoy</p>
                <Link to='/event'><button className="btn btn-active btn-neutral">See about this</button></Link>
            </div>
        </div>
    );
};

export default Sectiontwo;