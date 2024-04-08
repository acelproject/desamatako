export default function DetailSuratJualBeliView(params: { data: any }) {
  const { data } = params;
  return (
    <>
      <div className="border border-slate-300 rounded-sm">
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">Nama Lengkap</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data.data?.nama}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-white">
            <div className="w-[30%]  ps-3 font-semibold py-2">NIK</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data.data?.nik}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">Jenis Surat</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data.data?.jenisSurat}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">No Whatshap</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{data.data?.noWa}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-white">
            <div className="w-[30%]  ps-3 font-semibold py-2">Jenis Usaha</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{``}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">Alamat</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{``}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-white">
            <div className="w-[30%]  ps-3 font-semibold py-2">KTP</div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{``}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-slate-200">
            <div className="w-[30%]  ps-3 font-semibold py-2">
              Dokumen Hibah
            </div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{``}</div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex text-sm bg-white">
            <div className="w-[30%]  ps-3 font-semibold py-2">
              Blangko Pajak
            </div>
            <div className="w-[5%] text-center py-2">:</div>
            <div className="w-[65%]  ps-3 py-2">{``}</div>
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
            <div className="w-[65%]  ps-3 py-2">{``}</div>
          </div>
        </div>
      </div>
    </>
  );
}
