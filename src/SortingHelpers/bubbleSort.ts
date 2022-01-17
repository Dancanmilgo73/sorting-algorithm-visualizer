export const getBubbleSortAnimations = (array: number[]): number[][] => {
	if (array.length <= 1) return [array];
	const animations: number[][] = [];
	bubbleSort(array, animations);
	return animations;
};

const bubbleSort = (array: number[], animations: number[][]): void => {
	for (let i = array.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			animations.push([j, j + 1]);
			animations.push([j, j + 1]);

			if (array[j] > array[j + 1]) {
				animations.push([j, array[j + 1], j + 1, array[j]]);
				doSwap(array, j, j + 1);
			} else {
				animations.push([j, array[j], j + 1, array[j + 1]]);
			}
		}
	}
};

const doSwap = (array: number[], left: number, right: number): void => {
	let temp = array[left];
	array[left] = array[right];
	array[right] = temp;
};
