<script lang="ts" setup>
const { data: works } = await useAsyncData('works', () =>
	queryContent().where({ _dir: 'works' }).find(),
)
</script>

<template>
	<section class="Portfolio">
		<div class="Portfolio__column">
			<h2>PORTAFOLIO</h2>
		</div>
		<div class="Portfolio__cards">
			<PortfolioCard v-for="work in works" :key="work._id" :work="work" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.Portfolio {
	padding: 30px;
	display: grid;
	align-items: center;
	grid-template-columns: 100px 1fr;
	.Portfolio__column {
		h2 {
			text-align: center;
			padding: 3px;
			font-size: 1.4rem;
			writing-mode: vertical-rl;
			text-orientation: upright;
		}
	}
	.Portfolio__cards {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
		align-items: center;
	}
}
</style>
