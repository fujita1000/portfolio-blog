import Link from 'next/link';

const Pagination = ({ pages, current_page = 1 }:any) => {
  return (
    <div className='my-14'>
      {pages.map((page: any) => (
        <Link href={`/page/${page}`} key={page}>
          <a
            className={`text-white border bg-main px-4 py-2 hover:bg-btext hover:text-wtext ${
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
