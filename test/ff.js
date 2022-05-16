function ff(arr,str) {
    arr.map((obj) => obj.continent = str)
   return arr
}/**
 racet native application
 **/
console.log(ff([{ city: 'Jeddah', country: 'Saudi arabia' }, { city: 'Dubai', country: 'UAE' }], 'Asia'))
