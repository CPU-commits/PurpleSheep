<template>
	<footer>
		<h2>PurpleSheep...</h2>
		<NuxtLink to="https://github.com/CPU-commits/PurpleSheep">
			<h4>Repositorio</h4>
		</NuxtLink>
	</footer>
</template>

<style scoped>
footer {
	margin-top: 100px;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	background-color: var(--color-code);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

a {
	text-decoration: none;
}

h2 {
	color: white;
	font-weight: 600;
	font-size: 1.9rem;
	width: fit-content;
	height: fit-content;
}

h4 {
	color: white;
}
</style>
