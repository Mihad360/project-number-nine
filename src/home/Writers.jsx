
const Writers = () => {
    return (
        <div>
            <div className="pt-12 pb-14">
                <h1 className="text-3xl text-center font-semibold px-5 md:px-0 pb-3">Our writers</h1>
                <p className="text-lg text-center font-medium pb-12 px-5 md:px-0">Those entertainers book you have visited are written by our writters</p>
                <div className="flex justify-evenly items-center flex-col md:flex-row gap-10 md:gap-0">
                    <div className="space-y-2 bg-fuchsia-200 p-5 rounded-lg text-center">
                        <img className="w-44 rounded-full mx-auto" src="https://i.ibb.co/djKPm1w/ofir-roval.png" alt="" />
                        <h1 className="text-xl font-semibold text-black">Rakibul hasan</h1>
                        <p className="text-base">Proffesional Writter</p>
                    </div>
                    <div className="space-y-2 bg-fuchsia-200 p-5 rounded-lg text-center">
                        <img className="w-44 rounded-full" src="https://i.ibb.co/9w7WQqp/lisa-dyatko.png" alt="" />
                        <h1 className="text-xl font-semibold text-black">Khadija akter</h1>
                        <p className="text-base">Designer</p>
                    </div>
                    <div className="space-y-2 bg-fuchsia-200 p-5 rounded-lg text-center">
                        <img className="w-44 rounded-full" src="https://i.ibb.co/H7PrScT/daniel-waisberg.png" alt="" />
                        <h1 className="text-xl font-semibold text-black">Montasir Mihad</h1>
                        <p className="text-base">Book Publisher</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Writers;