function moveZeros(arr) {
    let zeroCount = arr.filter(el => el === 0);
    let newArr = arr.filter(el => el !== 0);
    
    zeroCount.forEach(element => {
        newArr.push(element)
    });

    return newArr;
}


//moveZeros([1,2,0,1,0,1,0,3,0,1]);
//moveZeros([9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]);

//moveZeros([ 6, '1', {}, null, true, 3, false, '5', 8, false, +0, '8', 8, null, [], 6, false, '1', '2', 9, +0 ])
