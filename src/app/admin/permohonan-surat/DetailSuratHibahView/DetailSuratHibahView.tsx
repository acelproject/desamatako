export default function DetailSuratHibahView(props: { data: any }) {
  const { data } = props;
  return (
    <>
      <div className="border border-slate-300 rounded-sm">
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">Nama Lengkap</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data[0].nama}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-white">
            <div className="w-[30%]  ps-3 font-semibold py-2">NIK</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data[0].nik}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">Jenis Surat</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data[0].jenisSurat}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-white">
            <div className="w-[30%]  ps-3 font-semibold py-2">No.WA</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data[0].noWA}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">Alamat</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data[0].alamat}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-white">
            <div className="w-[30%]  ps-3 font-semibold py-2">KTP</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data[0].ktp}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">
              Dokumen Hibah
            </div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data[0].dokHibah}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-white">
            <div className="w-[30%]  ps-3 font-semibold py-2">
              Blangko Pajak
            </div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data[0].blangkoPajak}</div>
          </div>
        </div>
      </div>
      <h1 className="text-lg font-semibold text-black py-2 px-4 ">
        Pihak yang di hibahkan
      </h1>
      <div className="border border-slate-300 rounded-sm">
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">Pihak Hibah</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data[0].pihakHibah?.ktp}</div>
          </div>
        </div>
      </div>
    </>
  );
}
