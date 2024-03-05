function Masthead() {
    return (
        <div style={{textAlign: "center", display: "flex", flexDirection: "column"}}>
            <h1 className="text-voilet-gradient mt-4 font-bold text-4xl">TEREDESAI INFORMATION TECHNOLOGY CONSULTANCY
                SERVICE.</h1>
            <p className="font-medium mt-4 text-2xl">The COMPANY, established on 1/03/24, is wholly owned by Mr. Ishan
                Teredesai.</p>
            <p className="font-medium mt-2 text-2xl">No other individual or entity holds ownership in the company
                as </p>
            <p className="font-medium mt-2 text-2xl">of
                the current date, in accordance with Indian law.</p>

            <p className="font-bold mt-2 text-2xl">Chairman & Founder: Mr. Ishan Teredesai</p>
            <p className="font-bold mt-2 text-2xl">Any Query? contact: query@titcsl.space</p>
            <div style={{marginLeft: "auto"}} className="">
                <img className="mt-8 w-[10pc]" src="/signature.png" alt="Signature"/>
                <p className="text-center">Agreement declared by Chairman.</p>
            </div>
            <h1 className="text-center font-serif mt-6 mb-28">This Agreement of Company is still not been gone through legal
                process, but for information all things are given above.</h1>

        </div>

    );
}

export default Masthead;
