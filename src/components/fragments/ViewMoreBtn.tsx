import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type BtnProps = {
  href: string;
};

export default function ViewMoreBtn(props: BtnProps) {
  const { href } = props;
  return (
    <div className="flex gap-3 w-max items-center justify-center mx-auto">
      <p className="text-lg font-normal text-primary">Lihat Selengkapnya</p>
      <Link
        href={href}
        className="btn-sejarah-selengkapnya delay-100 duration-200 relative h-12 w-12 border z-10 overflow-hidden text-primary border-gray-200 flex justify-center items-center rounded-full"
      >
        <FaArrowRight />
        <div className=" w-full h-full delay-100 duration-200 rounded-full bg-primary absolute -z-10 -translate-x-10"></div>
      </Link>
    </div>
  );
}
