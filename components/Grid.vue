<template>
	<div class="Grid">
		<div class="item1">
			<ThreeDServer />
		</div>
		<div class="item2">
			<ThreeDServer />
		</div>
		<div class="item3">
			<ThreeDServer />
		</div>
		<div class="item4">
			<ThreeDServer />
		</div>
		<div class="item5">
			<ThreeDServer />
		</div>
		<div class="Sheep">
			<img class="Sheep" src="/images/sheep.jpg" alt="Oveja" />
		</div>

		<div v-for="i in 900" :key="i" class="Grid__item">
			<div v-for="j in 4" :key="j" class="Grid__item--cell"></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.item1 {
	grid-column-start: 11;
	grid-column-end: 11;
	grid-row-start: 16;
	grid-row-end: span 1;
	position: absolute;
	z-index: 2;
	pointer-events: none;
}

.item2 {
	grid-column-start: 20;
	grid-column-end: 20;
	grid-row-start: 10;
	grid-row-end: span 1;
	position: absolute;
	z-index: 2;
	pointer-events: none;
}

.item3 {
	grid-column-start: 10;
	grid-column-end: 10;
	grid-row-start: 10;
	grid-row-end: span 1;
	position: absolute;
	z-index: 2;
	pointer-events: none;
}

.item4 {
	grid-column-start: 5;
	grid-column-end: 5;
	grid-row-start: 8;
	grid-row-end: span 1;
	position: absolute;
	z-index: 2;
	pointer-events: none;
}

.item5 {
	grid-column-start: 18;
	grid-column-end: 18;
	grid-row-start: 25;
	grid-row-end: span 1;
	position: absolute;
	z-index: 2;
	pointer-events: none;
}

.Sheep {
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 12;
	border-radius: 50px;
	grid-row-end: span 1;
	position: absolute;
	z-index: 2;
	pointer-events: none;
	width: 500px;
	object-fit: cover;
}

.Sheep::after {
	content: '';
	position: absolute;
	top: 70px;
	left: 290px;
	z-index: 8;
	background-color: black;
	width: 120px;
	height: 30px;
}

.Grid {
	max-width: 1500px;
	display: grid;
	border-right: 1px solid;
	border-top: 1px solid;
	grid-template-columns: repeat(30, 1fr);
	grid-template-rows: repeat(30, 1fr);
	position: absolute;
	top: 50%;
	left: 50%;
	box-sizing: border-box;
	will-change: transform;
	transform: translate(calc(-50% + 0px), calc(-50% + 0px)) skewX(-48deg)
		skewY(14deg) scaleX(2) scale(0.362890625) rotate(0deg) translateZ(0);
}

.Grid__item {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	width: 80px;
	height: 80px;
	position: relative;
	user-select: none;
	border-top: 0;
	border-right: 0;
}

.Grid__item::before {
	content: '';
	position: absolute;
	top: 0; /* Comienza desde el principio del elemento */
	left: 0; /* Se posiciona a la izquierda */
	height: 20%; /* Toma el 50% de la altura del elemento */
	width: 1px; /* Anchura del borde */
	background-color: white; /* Color del borde */
}

.Grid__item::after {
	content: '';
	position: absolute;
	top: 0; /* Comienza desde el principio del elemento */
	right: 0px; /* Se posiciona a la izquierda */
	width: 20%; /* Toma el 50% de la altura del elemento */
	height: 1px; /* Anchura del borde */
	background-color: white; /* Color del borde */
}

.Grid__item--cell {
	position: relative;
}

.Grid__item .Grid__item--cell:first-child::after {
	content: '';
	position: absolute;
	top: 0; /* Comienza desde el principio del elemento */
	left: 0; /* Se posiciona a la izquierda */
	width: 45%; /* Toma el 50% de la altura del elemento */
	height: 1px; /* Anchura del borde */
	background-color: white; /* Color del borde */
}

.Grid__item .Grid__item--cell:last-child::before {
	content: '';
	position: absolute;
	bottom: 0; /* Comienza desde el principio del elemento */
	right: -1px; /* Se posiciona a la izquierda */
	width: 1px; /* Toma el 50% de la altura del elemento */
	height: 40%; /* Anchura del borde */
	background-color: white; /* Color del borde */
}
</style>
