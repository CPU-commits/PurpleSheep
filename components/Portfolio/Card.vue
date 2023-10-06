<script setup lang="ts">
// Types
import type { Work } from '~~/models/work.model'

defineProps<{
	work: Work
}>()
</script>

<template>
	<article class="PortfolioCard">
		<figure>
			<img v-if="work.img" :src="work.img" :alt="work.title" />
		</figure>
		<NuxtLink :to="work.link" target="_blank">
			<header class="PortfolioCard__header">
				<h4><i class="fa-solid fa-gear" /> {{ work.title }}</h4>
				<p>> {{ work.description }}</p>
				<footer>
					<Icon
						v-for="(stack, i) in work.stack"
						:key="i"
						:name="stack"
					/>
				</footer>
			</header>
		</NuxtLink>
		<footer class="PortfolioCard__footer">
			<small v-if="work.date === 'current'">
				Construy&eacute;ndose -
			</small>
			<small v-else>{{ work.date }} -</small>
			<NuxtLink
				v-for="repo in work.repos"
				:key="repo"
				:to="repo"
				target="_blank"
			>
				<Icon name="logos:github-icon" />
			</NuxtLink>
			<small v-if="work.repos?.length === 0">Repositorios privados</small>
		</footer>
	</article>
</template>

<style lang="scss" scoped>
.PortfolioCard {
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	justify-content: space-between;
	background-color: #111418;
	width: 100%;
	padding: 2px;
	position: relative;
	gap: 10px;
	height: 100%;
	min-height: 250px;
	border-radius: 8px;
}

.PortfolioCard:hover {
	figure {
		filter: blur(2px);
	}
	.PortfolioCard__header {
		opacity: 1;
	}
}

.PortfolioCard__header {
	position: absolute;
	top: 0;
	opacity: 0;
	width: 100%;
	transition: opacity 0.4s;
	height: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
}

.PortfolioCard__header footer {
	display: flex;
	gap: 10px;
	margin-top: 10px;
	flex-wrap: wrap;
	justify-content: center;
	svg {
		width: 25px;
		height: 25px;
	}
}

h4 {
	width: fit-content;
	padding-right: 2px;
	font-size: 1.2rem;
}

h4,
figcaption,
p {
	background-color: var(--color-code);
	color: white;
	padding: 5px;
	border-radius: 4px;
	max-width: 300px;
}

p {
	margin-top: 20px;
}

figure {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	transition: all 0.4s;
}

img {
	width: 100%;
	height: 100%;
	border-radius: 10px;
	object-fit: cover;
	filter: grayscale(1);
}

.PortfolioCard__footer {
	position: absolute;
	bottom: -20px;
	display: flex;
	align-items: center;
	gap: 5px;
	left: 0px;
	width: 100%;
	height: 25px;
	padding: 0 10px;
	border-radius: 0 0 6px;
	a {
		width: fit-content;
	}
}

// Media queries
@media (max-width: 767.98px) {
	.PortfolioCard__header {
		p {
			font-size: 0.9rem;
		}
		footer {
			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
}

@media (max-width: 575.98px) {
	.PortfolioCard {
		flex-direction: column;
	}

	.PortfolioCard__header {
		p {
			font-size: 0.85rem;
		}
	}

	.PortfolioCard__header footer {
		justify-content: center;
	}
}
</style>
