<template>
	<code class="Code">
		<slot />
	</code>
</template>

<style scoped>
code {
	background-color: #111418;
	color: white;
	padding: 10px;
	display: flex;
	gap: 1px;
	flex-direction: column;
	height: 100%;
	box-sizing: border-box;
	justify-content: center;
}
</style>
