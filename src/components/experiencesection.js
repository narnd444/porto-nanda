const ExperienceSection =()=>{
    return(
        <section className="flex h-max w-full space-y-10 font-Gotham py-16">
            <div className="w-full space-y-10 flex flex-col items-center">
                <h1 className="title flex font-bold text-2xl uppercase">Experience</h1>
                <div className="content-wraper space-y-8 px-36 flex flex-col">
                    <div className="image-wraper w-full">
                        <img/>
                    </div>
                    <div className="flex w-full space-x-8 ">
                        <h1 className="text-xl w-full font-bold">
                            ITB METAFEST : Live in Metaverse.
                        </h1>
                        <p className="text-base">
                            Mengikuti acara yang berisikan perbincangan mengenai Metaverse di Masa Depan, disini saya mengexplorasi apa itu metaverse dan mencoba beberapa alat Virtual Machine seperti VR da AR.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExperienceSection;