import { useLoaderData } from "react-router-dom";
import Details from "./Details";
import Sectiontwo from "./Sectiontwo";
import Banner from "../header/Banner";
import Writers from "./Writers";


const Home = () => {

    

    const details = useLoaderData()
    // console.log(details)

    return (
        <div className="bg-gray-100">
            <div>
                <Banner></Banner>
            </div>
            <div className="py-16">
                <Sectiontwo></Sectiontwo>
            </div>
            <h1 className="text-3xl font-semibold text-center pt-12 text-black">Entertainers details</h1>
            <p className="text-xl text-center px-5 md:px-0 pt-4">Here you can see our most famous available entertainers books which you can see in details</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-24 gap-12 py-12" >
                {
                    details.map(detail => <Details key={detail.id} detail={detail}></Details>)
                }
            </div>
            <div className="bg-gray-100">
                {/* <Sectionone></Sectionone> */}
                <Writers></Writers>
            </div>
        </div>
    );
};

export default Home;