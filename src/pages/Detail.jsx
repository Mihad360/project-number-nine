import { Link, useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


const Detail = () => {
    const [detail, setDetail] = useState({})

    const details = useLoaderData()
    const { id } = useParams()
    // const idint = parseInt(id)
    const about = details.find(about => about.id === id)
    // console.log(about)

    useEffect(() => {
        setDetail(about)
    }, [])
    // console.log(detail)
    return (
        <div>

            <div className="card w-2/3 mx-auto bg-base-100 border my-12">
                <figure className="md:px-10 p-5 md:pt-10">
                    <img src={detail.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl md:text-3xl text-black font-semibold pb-2">{detail.name}</h2>
                    <p className="text-base md:text-xl font-medium pb-2"><span>{detail.discount}</span></p>
                    <p className="text-sm font-medium pb-3 text-justify">{detail.description}</p>
                    <p className="text-base md:text-xl">{detail.price} TK</p>
                    <div className="card-actions">
                        <button className="btn btn-active btn-neutral">Buy Now</button>
                        <Link to='/'><button className="btn btn-active btn-neutral">Go back</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Detail;