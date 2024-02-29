import Head from "next/head";
type AppSheelProps = {
  children: React.ReactNode;
  pageTitle:string;
};

export default function PagesWrapper(props: AppSheelProps) {
  const { children,pageTitle } = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="w-full h-auto pb-20 bg-white pt-32 text-black">
        {children}
      </div>
    </>
  );
}
