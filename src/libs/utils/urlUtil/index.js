import { HTTP_URL } from 'libs/constants'
import URI from 'urijs'

/*const isSubDomain = function (url) {
  var regex = new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);

  return !!url.match(regex);
}*/

/**
 * 
 */
export const refreshWebpage = () => {
  window.location.href = HTTP_URL
}

export const getSubDomain = () => {

  const url = window.location.href

  const subDomain = new URI(url).subdomain()

  if (subDomain && subDomain.toLowerCase() === 'www') {
    return false
  }

  return subDomain
  /* //if (isSubDomain(url)) {
   let newUrl = url.replace('.com', '')
   newUrl = url.replace('.tech', '')
 
 
   //get subdomain from locationhref
   const urlStrings = newUrl.split('.')
 
   if (urlStrings.length >= 2) {
     const httpWorkspace = urlStrings[0]
     const httpStrings = httpWorkspace.split('/')
     console.log({ httpStrings })
     subDomain = httpStrings[2]
   }
   // }
 
   const processedSubDomain = replaceDash(subDomain);
 
 
   return processedSubDomain*/
}

const urlUtil = {
  refreshWebpage,
  getSubDomain
}

export default urlUtil


