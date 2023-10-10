import Marquee from "react-fast-marquee";

const Event = () => {
    return (
        <div>
            <div className="bgpic ">
                <h1 className="text-xl md:text-3xl font-bold text-black text-center pt-44 pb-3 px-5 md:px-0">Welcome to our <br /> Entertainer Event</h1>
                <p className="md:text-lg font-medium text-center text-base px-5 md:px-0">The most popular event of the recent time we have published for your at a great demand</p>
            </div>
            <div className="py-12">
                <h1 className="text-xl md:text-3xl font-semibold text-black pb-3 text-center px-5 md:px-0">Teams participated</h1>
                <p className="text-base md:text-lg font-medium pb-12 text-center px-5 md:px-0">10 teams have been qualified for this WC for the Trophy</p>
                <div className="bg-gray-300 mx-5 md:mx-20 lg::mx-40 p-5 ">
                    <Marquee speed={70} pauseOnHover={true}>
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/J2WWprQ/National-Flag.jpg" alt="" />
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/my1ts6N/istockphoto-472330663-612x612.jpg" alt="" />
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/RNxdQgP/flag-symbolism-Pakistan-design-Islamic.webp" alt="" />
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/HTSRYyW/download.jpg" alt="" />
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/vd95qLR/istockphoto-472317739-612x612.jpg" alt="" />
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/F7p5Qbn/Flag-Australia.webp" alt="" />
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/x5m7HvH/national-flag-of-sri-lanka-flat-color-icon-vector.jpg" alt="" />
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/VBvNCXq/Flag-South-Africa.webp" alt="" />
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/QbQcB5W/Flag-of-Afghanistan-1931-1973-svg.png" alt="" />
                        <img className="w-12 h-8 mr-3" src="https://i.ibb.co/6mLTQDZ/download.png" alt="" />
                    </Marquee>
                </div>
            </div>
            <h1 className="text-xl md:text-4xl font-semibold text-center md:py-10 px-5 md:px-0">Special Event</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-24 py-12">
                <div>
                    <h1 className="text-3xl font-semibold text-black pb-3 text-center md:text-left px-5 md:pl-5 lg:pl-0">You can see this tournament Live from us</h1>
                    <p className="text-lg font-medium pb-3 text-center md:text-left px-5 md:pl-5 lg:pl-0 ">Enjoy this entertaining tournament</p>
                    <div className="flex justify-center md:justify-start">
                    <button className="btn btn-active btn-neutral md:ml-5 lg:ml-0">See Live</button>
                    </div>
                </div>
                <div>
                    <img className="w-96 px-5 md:pr-5 lg:pr-0" src="https://i.ibb.co/PFFR8B2/73a7udao-shakib-al-hasan-afp-625x300-14-October-22.webp" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Event;