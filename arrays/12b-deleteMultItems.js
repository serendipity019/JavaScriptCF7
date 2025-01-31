const arr = [2, 1, 4, 2, 5, 2];

//We run from back because in diferent case will not read items when make delete 
const deleteBackwards = (arr, val) => {
    if (!arr) return;

    let i = arr.length - 1; 
    
    while (i) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
        i--;
    } 

    if (arr[0] === val) {
        arr.splice(0, 1);
    }
}

deleteBackwards(arr, 2);
console.log(arr);

