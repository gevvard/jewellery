import React, {useState} from 'react';
import Modal from "../../modal/modal";
import Gender from "../gender/gender";
import Categories from "../categories/categories";
import SubCategoris from "../subCategoris/subCategoris";
import css from "./addProduct.module.scss"
// import Uploading from "../../uploading/uploading";
import {BiImageAdd} from "@react-icons/all-files/bi/BiImageAdd";
import {useDispatch, useSelector} from "react-redux";
import {addProductThunk, getProductThunk} from "../../redux/action/productAction";
import {useQuery} from "../../hook/useQuery";
import {IoMdClose} from "@react-icons/all-files/io/IoMdClose";
import Uploading from "../../ui/uploading/uploading";

const AddProduct = ({setPage}) => {
  const subCategoryQuery = +useQuery().get("subCategory");
  const categoryQuery = +useQuery().get("category");
  const dispatch = useDispatch();
  const [addProduct, setAddProduct] = useState(false);
  const [images, setImages] = React.useState([]);
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(false);
  const {product} = useSelector(state => state.product);
  const page = Math.floor(product?.length / 10);
  const productsOnCurrentPage = product?.length % 10;
  console.log('productsOnCurrentPage: ', productsOnCurrentPage)
  const handelOpen = () => {
    setAddProduct(true);
  }
  const handelClose = () => {
    setAddProduct(false);
    setError(false);
  }

  const onProductAdd = () => {
    if (price.length > 0 && code.length > 0 && images.length > 0 && subCategoryQuery > 0) {
      dispatch(addProductThunk({
        price: price,
        name: code,
        image: '/' + images[0].file.name,
        imageId: subCategoryQuery,
        categoryId: categoryQuery
      })).then(_ =>dispatch(getProductThunk(10,1))).then(_ => {
        setAddProduct(false)
        setImages([])
        setCode("")
        setPrice("")
        setError(false)
        setPage(1)
      })
    } else {
      console.log("error");
      setError(true)
    }
  }
  return (<div>
      <button
        className={css.addProduct}
        onClick={handelOpen}
      >Add product
      </button>
      {addProduct && <Modal classNames={"addProduct"}>
        <div className={css.container}>
          <div className={css.titleContainer}>
       <span>
          <h5>Add product</h5>
       </span>
            <span>
          <button
            onClick={handelClose}
          >
            <IoMdClose></IoMdClose>
        </button>
        </span>
          </div>
          <div className={css.hr}>
            <div className={css.addProdCont}>
              <div>
                <Gender/>
              </div>
              <div>
                <Categories
                  withplus={false}
                />
              </div>
            </div>
            <div>
              <SubCategoris
                withplus={false}
              />
            </div>
          </div>
          <div className={css.section}>
            <div className={css.uploadingContainer}>
              <Uploading images={images} setImages={setImages}/>
            </div>
            <div className={`${css.inputContainer} ${error && !code ? css['error'] : ''}`}>
              <h1>Merchant code</h1>
              <input
                type="text"
                onChange={(e) => {
                  setCode(e.target.value)
                }}
              />
            </div>
            <div className={`${css.inputContainer} ${error && !price ? css['error'] : ''}`}>
              <h1>Price</h1>
              <input
                type="number"
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
              />
            </div>
            {/*</div>*/}
          </div>
          <div>{error}</div>
          <button
            className={css.addbtn}
            onClick={onProductAdd}
          >
            Add
          </button>
        </div>
      </Modal>}
    </div>);
};

export default AddProduct;