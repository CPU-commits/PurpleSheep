<script lang="ts" setup>
defineProps<{
	type: 'submit' | 'text'
}>()
</script>

<template>
	<button :type="type">
		<slot />
	</button>
</template>

<style scoped>
button {
	background-color: var(--color-code);
	border: none;
	color: white;
	padding: 10px;
	width: 100%;
	border-radius: 5px;
}
</style>
