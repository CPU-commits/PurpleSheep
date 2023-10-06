<script lang="ts" setup>
const { data: works } = await useAsyncData('works', () =>
	queryContent().where({ _dir: 'works' }).find(),
)

function calculateRow(c: number) {
	if (c % 5 === 0) {
		return 3 * Math.floor(c / 5)
	} else if (c % 5 <= 2) {
		return 3 * Math.floor(c / 5) + 1
	} else {
		return 3 * Math.floor(c / 5) + 2
	}
}
</script>

<template>
	<section class="Portfolio">
		<PortfolioCard
			v-for="(work, i) in works"
			:key="work._id"
			:work="work"
			:class="{
				a: (i + 5) % 5 === 0,
				b: (i + 4) % 5 === 0,
				c: (i + 3) % 5 === 0,
				d: (i + 2) % 5 === 0,
				e: (i + 1) % 5 === 0,
			}"
			:style="{ 'grid-row': calculateRow(i + 1) }"
		/>
	</section>
</template>

<style lang="scss" scoped>
.Portfolio {
	padding: 30px;
	display: grid;
	align-items: center;
	max-width: 1000px;
	gap: 10px;
	box-sizing: border-box;
	width: 100%;
	grid-template-columns: repeat(4, 1fr);
}

.a {
	grid-column: 1/3;
}

.b {
	grid-column: 3/5;
}

.c {
	grid-column: 1/2;
}

.d {
	grid-column: 2/5;
}

.e {
	grid-column: 1/5;
}

// Media queries
@media (max-width: 767.98px) {
	.Portfolio {
		padding: 20px;
	}
}
</style>
