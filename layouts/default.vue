<template>
	<div>
		<!--<Header />-->
		<main>
			<div class="Container">
				<slot />
			</div>
		</main>
		<Footer />
	</div>
</template>

<style scoped>
main {
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.Container {
	position: relative;
	width: 100%;
}
</style>
