import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import style from "./style.css";

const Category = () => {

    const [category , setCategories] = useState([]);
    const [searchString , setSearchSring] = useState('');
    const [isActive , setActive] = useState(false);
    const MainCategoryList = useSelector(state=> state.catgeoryState?.category)
    const navigation = useNavigate();

    useEffect(()=>{
        setCategories(MainCategoryList);
    },[MainCategoryList])

    useEffect(()=>{
        if((MainCategoryList && MainCategoryList.length > 0)){
            const temp = MainCategoryList.filter((cat)=>{
                if(searchString?.length > 0 && isActive){
                    return cat.pageTitle.toLowerCase().includes(searchString.toLowerCase()) && cat.isActive;
                }else if(searchString?.length > 0 && !isActive){
                    return cat.pageTitle.toLowerCase().includes(searchString.toLowerCase())
                }else if((!searchString || searchString.length == 0) && isActive){
                    return cat.isActive;
                }else{
                    return cat;
                }
            })
            setCategories(temp);
        }
    },[searchString , isActive])

    const onSearch = (evt) => {
        setSearchSring(evt.target.value);
    }

    const onActive = (evt) => {
        setActive(!isActive)
    }

    const onCategorySelect = (category) => {
        navigation(`/category-details/${category.id}`)
    }

    return(
        <React.Fragment>
            <div className="container">
                <div className="searchBar">
                    <input placeholder="Search..." type="text" value={searchString} onChange={(evt)=>onSearch(evt)}></input>
                </div>
                <div className="activeBar"> 
                    <label>Active</label> 
                    <input type="checkbox" checked={isActive} onChange={()=>onActive()}></input>
                </div>
                <div className="categoryContainer">
                    {category && category.length > 0 ? 
                        category.map((cat)=>(
                            <div onClick={()=>onCategorySelect(cat)} className="item" key={cat.id}>{cat.pageTitle}</div>
                        )) 
                    : 
                    <div>No Category Found..</div>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Category;