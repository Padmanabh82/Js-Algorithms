function Sort(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            let temp = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > temp) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = temp;
        }
    }
    return array;
}

console.log(Sort([8, 4, 5, 3, 0, 8, 5, 4, 2, 6, 10, 3, 1000]));
/*[
  0,  2,    3, 3, 4,
  4,  5,    5, 6, 8,
  8, 10, 1000
]*/