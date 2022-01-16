import { useLocation } from "react-router-dom";

const { useEffect, useState } = require("react");


/**
 * get a query param from the url
 * @param {String} paramName - the name of the url query param
 * @param {Function} callback - a callback that contains what to do after the query param has been retrieved
 * 
 */
const useSearchParam = (paramName, callback) => {

    const [param, setParam] = useState()

    const location = useLocation()

    useEffect(() => {        
        const query = new URLSearchParams(location.search);
        const param = query.get(paramName)
        setParam(param)
        callback && callback(param)
    }, [])


    return param
}

export default useSearchParam
