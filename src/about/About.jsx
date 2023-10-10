import Sectionone from "../home/Sectionone";


const About = () => {
    return (
        <div className="bg-gray-100">
            <div className="pt-12 px-5 md:px-0">
                <h1 className="text-xl md:text-3xl font-bold text-black text-center">We create great experience for the visitors</h1>
                <p className="text-base md:text-lg text-center font-medium pb-8 pt-3">Its all about that people likes entertaining things and they always find something Entertain</p>
            </div>
            <div className="mx-auto max-w-[700px] pb-10 px-5 md:px-0">
                <img src="https://i.ibb.co/Dp0pWQQ/122806939-social-media-concept-landing-page-template-landing-page-design-of-social-media-and-enterta.jpg" alt="" />
            </div>

            <div className="bg-gray-100">
                <Sectionone></Sectionone>
            </div>
            <div>
                <h1 className="text-xl md:text-3xl font-bold text-black text-center py-5">It is a service for people who find entertaining things or books</h1>
                <p className="text-lg font-medium text-center px-5 md:px-20 md:text-justify">As we know the Actors, sports like Football, Cricket and also we like to enjoy the comedy for our great entertain. Football is the most popular to the world and it gives us great entertain with many emotion. <br />

                <p className="py-6">Cricket in bangladesh is the most popular sport. People love to see cricket. All over the world now Cricket is very popular and entertaining for us. <br /></p>

                We publish the books on entertaining things whom people really like or love. And their is very popular feature is about to know Neymar JR book.
                It have great demand to us. <br />

                <p className="pt-6">So every year we give a festival or event depends on recent entartaining event.This year we publish some books and made a event to see the FREE Live from us the <span className="text-fuchsia-500 font-semibold">ICC MENS ODI WORLD CUP!!! </span></p> <br />

                <p className="py-6">Hope you all will enjoy our event..</p>
                </p>
            </div>
        </div>
    );
};

export default About;