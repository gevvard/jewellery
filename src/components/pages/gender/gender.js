import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import css from "./gender.module.scss"
import {getGenderThunk} from "../../redux/action/genderAction";
import {useLocation, useSearchParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useQuery} from "../../hook/useQuery";
import {ImWoman} from "@react-icons/all-files/im/ImWoman";
import {ImMan} from "@react-icons/all-files/im/ImMan";


const Gender = ({classes}) => {
  const genderQuery = +(useQuery().get('gender'))
  const [searchParams, setSearchParams] = useSearchParams()
  const {pathname} =useLocation()
  const navigate=useNavigate()
  const{gender} = useSelector(state => state.gender)
  const dispatch = useDispatch()


  const changeGender = (id)=>{
// navigate(`${pathname}?genderId=${id}`)
    setSearchParams({
      gender: id
    })
  }

  useEffect(()=>{
    dispatch(getGenderThunk());
  },[]);

  return (
       <div className={`${css.genderContainer} ${css[classes]} `} >
         {
           gender.map(({id,icon})=>{
            return  <div key={id}
             onClick={()=>{
                       changeGender(id)

               }}
              className={`${id === genderQuery ? css['active'] : ''}`}
             >
              {id === 1 ?
                <ImWoman></ImWoman> :
                <ImMan></ImMan>
              }
             </div>
           })
         }
    </div>
  );
};

export default Gender;