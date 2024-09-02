<script lang="ts" setup>
defineProps<{
	placeholder: string
	value: string
}>()

defineEmits<{
	(e: 'update:value', v: string): void
}>()
</script>

<template>
	<input
		:value="value"
		type="text"
		:placeholder="placeholder"
		@input="
			$emit('update:value', ($event.target as HTMLInputElement).value)
		"
	/>
</template>

<style lang="scss" scoped>
input {
	background-color: transparent;
	border: none;
	border-bottom: 1px solid var(--color-light);
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	color: white;
}

input:focus {
	outline: none;
}
</style>
