function sumOfTripledEvens(array) {
    let evenArray = array.filter((num) => num % 2 === 0);
    // console.log(evenArray);

    let tripledArray = evenArray.map((num) => num * 3);
    // console.log(tripledArray);

    let summedArray = tripledArray.reduce( (total, currentItem) =>  total + currentItem );
    console.log(summedArray);
}
let arr = [1, 2, 3, 4, 5, 6];
sumOfTripledEvens(arr);