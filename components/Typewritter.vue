<script setup lang="ts">
// Props
const props = defineProps<{
	typeArray: Array<string>
}>()

const typeValue = ref('')
const typeStatus = ref(false)
const typingSpeed = 80
const erasingSpeed = 70
const newTextDelay = 2000
const typeArrayIndex = ref(0)
const charIndex = ref(0)

function typeText() {
	if (charIndex.value < props.typeArray[typeArrayIndex.value].length) {
		if (!typeStatus.value) typeStatus.value = true
		typeValue.value += props.typeArray[typeArrayIndex.value].charAt(
			charIndex.value,
		)
		charIndex.value++

		setTimeout(typeText, typingSpeed)
	} else {
		typeStatus.value = false
		setTimeout(eraseText, newTextDelay)
	}
}

function eraseText() {
	if (charIndex.value > 0) {
		if (!typeStatus.value) typeStatus.value = true

		typeValue.value = props.typeArray[typeArrayIndex.value].substring(
			0,
			charIndex.value - 1,
		)
		charIndex.value--
		setTimeout(eraseText, erasingSpeed)
	} else {
		typeStatus.value = false
		typeArrayIndex.value++
		if (typeArrayIndex.value >= props.typeArray.length)
			typeArrayIndex.value = 0

		setTimeout(typeText, typingSpeed + 1000)
	}
}

onMounted(() => {
	setTimeout(typeText, newTextDelay + 200)
})
</script>

<template>
	<span class="typed-text Function">
		{{ typeValue }}
	</span>
</template>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

h1 {
	font-size: 4rem;
	font-weight: normal;

	span.typed-text {
		color: #d2b94b;
	}

	span.cursor {
		display: inline-block;
		margin-left: 3px;
		width: 4px;
		background-color: #fff;
		animation: cursorBlink 1s infinite;
	}

	span.cursor.typing {
		animation: none;
	}
}

@keyframes cursorBlink {
	49% {
		background-color: #fff;
	}
	50% {
		background-color: transparent;
	}
	99% {
		background-color: transparent;
	}
}
</style>
