const ContactSection =()=>{
    return(
        <section className="flex flex-col h-max py-16 space-y-16 items-center justify-center w-full font-Gotham">
            <div className="title-wraper flex flex-col text-center items-center">
                <h1 className="flex  text-yellow-400 font-bold text-2xl">
                    Contact Me
                    </h1>
                <p className="text-sm">
                    Kontak saya untuk kolaborasi maupun untuk berelasi.
                </p>
            </div>
            <div className="flex w-full flex-col ">
                <form className="flex flex-col space-y-10 px-8 md:px-48 items-center justify-center">
                    <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row w-full md:space-x-10">
                        <div className="name-wrap flex w-full items-baseline space-y-3 flex-col">
                        <label>Nama Lengkap</label>
                        <input type="text" placeholder="Tan Malaka" className="text-white w-full p-3 rounded-xl bg-transparent border"></input>
                        </div>
                        <div className="name-wrap w-full flex items-baseline space-y-3 flex-col">
                        <label>Email</label>
                        <input type="email" placeholder="pasukankiri@gmail.com" className="text-white w-full p-3 rounded-xl bg-transparent border"></input>
                        </div>
                    </div>
                        <div className="name-wrap w-full flex items-baseline space-y-3 flex-col">
                            <label>Pesan</label>
                            <input type="textarea" placeholder="'Merasa diri sigma tetapi jauh dari Agama, cita-cita masuk Surga tiap hari berbuat Dosa.'" className="text-white w-full p-3  rounded-xl bg-transparent border"></input>
                        </div>
                        <button className="p-3 px-8 bg-white rounded-xl transition-all duration-300 hover:scale-110 text-black">
                            Kirim
                        </button>
                </form>
            </div>
        </section>
    )
} 
export default ContactSection;