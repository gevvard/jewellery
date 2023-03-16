import React, {useEffect, useState} from 'react';
import Gender from "../gender/gender";
import Categories from "../categories/categories";
import css from "./shop.module.scss"
import SubCategoris from "../subCategoris/subCategoris";
import Product from "../product/product";
import {BsSearch} from "@react-icons/all-files/bs/BsSearch";
import AddProduct from "../addProduct/addProduct";
import Filters from "../filters/filters";
import {FiFilter} from "@react-icons/all-files/fi/FiFilter";
import {FaAngleDoubleRight} from "@react-icons/all-files/fa/FaAngleDoubleRight";
import {FaAngleDoubleLeft} from "@react-icons/all-files/fa/FaAngleDoubleLeft";

const Shop = () => {
  const[rangeValues,setRangeValues] = useState([0,5000])
  const [search,setSearch] =useState("")
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isFilterOpened, openFilter] = useState(false)
console.log('page: ', page)
  return (
    <div className={css.container} >
      <button className={css.filterBtn} onClick={() => openFilter(!isFilterOpened)}>
        <FiFilter></FiFilter>
        {isFilterOpened ?
          <FaAngleDoubleLeft></FaAngleDoubleLeft>
          :
          <FaAngleDoubleRight></FaAngleDoubleRight>
        }
      </button>
      {isFilterOpened ? <Filters
        openFilter={openFilter}
        isFilterOpened={isFilterOpened}
        rangeValues={rangeValues}
        setRangeValues={setRangeValues}
      /> : ""}
    <div className={css.shopWrapper}>
     <div className={css.searchcontainer}>
       <input type="search"
          placeholder="search"
          className={css.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
       />
       <div className={css.icon} >
         <BsSearch></BsSearch>
       </div>
     </div>
      <div className={css.categories}>
        <div className={css.gender}>
          <Gender />
        </div>
        <div>
          <Categories
            withplus="true"
          />
        </div>
      </div>
      <div className={css.subcategories} >
        <SubCategoris
          withplus="true"
        />
      </div>
      <div  >
        <AddProduct
        setPage={setPage}
        />
        <Product
          limit={limit}
          setLimit={setLimit}
          setPage={setPage}
          page={page}
          search={search}
          rangeValues={rangeValues}
        />
      </div>
      </div>
    </div>
  );
};

export default Shop;