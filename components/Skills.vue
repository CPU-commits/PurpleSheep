<script lang="ts" setup>
withDefaults(
	defineProps<{
		direction?: 'right' | 'left'
		slides: Array<{
			src: string
			alt: string
		}>
	}>(),
	{ direction: 'left' },
)
</script>

<template>
	<section class="slider">
		<div
			class="slide-track"
			:class="{
				'slide-left': direction === 'left',
				'slide-right': direction === 'right',
			}"
		>
			<article v-for="slide in slides" :key="slide.alt" class="slide">
				<img
					:src="slide.src"
					:alt="slide.alt"
					height="80"
					width="200"
					:title="slide.alt"
				/>
			</article>
		</div>
	</section>
</template>

<style lang="scss" scoped>
$animationSpeed: 40s;

// Animation
@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-250px * 7));
	}
}
@keyframes scrollright {
	0% {
		transform: translateX(calc(-250px * 7));
	}
	100% {
		transform: translateX(0);
	}
}

img {
	object-fit: contain;
	filter: grayscale(1);
	opacity: 0.25;
	transition: all 0.3s;
}

img:hover {
	opacity: 1;
}

// Styling
.slider {
	height: 80px;
	margin: auto;
	overflow: hidden;
	position: relative;
	box-sizing: border-box;
	margin-bottom: 20px;

	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}

	.slide-left {
		animation: scroll $animationSpeed linear infinite;
	}

	.slide-right {
		animation: scrollright $animationSpeed linear infinite;
	}

	.slide-track {
		display: flex;
		width: calc(250px * 14);
	}

	.slide {
		height: 100px;
		width: 250px;
	}
}

// Media queries
@media (max-width: 767.98px) {
	$animationSpeed: 30s;

	.slider {
		.slide {
			width: 150px;
			height: 80px;
		}

		margin-bottom: 5px;
	}

	img {
		width: 100px;
		height: 50px;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-150px * 7));
		}
	}
	@keyframes scrollright {
		0% {
			transform: translateX(calc(-150px * 7));
		}
		100% {
			transform: translateX(0);
		}
	}
}
</style>
