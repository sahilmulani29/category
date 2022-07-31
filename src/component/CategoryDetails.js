import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setActiveCatgeory } from "../utils/utils";

const CategoryDetails = () => {

    const params = useParams();
    const [category , setCategories] = useState({});
    const dispatch = useDispatch();
    const MainCategoryList = useSelector(state=> state.catgeoryState?.category)

    useEffect(()=>{
        if(params?.id){
            const temp = MainCategoryList.filter((cat) => {
                return cat.id === parseInt(params.id)
            })
            if(temp && temp.length > 0){
                setCategories(temp[0]);
            }
        }
    },[MainCategoryList])

    const onCategoryActive = () => {
        (async()=> {
            const catData = setActiveCatgeory(category);
            dispatch({type:"CHANGE_CATEGORY_STATUS" , data:catData});
        })()
    }

    return (
        <React.Fragment>
            <div className="categoryDetailsContiner">
                <div className="categoryName">
                    <h1>{category.pageTitle}</h1>
                </div>
                <div className="categoryDetails">
                    <p>{category.content}</p>
                </div>
                <div className="categoryActive">
                    <lable>Active</lable>
                    <input type="checkbox" checked={category.isActive} onChange={()=>onCategoryActive()}></input>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CategoryDetails;