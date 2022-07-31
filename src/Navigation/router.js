import { Route, Routes } from "react-router";
import Category from "../component/category";
import CategoryDetails from "../component/CategoryDetails";

const RouterData = () => {
    return(
        <Routes>
            <Route exact path="/category" element={<Category/>}></Route>
            <Route exact path="/category-details/:id" element={<CategoryDetails/>}></Route>
        </Routes>
    )
}

export default RouterData;