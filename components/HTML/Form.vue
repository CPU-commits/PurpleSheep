<script lang="ts" setup>
defineProps<{
	action: () => any
}>()
</script>

<template>
	<form @submit.prevent="action">
		<slot />
	</form>
</template>

<style lang="scss" scoped>
form {
	padding: 20px;
	border: 2px solid var(--color-light);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	align-items: center;
	width: 100%;
	max-width: 400px;
	h3 {
		text-align: center;
	}
}
</style>
