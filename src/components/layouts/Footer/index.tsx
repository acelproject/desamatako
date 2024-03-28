import logo from "../../../../public/assets/img/logo.png";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-[#343a40] relative w-full left-0 bottom-0 md:px-20">
      <div className="md:flex block w-full gap-5 mx-auto pb-10">
        <div className="w-1/3 pt-10">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Logo Desa Matako" className="w-8" />
            <h1 className="text-lg font-bold text-white uppercase">
              Desa Matako
            </h1>
          </div>
          <div className="mt-3 text-white">
            Website Resmi Pemerintah Desa Matako, <br /> Kecamatan Tojo Barat,
            Kabupaten Tojo Una-Una
          </div>
          <div className="mt-5 flex gap-3">
            <div className="footer-sosmed-fb transition-all delay-100 duration-200  text-white text-xl w-10 h-10 flex items-center relative overflow-hidden z-10 justify-center p-2 rounded-full border border-white">
              <FaFacebookF />
              <div className="w-full h-full transition-all delay-100 duration-200 bg-primary rounded-full absolute -z-10 translate-y-10"></div>
            </div>
            <div className="footer-sosmed-wa transition-all delay-100 duration-200  text-white text-xl w-10 h-10 flex items-center relative overflow-hidden z-10 justify-center p-2 rounded-full border border-white">
              <FaWhatsapp />
              <div className="w-full h-full transition-all delay-100 duration-200 bg-green-400 rounded-full absolute -z-10 translate-y-10"></div>
            </div>
          </div>
        </div>
        <div className="w-1/3 pt-10">
          <div className="flex items-center gap-3">
            <div className="text-3xl text-primary">
              <LiaComments />
            </div>
            <h1 className="text-lg font-bold text-white uppercase">
              hubungi kami
            </h1>
          </div>
          <div className="mt-3 text-white">
            Jln Lorong Labua 02, Desa Matako Kecamatan Tojo Barat, Kabupaten
            Tojo Una-Una, Provinsi Sulawesi Tengah, Indonesia, 94680
          </div>
          <div className="mt-3 text-white">
            <div>
              <div className="flex items-center gap-2 text-gray-300">
                <div>
                  <FaPhoneAlt />
                </div>
                <p>Telepon: 085299633122</p>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div>
                  <MdEmail />
                </div>
                <p>Email: desamatako@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/3 pt-10">
          <div className="flex items-center gap-3">
            <div className="text-2xl text-primary">
              <FaLocationDot />
            </div>
            <h1 className="text-lg font-bold text-white uppercase">
              lokasi kantor desa
            </h1>
          </div>
          <div className="w-full mt-4 ">
            <div className="rounded-sm overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d838.4981700456367!2d120.91361134216811!3d-1.4206314725803912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8f1d3005eefd8d%3A0xeb9418a60980784!2sKantor%20desa%20matako!5e0!3m2!1sid!2sid!4v1711593468057!5m2!1sid!2sid" width="450" height="30`0" style={{border:"0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5 mx-auto font-normal text-gray-300 pb-5 justify-center border-t-[1px] border-t-gray-400">
        <p className="mt-4">Copyright © 2024 acelweDev.</p>
      </div>
    </div>
  );
}
