import React from "react";

const Pagination = ({
  page,
  totalPage,
  handlePrevPage,
handleNextPage,
}: 
{
  page: number;
  totalPage: number;
  handlePrevPage: any;
  handleNextPage: any;
}) => {
  return (
    <div className="mt-4 flex justify-between gap-3 mx-10">
      <div className="text-slate-400 italic text-sm flex gap-x-5">
        <div>Page</div> <div>{`${page}`}</div> <div>of</div> <div>{`${totalPage}`}</div>
      </div>
      <div className="flex gap-x-3">
        <button className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer" disabled={page === 1} onClick={handlePrevPage}>
          Previous
        </button>
        <div className=" hover:bg-primary bg-primary text-white hover:text-white px-2 flex justify-center items-center rounded-sm cursor-pointer">
          1
        </div>
        <button className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer" disabled={page === totalPage} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
