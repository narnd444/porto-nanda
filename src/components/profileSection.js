import Image from "next/image";
const ProfileSection =()=>{
    return(
        <section className="flex bg-black max-h-screen h-screen w-full">
            <div className="relative flex h-screen w-full">
                <div className="absolute left-10 top-10 md:top-auto  md:left-16 md:bottom-32 flex-col">
                    <h1 className="text-8xl md:text-multixl font-Pinyon shadow-lg">Nanda Sofian</h1>
                    {/* <p>Saya Nanda Sofian, Seorang siswa dari Sekolah SMK Informatika Sumedang, saya berasal dari Sumedang.</p> */}
                </div>
                <div className="flex w-full justify-end h-full">
                    <img src="/assets/avatar/avatar.png" className="h-full object-cover">
                    </img>
                </div>
            </div>
        </section>
    )
}
export default ProfileSection;