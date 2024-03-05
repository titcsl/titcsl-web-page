import {ArrowRight} from "lucide-react";

function Home(){
    return(
        <div>
            <div className="video-container relative overflow-hidden">
                <h1 className="text-voilet-gradient font-extrabold video-text text-3xl md:text-5xl absolute left-2 md:left-10 xl:left-20 transform -translate-y-1/2 md:translate-y-0 max-w-2xl mt-12 text-white z-10 top-[12%]">Ambition
                    Elevated: Consultancy Unleashed.</h1>
                <h1 className="text-voilet-gradient font-extrabold video-text text-3xl md:text-5xl absolute left-2 md:left-10 xl:left-20 transform -translate-y-1/2 md:translate-y-0 max-w-2xl text-white z-10 top-[43%] md:w-auto w-full">Empower
                    your business with our cutting-edge IT solutions.</h1>

                <a target="_blank"
                   className="top-[75%] font-bold video-text text-2xl absolute bottom-10 left-2 md:left-10 xl:left-20 hover:underline cursor-pointer text-white z-10"
                   href="/inquiry/create">Inquire Now<ArrowRight className="inline"/></a>
                <video src="/home-brand.mp4"
                       className="brightness-[.4] absolute inset-0 w-full h-full object-cover filter brightness-40"
                       autoPlay loop muted playsInline></video>
            </div>


            <div
                className="flex flex-col mt-20 items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
                <div className="flex flex-col items-center justify-center max-w-5xl">
                    <div className="flex items-center">
                        <div
                            className="relative w-[350px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                            <img
                                src="/documents.png"

                                className="object-contain dark:hidden"
                                alt="Documents"
                            />
                            <img
                                src="/documents-dark.png"

                                className="object-contain hidden dark:block"
                                alt="Documents"
                            />
                        </div>
                        <div className="relative h-[400px] w-[400px] hidden md:block">
                            <img
                                src="/reading.png"
                                className="object-contain dark:hidden"
                                alt="Reading"
                            />
                            <img
                                src="/reading-dark.png"
                                className="object-contain hidden dark:block"
                                alt="Reading"
                            />
                        </div>

                    </div>
                    <h1 className="text-voilet-gradient text-center text-4xl font-bold">Empower your business with our cutting-edge IT solutions.</h1>

                    <h1 className="text-center text-3xl mt-6 font-bold">Unlock your company's true potential with our
                        consultancy services, because why settle for good when greatness awaits?</h1>
                </div>
            </div>
        </div>

    )
}

export default Home