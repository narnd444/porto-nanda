import Image from "next/image"
import { RiSearchFill } from "react-icons/ri";

const Hero =()=> {
return(
 <section className="flex font-Gotham bg h-screen bg-hero bg-cover  w-full" id="Home">
    <div className="flex flex-col md:flex-row py-32 space-y-10 md:space-y-0 px-16 md:px-32 w-full full space-x-72 items-center justify-center md:justify-between">
        <div className="flex-col space-y-3 items-start justify-start md:w-5/12">
            <h1 className="flex text-7xl">
                Web Depelover
            </h1>
            <p className="flex text-sm">
            Halo, saya [Namamu]. Saya bekerja sebagai programmer di [Nama perusahaan]. Saya fokus pada pengembangan [Jenis aplikasi atau teknologi, misal: aplikasi mobile, sistem backend]. Saya senang bisa berbagi pengetahuan tentang [Topik yang kamu kuasai]."
            </p>
        </div>
        <div className="flex h-64 relative md:w-6/12">
            <div className="search-bar absolute px-3 top-0 flex items-center right-0 border rounded-lg">
                <input type="search" placeholder="Search Here..." className="py-2  bg-transparent"></input>
                <RiSearchFill className="text-white text-2xl"/>
            </div>
            <div>

            </div>
        </div>
    </div>
 </section>
)

}
export default Hero