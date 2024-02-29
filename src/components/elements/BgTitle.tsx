import Image from "next/image";
import bgTitle from "../../../public/assets/img/bg-title.jpg";

type TitleProps = {
  text: String;
};

export default function BgTitle(props: TitleProps) {
  const { text } = props;
  return (
    <div className=" absolute top-0 left-0 w-full  bg-title flex justify-center items-center">
      <Image
        src={bgTitle}
        alt="Desa Matako"
        className="w-full h-16  relative"
      />
      <h1 className="landingTitle text-xl font-bold text-white z-30 absolute w-max mx-auto uppercase">
        {text}
      </h1>
    </div>
  );
}
