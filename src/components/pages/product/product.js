import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../redux/action/productAction";
import css from "./product.module.scss"
import {useQuery} from "../../hook/useQuery";
import LightBoxComponent from "../../lightbox";

const Product = ({
   rangeValues,
   search,
   page,
   setPage,
   limit,
   setLimit
}) => {
  const dispatch = useDispatch();

  const lastElement = useRef();
  const observer = useRef();

  const subCategoryQuery = +useQuery().get("subCategory");
  const categoryQuery = +useQuery().get("category");
  const genderQuery = +useQuery().get("gender");

  const {product, pending} = useSelector(state => state.product);

  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

console.log('pending: ', pending)
  useEffect(() => {
    if (pending) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    let callback = (entries) => {
      if (entries[0].isIntersecting && page <= 10) {
        setPage(page + 1);
        console.log("harcum:", page);
      }
    }
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [lastElement, pending]);

  console.log("rangeValues:",rangeValues)
  console.log(page, 'pageeee')
  useEffect(() => {
      dispatch(getProductThunk( limit ,page));

  }, [page])

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  useEffect(() => {
    if(product.length){
      setSelectedImages(product.filter(({id, image, price, name, parentId, imageId, categoryId}) => {
        if ((rangeValues[0] <= price && rangeValues[1] >= price
            && imageId === subCategoryQuery && name.toLowerCase().includes(search.toLowerCase()))
          ||
          (!subCategoryQuery && categoryId === categoryQuery)
        ) {
          return image;
        }
      }).map(el => '/images/product-image/' + el.image));
    }

  }, [categoryQuery, genderQuery, subCategoryQuery, product]);

  return (
    <div className={css.productsContainer}>
      <div className={css.products}>
        {
          product.map(({id, image, price, name, parentId, imageId, categoryId}, index) => {
            if (!subCategoryQuery) {
               return categoryId === categoryQuery && rangeValues[0] <= price && rangeValues[1] >= price &&
                 name.toLowerCase().includes(search.toLowerCase())&&
                 <div key={Math.random()} className={css.product}>
                  <img src={'/images/product-image/' + image}
                       onClick={() => {
                         setOpen(true);
                         setPhotoIndex(index);
                       }}
                  />
                  <div className={css.price}>
                    <h5>{name}</h5>
                    <h5>{price} $</h5>
                  </div>
                </div>
            } else {
              return rangeValues[0] <= price && rangeValues[1] >= price
                && imageId === subCategoryQuery && name.toLowerCase().includes(search.toLowerCase()) &&
                < div key={Math.random()} className={css.product}>
                  <img src={'/images/product-image/' + image} onClick={() => {
                    setOpen(true);
                    setPhotoIndex(index)
                  }}/>
                  <div className={css.price}>
                    <h5>{name}</h5>
                    <h5>{price} $</h5>
                  </div>
                </div>
            }

          })
        }
      </div>
      {isOpen && <LightBoxComponent
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
          images={selectedImages}
          isOpen={isOpen}
          setOpen={setOpen}
          mainSrc={selectedImages[photoIndex]}
        />
      }
      {pending &&
        <div>Loading....</div>}
      <div ref={lastElement} style={{color: "red", bottom: '0',marginTop:500}}></div>
    </div>
  );
};

export default Product;