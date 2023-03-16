import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addSubCategoriesThunk, getSubCategoriesThunk} from "../../redux/action/subCategorisAction";
import Modal from "../../modal/modal";
import css from "./subCategories.module.scss"
import {useQuery} from "../../hook/useQuery";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import categories from "../categories/categories";
import {IoMdClose} from "@react-icons/all-files/io/IoMdClose";


const SubCategoris = ({withplus}) => {
  const subCategoryQuery = +useQuery().get("subCategory")
  const [searchParams, setSearchParams] = useSearchParams()
  const genderQuery = +searchParams.get('gender')
  const categoryQuery = +searchParams.get('category')
  const [gender, setGender] = useState(1)
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  const {subCategories} = useSelector(state => state.subCategories)
  const [openSubCategories, setOpenSubCategories] = useState(false)
  const [subCategory, setSubCategory] = useState("")
  const [error,setError] = useState(false)



  const changeSubCategoris = (id) => {
    // navigate(`${pathname}?subcategoryId=${subcategoryId}`)
    // navigate(`${pathname}${categoryQuery?`?categoryId=${categoryQuery}`:""}${categoryQuery?"&":"?"} & subcategoryId=${subcategoryId}`)

    setSearchParams({
      gender: searchParams.get('gender'),
      category: searchParams.get('category'),
      subCategory: id
    })
  }

  useEffect(() => {
    dispatch(getSubCategoriesThunk())
  }, [])

  return (
    <div className={css.container}>
      <div className={css.sectioncontainer}>
        <div className={css.subCategoriy}>
          {
            subCategories.map(({name, id, categoryId, parentId}) => {

              return (categoryId === categoryQuery ) && <div
                key={id}
                className={`${subCategoryQuery === id ? css.active : ""} ${css.subCategoriyDiv}`}
                onClick={() => {
                  changeSubCategoris(id)
                }}
              >
                {name}
              </div>
            })
          }
        </div>
        {
          withplus ? <button
            className={css.subCatBtn}
            onClick={() => {
              setOpenSubCategories(true)
            }}
            withplus="true"
          >+
          </button> : ""
        }
        {
          openSubCategories ?
            <Modal classNames={""}>
              <div className={css.subCategoriesContainer}>

                <div className={css.subCategoriTitle}>
                  <h1>Add subcategory</h1>
                  <button
                    className={css.closeBtn}
                    onClick={() => {
                      setOpenSubCategories(false)
                    }}
                  >
                    <IoMdClose></IoMdClose>
                  </button>
                </div>
                <input
                  placeholder="Subcategory"
                  type="text"
                  className={`${error && !subCategory ?css['error']:""}`}
                  onChange={(e) => setSubCategory(e.target.value)}

                />
                <div>
                  <button className={css.addBtn}
                          onClick={() => {
                            if (subCategory.length > 0) {
                              dispatch(addSubCategoriesThunk({
                                name: subCategory,
                                genderId: genderQuery,
                                categoryId: categoryQuery
                              })).then(_ => dispatch(getSubCategoriesThunk())).then(_=>{
                                setOpenSubCategories(false)
                                setSubCategory("")
                              })
                            }else{
                              setError(true)
                            }

                          }}
                  >Add
                  </button>
                </div>
              </div>
            </Modal> : ""
        }
      </div>
    </div>
  );
};

export default SubCategoris;