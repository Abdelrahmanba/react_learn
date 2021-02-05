import React from "react";
import "./collection-preview-styles.scss"
import CollectionItem from "../Collection-item/Collection-item.component";

const CollectionPreview = ({title,items}) =>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items
                    .filter((item,index)=> index < 4 )
                    .map(({id, ...others}) => <CollectionItem key={id} {...others}/>)
                }

            </div>

        </div>
    )
}
export default CollectionPreview;