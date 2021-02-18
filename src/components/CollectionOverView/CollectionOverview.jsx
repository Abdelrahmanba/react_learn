import React from "react";
import CollectionPreview from "../Collection-Preview/Collection-Preview.component";
import {selectCollections, selectCollectionsAsArray} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

const CollectionOverview = ({collections}) =>(
    <div className="collection-overview">
        {collections.map(
            ({id, ...others}) => <CollectionPreview key={id} {...others}/>
        )}
    </div>
)
const mapsStateToProps = (state) => ({
    collections: selectCollectionsAsArray(state)
})

export default connect(mapsStateToProps)(CollectionOverview);