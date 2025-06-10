import React, { useState } from "react";

const Pagination = ({ totalPosts, postsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-center items-center gap-2 my-4">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-transparent hover:text-white duration-300 cursor-pointer text-neutral-500"
      >
        <i className="ri-arrow-left-line"></i>Prev
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => goToPage(num)}
          className={`px-3 py-1 rounded cursor-pointer ${
            currentPage === num
              ? "bg-zinc-800 text-white"
              : "bg-transparent hover:bg-zinc-900 duration-300"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-transparent hover:text-white duration-300 cursor-pointer text-neutral-500"
      >
        Next<i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
};

export default Pagination;
