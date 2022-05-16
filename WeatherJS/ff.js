function ff(arr,str) {
    arr.map((obj) => (obj.continent = str));
    console.log(arr)
}

ff([{ city: 'Jeddah', country: 'Saudi arabia' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')