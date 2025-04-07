function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href
 }
//  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href


 export {getImgUrl};