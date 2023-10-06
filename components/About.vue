<template>
	<section class="AboutMe">
		<header class="AboutMe__header">
			<img src="/images/skills/deno.svg" alt="Deno" />
			<div>
				<h3>Sobre m&iacute;</h3>
				<p>Me llamo Felipe C&aacute;rdenas</p>
				<p>Desarrollador web full stack</p>
				<p>Estudiante de ingenier&iacute;a en inform&aacute;tica</p>
			</div>
		</header>
		<article>
			<p>Diseño &uacute;nico y simple</p>
			<p>
				Desarrollo de software para aplicaciones distribuidas,
				arquitectura de software y CI/CD
			</p>
			<i>
				Una aplicaci&oacute;n de ensueño no tiene por qu&eacute; ser un
				sueño
			</i>
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
			width: 80px;
			height: 80px;
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
			img {
				height: 70px;
				width: 70px;
			}
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
				height: 60px;
				width: 60px;
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
