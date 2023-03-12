let log = console.log;

// function will return index of target item
function search(array, item) {
    // if length is even
    if (array[array.length / 2]) {
        let middleIndex = Math.ceil((array.length - 1) / 2)
        if (item === array[middleIndex]) {
            return middleIndex;
        } else if (item > array[middleIndex]) {
            let modifiedArray = array.slice(middleIndex, array.length-1)
            search(modifiedArray, item);
        } else if (item < array[middleIndex]) {
            let modifiedArray = array.slice(0, middleIndex)
            search(modifiedArray, item);
        }
    } else {
        let middleIndex = (array.length -1) / 2
        if (item === array[middleIndex]) {
            return middleIndex;
        } else if (item > array[middleIndex]) {
            let modifiedArray = array.slice(middleIndex, array.length-1)
            search(modifiedArray, item);
        } else if (item < array[middleIndex]) {
            let modifiedArray = array.slice(0, middleIndex)
            search(modifiedArray, item);
        }
    }

    return -1;
}

log(search([-100, -50, 0, 40, 460, 600, 700], 50)); // -1 (not found)
log(search([-100, -50, 0, 40, 460, 600, 700], 40)); // 3
log(search([-100, -50, 0, 40, 460, 600], 40)); // 3
