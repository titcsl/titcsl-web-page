import { ArrowRight } from "lucide-react";

function What_We_Do() {
    return (
        <div>
            <div className="video-container relative overflow-hidden">
                <p className="video-text-info font-bold absolute top-[18%] left-2 md:top-1/4 md:left-10 xl:left-20 transform -translate-y-1/2 md:translate-y-0 max-w-2xl text-white z-10">WHAT
                    WE DO.</p>
                <h1 className="text-voilet-gradient top-[22%] font-extrabold video-text text-5xl absolute left-2 md:left-10 xl:left-20 transform -translate-y-1/2 md:translate-y-0 max-w-2xl mt-12 text-white z-10">Transforming
                    Businesses,</h1>
                <h1 className="text-voilet-gradient top-[45%] font-extrabold video-text text-5xl absolute left-2 md:left-10 xl:left-20 transform -translate-y-1/2 md:translate-y-0 max-w-2xl text-white z-10">One
                    Byte at a Time.</h1>
                <a target="_blank"
                   className="top-[65%] font-bold video-text text-2xl absolute bottom-10 left-2 md:left-10 xl:left-20 hover:underline cursor-pointer text-white z-10"
                   href="/inquiry/create">Let's Talk. <ArrowRight className="inline"/></a>
                <video src="/what-we-do-brand.mp4"
                       className="brightness-[.3] absolute inset-0 w-full h-full object-cover filter brightness-40"
                       autoPlay loop muted playsInline></video>
            </div>

            <div className="flex  flex-col-reverse mt-28 md:flex-row">
                <div className="flex-1 md:order-2">
                    <video
                        src="/what-we-at-titcsl.mp4"
                        className="mx-auto md:ml-8 h-auto max-w-[70%]"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
                <div className="flex-1 md:order-1">
                    <h1 className="mx-auto md:ml-40 px-1 py-1 max-w-[80%] font-medium text-[2rem]">How do we work?</h1>
                    <p className="mx-auto ml-6  md:ml-40 mt-5 ml-2 max-w-[95%] px-1 py-1 font-medium text-[1.25rem] w-[22pc] md:w-[25pc]">
                        At TITCSL, we specialize in developing cutting-edge software solutions and providing digital
                        services
                        tailored to meet the diverse needs of businesses across various industries.
                    </p>
                </div>
            </div>
            <h1 className="font-serif text-center mt-12 font-bold text-3xl">How we prepare the recipe of your Business
                success?</h1>
            <p className="text-center font-serif mt-3 font-medium text-2xl">Ingredients:</p>
            <p className="text-center font-serif text-xl mt-3">Clear, Vision, Expertise, Innovation, Adaptability,
                Quality Assurance, Service</p>
            <h1 className="text-center mt-3 text-2xl font-sans">I Believe, We have all Ingredients, Just there is need
                of you.</h1>
            <h1 className="text-center mt-3 text-2xl font-sans">And yours business to give the taste of success.</h1>
            <div className="mt-16">
                <h1 className="text-center text-voilet-gradient font-bold text-5xl">A Note to our Readers</h1>
                <p className="mt-12 text-center font-bold text-xl font-spaceGrotesk">"Empowering dreams through
                    digital innovation, one partnership at a time."</p>
                <p className="md:mr-[18pc] text-right  font-medium">- Ishan Teredesai</p>
                <p className="md:mr-[18pc] text-right font-medium">Chairman, TITCSL.</p>
            </div>


        </div>
    )
}

export default What_We_Do;
