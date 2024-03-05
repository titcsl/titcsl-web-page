import { Button } from "@/components/ui/button.tsx";
import Container from "@/components/ui/container.tsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, PhoneCall, Sun } from 'lucide-react'
import { useTheme } from "@/components/theme-provider.tsx";

function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="sm:flex sm:justify-between py-3 px-4 border-b sticky bg-white  dark:bg-black top-0 z-50" id="navbar">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-10 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="h-6 md:hidden w-6" />
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4">
                                    <a className="hover:underline block px-2 py-1 text-lg font-medium text-xl234-titopcx"
                                       href="/what-we-do">What we do</a>
                                    <a className="hover:underline block px-2 py-1 text-lg font-medium text-xl234-titopcx"
                                       href="/ok">Who we are</a>
                                    <a className="hover:underline block px-2 py-1 text-lg font-medium text-xl234-titopcx"
                                       href="/ok">Services</a>
                                    <a className="hover:underline block px-2 py-1 text-lg font-medium text-xl234-titopcx"
                                       href="/ok">Solutions</a>


                                    <div className="flex inline-flex mt-4 items-center">
                                        <PhoneCall/>
                                        <a className="ml-1 block px-2 py-1 hover:underline font-semibold text-xl234-titopcxy"
                                           href="/inquiry">CONTACT US</a>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <a href="/" className="text-xl234-titopcs font-extrabold ml-4 lg:ml-0">TITCSL</a>
                    </div>
                    <nav className="hidden md:mx-6 items-center space-x-10 lg:space-x-6 md:block flex flex-1">
                        <div className="flex items-center">
                            <a className="ml-4 hover:underline font-medium text-xl234-titopcx" href="/what-we-do">What
                                we do</a>
                            <a className="ml-6 hover:underline font-medium text-xl234-titopcx" href="/who-we-are">Who we are</a>
                            <a className="ml-6  hover:underline font-medium text-xl234-titopcx" href="/ok">Services</a>
                            <a className="ml-6  hover:underline font-medium text-xl234-titopcx" href="/masthead">Masthead</a>

                        </div>
                    </nav>

                    <div className="flex items-center">
                    </div>
                    <a className="mr-4 lg:block hidden hover:underline font-semibold text-xl234-titopcxy" href="/ok">CONTACT US</a>

                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle Theme"
                        className="mr-2"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle Theme</span>
                    </Button>
                </div>
            </Container>
        </header>
    )
}

export default Header;
