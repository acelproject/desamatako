import React from "react";


const Pagination = () => {
  return (
    <div className="mt-4 flex justify-end gap-3">
      <div className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer">
        Previous
      </div>
      <div className=" hover:bg-primary bg-primary text-white hover:text-white px-2 flex justify-center items-center rounded-sm cursor-pointer">
        1
      </div>
      <div className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer">
        Next
      </div>
    </div>
  );
};

export default Pagination;
