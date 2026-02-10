 const findPizza = (data, searchFor, compareTo) => {

    switch(searchFor) {
        case "filter" :
            return compareTo ? data.filter((el) => el["category"]?.includes(compareTo)) : data
        case "boolean": 
            return compareTo && data.includes(compareTo)
        case "wish" :
        case "cart" :
             return compareTo && 
            data.filter( el => compareTo.includes(el.id))
        case "offered" :
             return data && data.filter((el) => el.discount)
        case "info" :
             return data ? data.filter((el) => el.id === compareTo)[0] : null
        default:
            throw new Error(`getPizza: unknown searchFor"${searchFor}"`)
    }
}
   export default findPizza