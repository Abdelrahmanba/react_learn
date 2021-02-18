import React from "react";
import {selectCat} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/Collection-item/Collection-item.component";
import {connect} from "react-redux";
import "./category.styles.scss"
const CategoryPage = ({collection: {items, title}}) => (
    <div className="category-page">
        <h2>{title}</h2>
        <div className="items">
            {items.map(
                item => <CollectionItem key={item.id} item={item}/>
            )}
        </div>
    </div>

)


const mapStateToProps = (state, {match}) => ({
    collection: selectCat(match.params.catId)(state)
})
export default connect(mapStateToProps)(CategoryPage);