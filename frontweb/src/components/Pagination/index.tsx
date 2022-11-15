/* import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import './styles.css';


const Pagination = () => {
  return (
    <div className="pagination-container">
      <ArrowIcon className='arrow-inactive arrow-previous' />
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">...</div>
      <div className="pagination-item">5</div>
      <ArrowIcon className='arrow-active arrow-next' />
    </div>
  );
};

export default Pagination;
 */

import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';


import './styles.css';

type Props = {

  pageCount : number;
  range: number;
  onChange?: (pageNumber: number ) => void;
  forcePage?: number,
}


const Pagination = ({pageCount, range, onChange, forcePage}  : Props ) => {
  return (

    <>

    <ReactPaginate
    forcePage={forcePage}
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName= "pagination-container"
      pageLinkClassName="pagination-item "
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"

      previousLabel={<div className= "pagination-arrow-container"><ArrowIcon /></div>}
      nextLabel={<div className= "pagination-arrow-container"><ArrowIcon /></div>}

      onPageChange={(items) => (onChange) ?  onChange(items.selected) : {} }


    />

    </>
   
  );
};

export default Pagination;
