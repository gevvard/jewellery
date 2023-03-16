import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {addCategoriesThunke, getCategoriesThunk} from "../../redux/action/categorisAction";
import css from "./categories.module.scss"
import Modal from "../../modal/modal";

import {useQuery} from "../../hook/useQuery";
import {FaFemale} from "@react-icons/all-files/fa/FaFemale";
import {BiImageAdd} from "@react-icons/all-files/bi/BiImageAdd";
import {queries} from "@testing-library/react";
import Gender from "../gender/gender";
import {IoMdClose} from "@react-icons/all-files/io/IoMdClose";
import Uploading from "../../ui/uploading/uploading";


const Categories = ({withplus}) => {

  const categoryQuery = +useQuery().get("category")
  const [images, setImages] = React.useState([])
  const [openCategories, setOpenCategories] = useState(false)
  const [gender, setGender] = useState(1)
  const [categoryName, setCategoryName] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)
  const genderQuery = +searchParams.get('gender')
  const [error,setError] = useState(false)


  const changeCategories = (id) => {

    setSearchParams({
      gender: searchParams.get('gender') || gender, category: id
    })
  }

  useEffect(() => {
    if(!categoryQuery && categories.length) {
      const defaultCategory = categories.find(el => el.genderId == gender);
      changeCategories(defaultCategory?.id);
    }
  }, [categories]);
  const addCategory = () => {
 if(categoryName.length>0 && genderQuery>0 && images.length>0){
   dispatch(addCategoriesThunke({
     name: categoryName, image: '/' + images[0].file.name, genderId: genderQuery
   })).then(_ => dispatch(getCategoriesThunk())).then(_=> {
     setOpenCategories(false)
     setImages([])
     setCategoryName("")
   })

 }else{
   setError(true)
 }
  }



  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [])


  return (<div className={css.container}>
    {categories.map(({id, name, image, genderId}) => {
      // if (!genderQuery) {
      //   return <div key={id}
      //             className={css.category}
      //             onClick={() => {
      //               changeCategories(id)
      //             }}
      //   >
      //     <img src={'/images/category-images/' + image}
      //          className={css.img}
      //     />
      //     <h1>{name}</h1>
      //   </div>
      // }
      return genderId === genderQuery   && <div key={id}
                                              className={`${id === categoryQuery ? css.active : ''} ${css.category}`}
                                              onClick={() => {
                                                changeCategories(id)
                                              }}
      >
        <img src={'/images/category-images/' + image}/>
        <h1>{name}</h1>

      </div>


    })}
    {withplus ? <button type="button"
                        onClick={() => setOpenCategories(true)}
                        className={css.addbtn}
    >
      +
    </button> : ""}
    {openCategories ? <Modal
      classNames={"right"}
    >
      <div className={css.categoriContainer}>
        <div className={css.titleContainer}>
          <h1>Add category</h1>
          <button className={css.btnClose}
                  onClick={() => setOpenCategories(false)}
          >
            <IoMdClose>
            </IoMdClose>
          </button>
        </div>
        <div className={css.buttons}>
          <Gender classes={'horizontal'}/>
        </div>
        <div className={css.modalConatiner}>
          <input type="text" placeholder="Category" className={`${error && !categoryName?css['error']:""}`}
                 onChange={(e) => setCategoryName(e.target.value)}
          />
          <div className={css.uploadingContainer}>
            <Uploading images={images} setImages={setImages}
                       classname={css.upload}><BiImageAdd></BiImageAdd></Uploading>

          </div>
          <button
            className={css.addButton}
            onClick={() => {
              addCategory()
            }
            }
          >Add
          </button>
        </div>
      </div>
    </Modal> : ""}
  </div>);
};

export default Categories;