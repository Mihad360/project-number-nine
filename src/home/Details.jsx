/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



const Details = ({ detail }) => {

    

    // eslint-disable-next-line no-unused-vars
    const { id, name, image, price, short_description, description, button, buy, entertainer, icon } = detail

    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className="h-64 w-full" src={image} alt="Images" /></figure>
                <div className="card-body bg-fuchsia-200">
                    <h2 className="card-title text-xl md:text-2xl text-black font-semibold">{name}</h2>
                    <p className="text-base md:text-lg font-medium flex gap-3 items-center">
                        <img className='w-5' src={icon} alt="" />
                        <span>{short_description}</span></p>
                    <p className="font-medium">{entertainer}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/detail/${id}`}><button className="btn btn-active btn-neutral">{button}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;