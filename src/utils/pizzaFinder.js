 const pizzaFinder = (data, searchFor, compareTo) => {

        if (searchFor === "filter") 
            return compareTo ? data.filter((el) => el["category"]?.includes(compareTo)) : data
        if (searchFor === "boolean") 
            return compareTo && data.includes(compareTo)
        if (searchFor === "fav" || searchFor === "bag") {
            return compareTo && 
            data.filter( el => compareTo.includes(el.id))
        }
        if (searchFor === "offered") {
            return data && data.filter((el) => el.offered.active)
        }
        if (searchFor === "info") {
            return data ? data.filter((el) => el.id === compareTo)[0] : null
        }
    } 
   export default pizzaFinder