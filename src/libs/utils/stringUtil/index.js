
/**
 * 
 * @param {replaces whitespace with '-'} str 
 */
export const replaceWhiteSpace = (str) =>{
    if(str){
    return str.replace(/\s+/g, '-')
    }else{
        return str
    }
}


/**
 * 
 * @param {replaces '-' with whitespace } str 
 */
export const replaceDash = (str) =>{
    if(str){
    return str.replace(/-/g, ' ')
    }else{
        return str
    }
}