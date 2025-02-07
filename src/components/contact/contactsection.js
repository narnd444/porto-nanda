"use client"
import emailjs from "emailjs-com";

const ContactSection = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    emailjs
      .sendForm(
        "service_d8rvysx", // Ganti dengan Service ID Anda
        "template_w7lrr2t", // Ganti dengan Template ID Anda
        e.target,
        "bSV_WTaV4gU0dYVvx" // Ganti dengan Public Key Anda
      )
      .then(
        (result) => {
          console.log("Email berhasil dikirim:", result.text);
          alert("Pesan berhasil dikirim!");
        },
        (error) => {
          console.error("Error mengirim email:", error.text);
          alert("Terjadi kesalahan. Coba lagi nanti.");
        }
      );
    e.target.reset(); // Reset formulir setelah terkirim
  };

  return (
    <section className="flex flex-col h-max py-16 space-y-16 items-center justify-center w-full font-Gotham text-white">
      <div className="title-wraper flex flex-col text-center items-center">
        <h1 className="flex text-yellow-400 font-bold text-2xl">Contact Me</h1>
        <p className="text-sm">
          Kontak saya untuk kolaborasi maupun untuk berelasi.
        </p>
      </div>
      <div className="flex w-full flex-col">
        <form
          onSubmit={sendEmail} // Integrasi EmailJS
          className="flex flex-col space-y-10 px-8 md:px-48 items-center justify-center"
        >
          <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row w-full md:space-x-10">
            <div className="name-wrap flex w-full items-baseline space-y-3 flex-col">
              <label>Nama Lengkap</label>
              <input
                type="text"
                name="name" 
                placeholder="Tan Malaka"
                className="text-white w-full p-3 rounded-xl bg-transparent border"
              />
            </div>
            <div className="name-wrap w-full flex items-baseline space-y-3 flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email" 
                placeholder="pasukankiri@gmail.com"
                className="text-white w-full p-3 rounded-xl bg-transparent border"
              />
            </div>
          </div>
          <div className="name-wrap w-full flex items-baseline space-y-3 flex-col">
            <label>Pesan</label>
            <textarea
              name="message"
              placeholder="'Merasa diri sigma tetapi jauh dari Agama, cita-cita masuk Surga tiap hari berbuat Dosa.'"
              className="text-white w-full p-3 rounded-xl bg-transparent border"
            />
          </div>
          <button
            type="submit"
            className="p-3 px-8 bg-white rounded-xl transition-all duration-300 hover:scale-110 text-black"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
