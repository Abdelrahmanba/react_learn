import {createSelector} from "reselect";



export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    selectShop,
    (shop) => shop.collections
)
export const selectCollectionsAsArray = createSelector(
    selectCollections,
    collection => Object.keys(collection).map(key => collection[key])
    )

export const selectCat = collectionID =>
    createSelector([selectCollections],
            collections => collections[collectionID]
    )