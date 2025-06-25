<template>
	<section class="AboutMe">
		<header class="AboutMe__header">
			<img src="/images/me/avatar.jpeg" alt="Felipe Cárdenas" />
			<div>
				<h3>Sobre m&iacute;</h3>
				<p>Me llamo Felipe C&aacute;rdenas</p>
				<p>Desarrollador web full stack</p>
				<p>Inform&aacute;tico y empedernido por solucionar problemas</p>
			</div>
		</header>
		<article>
			<p>Trabajo en equipo</p>
			<p>Diseño &uacute;nico y simple</p>
			<p>Desarrollador con experiencia desde 2019</p>
			<p>
				Desarrollo de software para aplicaciones distribuidas,
				arquitectura de software y CI/CD
			</p>
			<p>
				C&oacute;digo limpio y bien estructurado a partir de las mejores
				pr&aacute;cticas
			</p>
		</article>
		<!--
		<footer class="AboutMe__footer">
			<div class="AboutMe__footer--card">
				<Icon name="eos-icons:patterns" />
				<span>Alto rendimiento</span>
			</div>
			<div class="AboutMe__footer--card">
				<Icon name="carbon:api" />
				<span>Escalabilidad</span>
			</div>
			<div class="AboutMe__footer--card">
				<Icon name="eos-icons:atom-electron" />
				<span>Atractivo</span>
			</div>
		</footer>
		-->
	</section>
</template>

<style scoped lang="scss">
.AboutMe {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 5px;
	.AboutMe__header {
		img {
			width: 200px;
			height: 200px;
			object-fit: cover;
			border-radius: 100%;
		}
		display: flex;
		align-items: center;
		gap: 15px;
		p {
			text-align: center;
		}
	}
	h3 {
		text-align: center;
		color: white;
	}
	p {
		color: white;
	}
	article {
		padding: 20px;
		max-width: 500px;
		background: var(--color-code);
		display: flex;
		flex-direction: column;
		gap: 10px;
		p,
		i {
			color: white;
			text-align: center;
		}
	}
	footer {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		.AboutMe__footer--card {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		svg {
			width: 60px;
			height: 60px;
		}
	}
}

// Media queries
@media (max-width: 767.98px) {
	.AboutMe {
		.AboutMe__header {
			flex-direction: column;
			p {
				font-size: 0.9rem;
			}
		}
		article {
			padding: 10px;
			p,
			i {
				font-size: 0.9rem;
			}
		}
		footer {
			span {
				font-size: 0.9rem;
			}
			svg {
				width: 50px;
				height: 50px;
			}
		}
	}
}

@media (max-width: 575.98px) {
	.AboutMe {
		.AboutMe__header {
			img {
				height: 150px;
				width: 150px;
			}
			p {
				font-size: 0.8rem;
			}
		}
		article {
			padding: 10px;
			p,
			i {
				font-size: 0.8rem;
			}
		}
		footer {
			span {
				font-size: 0.8rem;
			}
			svg {
				width: 40px;
				height: 40px;
			}
		}
	}
}
</style>
