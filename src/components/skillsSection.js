import Image from "next/image";
const SkillSection =()=>{
    return(
        <section className="flex flex-col  relative bg-black pb-16 h-max w-full">
            <div className="flex w-full h-max  ">
                <img src="/assets/background/overlay/overlayY.png" className="object-cover w-full"></img>
            </div>
            <div className="content-wraper flex flex-col space-y-5 md:space-y-0 md:flex-row w-full items-start md:justify-between px-10 md:px-72">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold uppercase mb-5">Tools</h1>
                    <ol className="list-inside space-y-5 font-medium text-xl">
                        <li>Canva</li>
                        <li>Figma</li>
                        <li>Visual Studio Code</li>
                        <li>Git</li>
                        <li>Github</li>
                    </ol>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold uppercase">Skills</h1>
                </div>
            </div>

        </section>
    )
}
export default SkillSection;