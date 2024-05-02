export const addCart=(product)=>{

    return {
        type:"ADDCART",
        playload:product
    }
}

export const delCart=(product)=>{
    return {
        type:"DELITEM",
        playload:product 
    }
}