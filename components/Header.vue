<template>
	<header class="Header">
		<NuxtLink class="Header__main" to="/">
			<h2>PurpleSheep</h2>
		</NuxtLink>
		<NuxtLink to="https://github.com/CPU-commits">
			<Icon name="logos:github-icon" />
		</NuxtLink>

		<div class="Header__media">
			<NuxtLink to="https://www.instagram.com/pipe_alex_/">
				<Icon name="bxl:instagram-alt" />
			</NuxtLink>
		</div>
	</header>
</template>

<style scoped lang="scss">
.Header {
	width: 100%;
	height: 50px;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 9;
	gap: 5px;
}

.Header__main {
	display: flex;
	align-items: center;
	gap: 5px;
}

h2 {
	color: var(--color-main);
	font-weight: 600;
	font-size: 1.9rem;
}

a {
	text-decoration: none;
}

svg {
	height: 25px;
	width: 25px;
}

.Header__media {
	position: absolute;
	right: 10px;
	svg {
		height: 20px;
		width: 20px;
	}
}

// Media queries
@media (max-width: 767.98px) {
	h2 {
		font-size: 1.5rem;
	}

	svg {
		height: 20px;
		width: 20px;
	}

	.Header__media {
		svg {
			height: 15px;
			width: 15px;
		}
	}
}

@media (max-width: 575.98px) {
	h2 {
		font-size: 1.2rem;
	}

	svg {
		height: 18px;
		width: 18px;
	}

	.Header__media {
		svg {
			height: 15px;
			width: 15px;
		}
	}
}
</style>
