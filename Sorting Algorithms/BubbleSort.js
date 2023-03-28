let log = console.log

function Sort(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) {
            array[i] = array.splice(i + 1, 1, array[i])[0]
            Sort(array)
        }
    }

    return array
}

log(Sort([8, 4, 5, 3, 0, 8, 5, 4, 2, 6, 10, 3, 1000]))
/*[
  0,  2,    3, 3, 4,
  4,  5,    5, 6, 8,
  8, 10, 1000
]*/