export const getHeapSortAnimations = (array: number[]): number[][] => {
	const animations: number[][] = [];
	heapSort(array, animations);
	return animations;
};

const heapSort = (array: number[], animations: number[][]): void => {
	let limit = array.length;
	for (let i = Math.floor(limit / 2) - 1; i >= 0; i--) {
		heapify(array, limit, i, animations);
	}
	for (let i = limit - 1; i >= 0; i--) {
		animations.push([0, i]);
		animations.push([0, i]);
		animations.push([0, array[i], i, array[0]]);

		let temp = array[i];
		array[i] = array[0];
		array[0] = temp;
		heapify(array, i, 0, animations);
	}
};

const heapify = (
	array: number[],
	limit: number,
	i: number,
	animations: number[][]
): void => {
	let largest = i;
	let l = i * 2 + 1;
	let r = i * 2 + 2;
	if (l < limit && array[l] > array[largest]) {
		animations.push([l, largest]);
		animations.push([l, largest]);
		animations.push([l, array[largest], largest, array[l]]);

		largest = l;
	}
	if (r < limit && array[r] > array[largest]) {
		animations.push([r, largest]);
		animations.push([r, largest]);
		animations.push([r, array[largest], largest, array[r]]);

		largest = r;
	}
	if (largest !== i) {
		let temp = array[i];
		array[i] = array[largest];
		array[largest] = temp;
		heapify(array, limit, largest, animations);
	}
};
