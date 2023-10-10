import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center space-y-4 pt-52">
            <h1 className="text-3xl font-bold">Ooppss..!!</h1>
            <h1 className="text-2xl font-semibold pb-4">404 page not found</h1>
            <Link to='/'><button className="btn btn-active btn-neutral">Go home</button></Link>
        </div>
    );
};

export default Error;