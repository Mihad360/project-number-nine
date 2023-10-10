
const Sectionone = () => {
    return (
        <div className=" flex-col flex md:flex-row items-center justify-center gap-20 md:gap-40 py-10">
            <div className="px-5 md:pl-5 lg:pl-0">
                <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold text-fuchsia-600 pb-4">Our most rated <br /> Entertainer book</h1>
                <p className="text-lg font-medium text-center md:text-left">People really love to see this book for its <br /> entertaining performance</p>
            </div>
            <div className="px-5 md:pr-5 lg:pr-0">
                <h1 className="text-2xl font-semibold text-black pb-3">Neymar Jr book</h1>
                <img className="rounded-xl" src="https://i.ibb.co/f42VLzT/1669281166-Neymar-da-tung-vo-dich-World-Cup-cung-Brazil-chua.jpg" alt="" />
            </div>
        </div>
    );
};

export default Sectionone;