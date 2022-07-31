import axios from "axios"

export const fethcCategory = async() => {
    return await axios.get('http://localhost:3000/data').then((res)=>{
        if(res.status === 200 && res.data){
            return res.data;
        }
    })
}

export const setActiveCatgeory = async(category) => {
    category.isActive = !category.isActive;
    return await axios.get('http://localhost:3000/data').then((res)=>{
        if(res.status === 200 && res.data){
            return res.data;
        }
    })
}