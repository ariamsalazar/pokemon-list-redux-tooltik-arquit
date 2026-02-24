interface ButtonsPaginationProps {
  page: number;
  onPageChange: (page: number) => void;
}

export const ButtonsPagination = ({
  page,
  onPageChange,
}: ButtonsPaginationProps) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
      >
        Prev
      </button>
      <span className="px-2 py-1 font-medium">Pag - {page}</span>
      <button
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};
