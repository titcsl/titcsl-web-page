import Container from "@/components/ui/container.tsx";

function Footer(){
    return(
        <>
            <footer className="sm:flex sm:justify-between mt-[40px] py-3 px-4">
                <Container>
                    <div className="relative px-4 sm:px-6 lg:px-8 flex h-10 items-center justify-between w-full">
                        <div className="flex items-center">
                            <a href="/" className="text-xl234-titopcs font-bold ml-0 lg:ml-0">
                                TITCSL
                            </a>
                        </div>
                        <nav className="hidden md:mx-6 items-center space-x-10 lg:space-x-6 md:block flex flex-1">
                            <div className="flex items-center">

                            </div>
                        </nav>

                        <div className="flex items-center">
                            <span className="mr-2 ml-2 text-xl234-titopcsxi">&copy; 2024 TITCSL.</span>
                            <a target="_blank" href="https://instagram.com/titcsl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-5 lucide lucide-instagram"
                                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                </svg>
                            </a>
                            <a target="_blank" href="https://facebook.com/titcsl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="ml-5 mr-5 lucide lucide-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>

                            <a href="/privacy/Policy">
                                <p className="hidden lg:block text-xl234-titopcsi hover:underline overflow-hidden hover:text-ellipsis">Privacy
                                    Notice</p>
                            </a>
                            <a href="/disclaimer/Footer">
                                <p className="hidden lg:block text-xl234-titopcsi ml-4 hover:underline overflow-hidden hover:text-ellipsis">Disclaimer</p>
                            </a>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer