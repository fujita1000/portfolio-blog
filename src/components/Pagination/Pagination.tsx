import Link from 'next/link';

const Pagination = ({ pages, current_page = 1 }:any) => {
  return (
    <div>
      {pages.map((page: any) => (
        <Link href={`/page/${page}`} key={page}>
          <a
            className={`px-4 py-2 border hover:bg-black hover:text-white ${
              current_page == page && 'bg-black text-white'
            }`}
          >
            {page}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
