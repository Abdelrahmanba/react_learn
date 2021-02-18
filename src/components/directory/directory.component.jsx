import React from "react";
import MenuItem from "../menu-item/menu-item.component"
import "./directory.styles.scss"
import {connect} from "react-redux";
import {selectSections} from "../../redux/directory/directory.selectors";

const Directory = ({sections})=> (
            <div className="directory-menu">
                {sections.map(({ id,...others}) => (
                    <MenuItem key={id} {...others}/>
                ))}
            </div>
        )
const mapStateToProps = (state) => ({
    sections:selectSections(state)
})

export default connect(mapStateToProps)(Directory);