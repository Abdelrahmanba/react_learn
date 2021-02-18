import React from "react";
import CollectionOverview from "../../components/CollectionOverView/CollectionOverview";
import {Route} from "react-router-dom";
import CategoryPage from "../CatagoryPage/CatagoryPage.component";

const ShopPage = ({match}) => (

    <div>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:catId`} component={CategoryPage} />

    </div>
)


export default ShopPage;