// Soal - 01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
	return arr.length === 0 ? 0 : arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Soal - 02
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) {
	if (arr.length === 0) {
		return 0;
	}
	if (arr[0] > avg) {
		return 1 + countAboveAvg(arr.slice(1), avg);
	}
	return countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// Soal - 03
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num, index = 0) {
	if (arr.length === 0) {
		return console.log("angka tidak di temukan");
	}
	if (num === arr[0]) {
		return console.log("angka ditemukan pada index " + index);
	}
	index + 1;
	return searchInArray(arr.splice(1), num, index + 1);
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);
