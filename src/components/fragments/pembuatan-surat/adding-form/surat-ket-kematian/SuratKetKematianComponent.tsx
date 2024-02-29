type AddFormProps = {
  addForm: any;
  title: any;
};

export default function SuratKetKematianComponent(props: AddFormProps) {
  const { addForm, title } = props;
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-semibold  mb-5">{title}</h1>
      <div className="flex gap-10 mt-5 justify-between">
        <div className="flex flex-col w-3/12 ">
          <label htmlFor="" className="font-medium mb-2">
            Upload KTP
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
            id="file_input"
            type="file"
          />
        </div>
        <div className={` flex flex-col w-6/12 ps-5`}>
          <label htmlFor="" className="font-medium mb-2">
            Upload KK
          </label>
          <input
            className="block w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
            id="file_input"
            type="file"
          />
        </div>
      </div>
      <div className="flex gap-10 mt-5 justify-between">
        <div className="flex flex-col w-3/12 ">
          <label htmlFor="" className="font-medium mb-2">
            Jam Meninggal (WITA)
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
            id="file_input"
            type="time"
          />
        </div>
        <div className={` flex flex-col w-6/12 ps-5`}>
          <label htmlFor="" className="font-medium mb-2">
            Tanggal Meninggal
          </label>
          <input
            className="block w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
            id="file_input"
            type="date"
          />
        </div>
      </div>
      <div className="flex gap-10 mt-5 justify-between">
      <div className="flex flex-col w-3/12 ">
          <label htmlFor="" className="font-medium mb-2">
            Tempat Meninggal
          </label>
          <input
            type=""
            className="w-full placeholder:text-mydark placeholder:font-serif placeholder:text-lg border border-gray-300 py-2 px-3 rounded-md focus:outline-none"
            placeholder=""
            name=""
          />
        </div>
        <div className={` flex flex-col w-6/12 ps-5`}>
          <label htmlFor="" className="font-medium mb-2">
            Penyebab Meninggal
          </label>
          <input
            className="block w-1/2  placeholder:text-mydark placeholder:font-serif placeholder:text-lg border border-gray-300 py-2 px-3 rounded-md focus:outline-none"
            id="file_input"
            type="text"
          />
        </div>
      </div>
      <div className="flex gap-10 mt-5 justify-between">

        <div className={` flex flex-col w-6/12`}>
          <label htmlFor="" className="font-medium mb-2">
            Tanggal Pemakaman
          </label>
          <input
            className="block w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
            id="file_input"
            type="date"
          />
        </div>
      </div>
    </div>
  );
}
