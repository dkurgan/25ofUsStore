//Action creators

export const addToCart = (id) =>{
    return {
        type: "ITEM_SELECTED",
        id
    }
}

export const deleteFromCart = (id) =>{
    return {
        type: "ITEM_DELETE",
        id
    }
}