const removeFromArray = function(...args) {
    // take the first args as a variable
    let array = args[0]

    //filter the array from the arguments
    // store the filtered item into new array
    return array.filter(arr => !args.includes(arr))
}

module.exports = removeFromArray