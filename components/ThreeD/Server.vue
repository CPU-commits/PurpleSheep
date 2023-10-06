<template>
	<div class="server">
		<div class="base"></div>
		<div class="left-wall"></div>
		<div class="right-wall"></div>
		<div class="ceiling"></div>
	</div>
</template>

<style scoped>
.server {
	position: relative;
	width: 160px;
	height: 240px;
	transform-style: preserve-3d;
	transform: rotateX(270deg);
}

.base {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(14, 14, 16, 0.8);
	border-radius: 20px;
	transform: rotateX(90deg) translateZ(-150px);
	animation: move 5s infinite;
}

.base::before {
	position: absolute;
	content: '';
	border: 5px solid white;
	border-radius: 8px;
	width: 100%;
	height: 100%;
	top: -30px;
	left: -30px;
}

.ceiling {
	position: absolute;
	background-color: #07070e;
	width: 100%;
	height: 100%;
	transform: rotateX(90deg) translate(-80px, -90px);
	top: 10px;
	animation: float 5s infinite;
}

.ceiling:before {
	content: '';
	width: calc(100% / 4);
	height: calc(100% + 20%);
	background: #090a12;
	position: absolute;
	top: 0px;
	left: 160px;
	clip-path: polygon(0 0, 100% 18%, 100% 100%, 0 83%);
}

.ceiling:after {
	content: '';
	width: 125%;
	height: 20%;
	background: #07070e;
	position: absolute;
	bottom: -20%;
	left: 0px;
	clip-path: polygon(0% 0%, 81% 0%, 100% 100%, 19% 100%);
}

@keyframes float {
	0% {
		transform: rotateX(90deg) translate(-80px, -90px);
	}

	50% {
		transform: rotateX(90deg) translate(-90px, -100px);
	}

	to {
		transform: rotateX(90deg) translate(-80px, -90px);
	}
}

@keyframes move {
	0% {
		width: 100%;
		height: 90%;
	}

	50% {
		width: 100%;
		height: 100%;
	}

	100% {
		width: 100%;
		height: 90%;
	}
}
</style>
