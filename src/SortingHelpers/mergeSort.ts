// This algorithm is going to use two arrays, the original and it's duplicate
// The array is not broken down into smaller arrayss, rather, the indexes are going to be splitted and
//then used when referencing the original array
export const getMergeSortAnimations = (array: number[]): number[][] => {
	if (array.length <= 1) return [array];
	const animations: number[][] = [];
	const duplicate: number[] = array.slice();
	mergeSort(array, 0, array.length - 1, duplicate, animations);
	return animations;
};

const mergeSort = (
	array: number[],
	left: number,
	right: number,
	duplicate: number[],
	animations: number[][]
): void => {
	if (left === right) return;
	const mid = Math.floor((left + right) / 2);
	mergeSort(duplicate, left, mid, array, animations);
	mergeSort(duplicate, mid + 1, right, array, animations);
	mergeHelper(array, left, mid, right, duplicate, animations);
};

const mergeHelper = (
	array: number[],
	left: number,
	mid: number,
	right: number,
	duplicate: number[],
	animations: number[][]
): void => {
	let i = left;
	let k = left;
	let j = mid + 1;
	while (i <= mid && j <= right) {
		// first push the indexes we are comparing twice
		// The first one is for changing the background color to a secondary color
		// The second one is to bring back the primary color
		// The third time we push an index and the value of the array bar
		// The index will start from the beginning, and the value is the array bar that
		// occupies the index when sorted
		// The above also happens in line 56 and 62
		animations.push([i, j]);
		animations.push([i, j]);
		if (duplicate[i] <= duplicate[j]) {
			animations.push([k, duplicate[i]]);
			array[k++] = duplicate[i++];
		} else {
			animations.push([k, duplicate[j]]);
			array[k++] = duplicate[j++];
		}
	}
	while (i <= mid) {
		animations.push([i, i]);
		animations.push([i, i]);
		animations.push([k, duplicate[i]]);
		array[k++] = duplicate[i++];
	}
	while (j <= right) {
		animations.push([j, j]);
		animations.push([j, j]);
		animations.push([k, duplicate[j]]);
		array[k++] = duplicate[j++];
	}
};
