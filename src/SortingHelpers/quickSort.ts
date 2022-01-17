export const getSorted = (array: number[]): number[][] => {
	const animations: number[][] = [];

	quickSort(array, 0, array.length - 1, animations);
	return animations;
};

const quickSort = (
	array: number[],
	left: number,
	right: number,
	animations: number[][]
): void => {
	if (left < right) {
		// pi is the pivot index
		let pi = partitionHelper(array, left, right, animations);
		quickSort(array, left, pi - 1, animations);
		quickSort(array, pi + 1, right, animations);
		// return array;
	}
};

const partitionHelper = (
	array: number[],
	left: number,
	right: number,
	animations: number[][]
): number => {
	let pivot = array[right];
	// i will help us in tracking the previous small element
	let j = left;
	let i = j - 1;
	while (j < right) {
		if (array[j] < pivot) {
			i++;
			animations.push([i, j]);
			animations.push([i, j]);
			animations.push([i, array[j], j, array[i]]);
			swapHelper(array, i, j, animations);

			// left++;
		}
		j++;
	}
	animations.push([i + 1, right]);
	animations.push([i + 1, right]);
	animations.push([i + 1, array[right], right, array[i + 1]]);
	swapHelper(array, i + 1, right, animations);
	return i + 1;
};

const swapHelper = (
	array: number[],
	left: number,
	right: number,
	animations: number[][]
) => {
	let temp = array[left];
	array[left] = array[right];
	array[right] = temp;
	// animations.push([left, right]);
	// animations.push([left, right]);
	// animations.push([left, array[right], right, temp]);
};
