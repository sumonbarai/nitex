/**
 * to check if the link is active
 * @param {string} route the route you want to check
 * @param {object} location location object from the useLocation
 * @return {boolean} true if the link is active and false otherwise
 */
export default (route, location) => {
    console.log(route)
    if(location?.pathname?.includes(route)){
        return true
    }
    return false
}