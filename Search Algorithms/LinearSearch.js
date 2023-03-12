let log = console.log

// this function will return index of target item
function search(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item){
            return i
        }
        
    }
    return -1
}

log(search([100, 200, 483, 892437, 44], 1000)) // -1 (not found)