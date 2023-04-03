let log = console.log

function Sort(array) {

    for (let i = 0; i < array.length; i++) {
        // Current Smallest Item
        let CSI = i
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[CSI]) {
                CSI = j
            }
        }

        let temp = array[CSI];
        array[CSI] = array[i];
        array[i] = temp;

    }


    return array
}

log(Sort([8, 4, 5, 3, 0, 8, 5, 4, 2, 6, 10, 3, 1000]))
/*[
  0,  2,    3, 3, 4,
  4,  5,    5, 6, 8,
  8, 10, 1000
]*/