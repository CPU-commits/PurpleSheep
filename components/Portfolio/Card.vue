<script setup lang="ts">
// Types
import type { Work } from '~~/models/work.model'

defineProps<{
	work: Work
}>()
</script>

<template>
	<article class="PortfolioCard">
		<header class="PortfolioCard__header">
			<h4><i class="fa-solid fa-gear" /> {{ work.title }}</h4>
			<p>> {{ work.description }}</p>
			<footer>
				<Icon v-for="(stack, i) in work.stack" :key="i" :name="stack" />
			</footer>
		</header>
		<figure>
			<NuxtLink :to="work.link" target="_blank">
				<NuxtImg v-if="work.img" :src="work.img" :alt="work.title" />
			</NuxtLink>
		</figure>
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
	justify-content: space-between;
	background-color: #111418;
	width: 100%;
	padding: 20px;
	position: relative;
	gap: 10px;
	border-radius: 8px;
}

.PortfolioCard__header footer {
	display: flex;
	gap: 10px;
	margin-top: 10px;
	flex-wrap: wrap;
	svg {
		width: 25px;
		height: 25px;
	}
}

h4 {
	width: fit-content;
	padding-right: 2px;
}

h4,
figcaption,
p {
	color: white;
	i {
		color: white;
	}
}

p {
	margin-top: 20px;
}

figure {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	padding-bottom: 20px;
}

img {
	max-width: 250px;
	border-radius: 10px;
	object-fit: cover;
}

.PortfolioCard__footer {
	background-color: white;
	position: absolute;
	bottom: 0px;
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
</style>
