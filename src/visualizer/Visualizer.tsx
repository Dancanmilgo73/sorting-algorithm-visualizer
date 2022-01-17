import React, { useState, useEffect } from "react";
import { getBubbleSortAnimations } from "../SortingHelpers/bubbleSort";
import { getHeapSortAnimations } from "../SortingHelpers/heapSort";
import { getMergeSortAnimations } from "../SortingHelpers/mergeSort";
import { getSorted } from "../SortingHelpers/quickSort";
import "./Visualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS: number = 10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS: number = 300;

// This is the main color of the array bars.
const PRIMARY_COLOR: string = "#1769aa";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR: string = "#ff3d00";

const Visualizer: React.FC = () => {
	const [array, setArray] = useState<number[]>([]);
	const resetArray = (): void => {
		const array = [];
		for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
			array.push(randomIntFromInterval(5, 95));
		}
		setArray(array);
	};
	useEffect(() => {
		resetArray();
	}, []);
	// Function to visualize mergersort
	const mergeSort = (array: number[]): void => {
		const animations = getMergeSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName(
				"array-bar"
			) as HTMLCollectionOf<HTMLElement>;
			// The first second time will be true for line 37
			// The third time will be to overwrite the value in the array bar, putting it in it's sorted position
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				// The first time we change the color to secondary
				// the second time we bring back the primary color
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * ANIMATION_SPEED_MS);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.height = `${newHeight}vh`;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	};
	// Function to visualize quicksort
	const quickSort = (array: number[]): void => {
		const animations = getSorted(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName(
				"array-bar"
			) as HTMLCollectionOf<HTMLElement>;
			// The first second time will be true for line 37
			// The third time will be to overwrite the value in the array bar, putting it in it's sorted position
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				// The first time we change the color to secondary
				// the second time we bring back the primary color
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * ANIMATION_SPEED_MS);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;

					barOneStyle.height = `${newHeight}vh`;
					barTwoStyle.height = `${newHeight2}vh`;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	};
	// Function to visualize bubblesort
	const bubbleSort = (array: number[]): void => {
		const animations = getBubbleSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName(
				"array-bar"
			) as HTMLCollectionOf<HTMLElement>;
			// The first second time will be true for line 37
			// The third time will be to overwrite the value in the array bar, putting it in it's sorted position
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				// The first time we change the color to secondary
				// the second time we bring back the primary color
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * ANIMATION_SPEED_MS);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;

					barOneStyle.height = `${newHeight}vh`;
					barTwoStyle.height = `${newHeight2}vh`;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	};
	// Function to visualize heapSort
	const heapSort = (array: number[]): void => {
		const animations = getHeapSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName(
				"array-bar"
			) as HTMLCollectionOf<HTMLElement>;
			// The first second time will be true for line 37
			// The third time will be to overwrite the value in the array bar, putting it in it's sorted position
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				// The first time we change the color to secondary
				// the second time we bring back the primary color
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * ANIMATION_SPEED_MS);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;

					barOneStyle.height = `${newHeight}vh`;
					barTwoStyle.height = `${newHeight2}vh`;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	};
	return (
		<div className='container'>
			<div className='array-container'>
				{array.map((value, idx) => (
					<div
						className='array-bar'
						key={idx}
						style={{
							backgroundColor: PRIMARY_COLOR,
							height: `${value}vh`,
						}}></div>
				))}
			</div>
			<div className='button-container'>
				<button onClick={() => resetArray()}>NEW ARRAY</button>
				<button onClick={() => mergeSort(array)}>MERGE SORT</button>
				<button onClick={() => quickSort(array)}>Quick Sort</button>
				<button onClick={() => heapSort(array)}>Heap Sort</button>
				<button onClick={() => bubbleSort(array)}>Bubble Sort</button>
			</div>
		</div>
	);
};

export default Visualizer;
function randomIntFromInterval(min: number, max: number): number {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}
