
const Banner = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="flex-col flex md:flex-row items-center justify-center gap-16 md:gap-24 lg:gap-36">
                <div className="px-5 lg:px-0">
                <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl font-bold text-black pb-4">Welcome to our <br /> <span className="text-fuchsia-600">Entertainers event</span></h1>
                <p className="text-sm md:text-left text-center md:text-xl font-medium pb-4 ">Find your most favorite Entertainers book from us <br /> at <span className="text-fuchsia-600">30%</span> discount</p>
                {/* <Link><button className="btn btn-active btn-neutral">Buy here</button></Link> */}
                </div>
                <div>
                    <img className="rounded-full px-5 md:pr-5 w-80" src="https://i.ibb.co/gwx6RHP/9d0ff4a2f4316013922bfa6173b3084f.jpg" alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;