import React from "react";
import SHOP_DATA from "./Shop.data";
import CollectionPreview from "../../components/Collection-Preview/Collection-Preview.component"

class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return(
            <div>
                {collections.map(
                    ({id, ...others})=> <CollectionPreview key={id} {...others}/>
                )}
            </div>
        )
    }

}

export default ShopPage;