<script setup lang="ts">
import 'animate.css'

useServerSeoMeta({
	title: 'PurpleSheep - Felipe Cárdenas',
})
// Typewritter
const printFunctions = [
	'print',
	'console.log',
	'fmt.Println',
	'println!',
	'printf',
]

const visibleText = ref(false)
const index = ref(0)

onMounted(() => {
	visibleText.value = true
	setInterval(() => {
		visibleText.value = true
		setTimeout(() => {
			index.value++
			if (index.value === printFunctions.length) index.value = 0
			visibleText.value = false
		}, 2000)
	}, 4000)
})
// Slides
const leftSlides = [
	{
		src: '/images/skills/python.svg',
		alt: 'Python',
	},
	{
		src: '/images/skills/node_js.svg',
		alt: 'NodeJS',
	},
	{
		src: '/images/skills/typescript.svg',
		alt: 'Typescript',
	},
	{
		src: '/images/skills/golang.svg',
		alt: 'Golang',
	},
	{
		src: '/images/skills/rust.svg',
		alt: 'Rust',
	},
	{
		src: '/images/skills/mongo_db.svg',
		alt: 'MongoDB',
	},
	{
		src: '/images/skills/postgres.svg',
		alt: 'PostgreSQL',
	},
	{
		src: '/images/skills/nestjs.svg',
		alt: 'NestJS',
	},
	{
		src: '/images/skills/docker.svg',
		alt: 'Docker',
	},
	{
		src: '/images/skills/fastapi.svg',
		alt: 'FastAPI',
	},
	{
		src: '/images/skills/svelte.svg',
		alt: 'Svelte',
	},
]
const rightSlides = [
	{
		src: '/images/skills/vue.svg',
		alt: 'Vue 3',
	},
	{
		src: '/images/skills/nuxt.svg',
		alt: 'Nuxt',
	},
	{
		src: '/images/skills/kubernetes.svg',
		alt: 'Kubernetes',
	},
	{
		src: '/images/skills/jenkins.png',
		alt: 'Jenkins',
	},
	{
		src: '/images/skills/deno.svg',
		alt: 'Deno',
	},
	{
		src: '/images/skills/fresh.svg',
		alt: 'Deno Fresh',
	},
	{
		src: '/images/skills/java.svg',
		alt: 'Java',
	},
	{
		src: '/images/skills/redis.svg',
		alt: 'Redis',
	},
	{
		src: '/images/skills/elasticsearch.png',
		alt: 'Elasticsearch',
	},
	{
		src: '/images/skills/couchdb.png',
		alt: 'Couchdb',
	},
	{
		src: '/images/skills/sqlite.svg',
		alt: 'SQLite 3',
	},
]

// Form
const contact = ref({
	email: '',
	message: '',
})
const ok = ref(false)

async function sendMessage() {
	ok.value = false
	try {
		await $fetch('/api/mail', {
			body: {
				to: contact.value.email,
				text: contact.value.message,
			},
			method: 'POST',
		})
		// Set
		ok.value = true
		contact.value = {
			email: '',
			message: '',
		}
	} catch {
		ok.value = false
	}
}
</script>

<template>
	<main>
		<div class="First">
			<header>
				<h2>
					<img src="/logos/logo-white.svg" alt="Logo Purple Sheep" />
					<span class="Italic">PURPLE</span>
					/
					<span class="Purple">SHEEP</span>
				</h2>
				<h3>
					Momento de pasar la oveja negra a la oveja
					<span class="Purple">morada</span>
				</h3>
			</header>
			<Grid />
			<section class="Banner">
				<header>
					<aside class="Code">
						<Code>
							<div>
								<span class="Comment">
									1 // C&oacute;digo para saludar
								</span>
							</div>
							<div>
								<span class="Comment">2 </span>
								<Typewritter
									class="Function"
									:type-array="printFunctions"
								/>
								<span class="Function Machine" />
								<span class="Function">(</span>
								<span class="Colon">"Hola mundo!"</span>
								<span class="Function">)</span>
							</div>
							<div>
								<span class="Comment">
									3 // C&oacute;digo para contactarme
								</span>
							</div>
							<div>
								<span class="Comment">4</span>
								<span class="Function">
									<NuxtLink to="#contact">
										hacer_real_tu_vision()
									</NuxtLink>
								</span>
							</div>
							<div>
								<span class="Comment">5</span>
							</div>
						</Code>
					</aside>
					<article class="Banner_text">
						<h2>Sheep...</h2>
					</article>
					<article class="Banner__main">
						<h3>
							Software a la medida, altamente creativo y
							resolutivo a tus problemas. Convierte una idea, en
							una idea
							<span class="Purple">morada...</span>
						</h3>
					</article>
					<article class="Banner_description" />
				</header>
			</section>
		</div>

		<br />
		<section class="Skills">
			<Skills :slides="leftSlides" direction="right" />
			<Skills :slides="rightSlides" />
		</section>

		<About />

		<section class="Portfolio__container">
			<Portfolio />
		</section>
		<div class="Portfolio__apps">
			<h2 class="Purple">Y MUCHOS PROYECTOS M&Aacute;S...!</h2>
			<Apps />
		</div>

		<section class="Flag">
			<span>
				Desarrollemos juntos tu siguiente proyecto desde el inicio hasta
				el final
			</span>
		</section>

		<section id="contact" class="Form">
			<HTMLForm :action="sendMessage">
				<h3>Formulario de contacto</h3>
				<HTMLInput v-model:value="contact.email" placeholder="Email" />
				<HTMLInput
					v-model:value="contact.message"
					placeholder="Mensaje"
				/>
				<HTMLButton type="submit">Env&iacute;ar</HTMLButton>
				<small v-if="ok">
					<Icon name="akar-icons:circle-check-fill" />
					Se ha mandado el mensaje con exito
				</small>
			</HTMLForm>
		</section>
	</main>
</template>

<style scoped lang="scss">
.First {
	background-color: var(--color-code);
	display: flex;
	flex-direction: column;
	position: relative;
	min-height: 100vh;
	margin: 0px auto;
	overflow: hidden;
	box-sizing: border-box;
	header {
		position: absolute;
		top: 10%;
		display: flex;
		flex-direction: column;
		left: 10%;
		z-index: 9;
	}
	h2 {
		text-align: left;
		font-size: 3rem;
		color: white;
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.Italic {
		color: white;
		font-size: 3.5rem;
		font-style: italic;
	}
	h3 {
		color: white;
		font-size: 1.5rem;
	}
	img {
		width: 50px;
	}
}

.Banner header {
	display: grid;
	grid-template-columns: 200px 200px 1fr 1fr;
	grid-template-rows: 70px 90px 30px;
	grid-template-areas:
		'none1 maintitle main main'
		'code code main main'
		'none2 maintext maintext maintext';
	margin: 30px;
	padding: 20px;
	border-bottom: 2px solid var(--color-light);
}

h1 {
	font-size: 5rem;
	font-weight: 800;
	padding: 8px;
	text-align: center;
	color: var(--color-main);
}

h2 {
	text-align: center;
}

.Banner {
	position: absolute;
	width: 100%;
	bottom: 300px;
}

.Banner_text {
	grid-area: maintitle;
	border: 2px solid var(--color-light);
	border-bottom: none;
	border-radius: 8px;
	border-top-right-radius: 0;
	border-bottom-left-radius: 0;
	border-right: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-code);
	justify-content: center;
}

.Banner_text h2 {
	font-size: 2rem;
}

.Banner__main {
	border: 2px solid var(--color-light);
	border-left: none;
	border-radius: 8px;
	border-bottom: none;
	border-top-left-radius: 0;
	border-bottom-right-radius: 0;
	grid-area: main;
	max-width: 500px;
	background-color: var(--color-code);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	flex-direction: column;
	h3 {
		font-size: 1.1rem;
	}
}

.Banner__main p {
	text-align: center;
}

.Banner_description {
	border: 2px solid var(--color-light);
	border-top: none;
	border-radius: 8px;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
	background-color: var(--color-code);
	grid-area: maintext;
}

.Banner__main h2 {
	text-align: center;
}

a {
	text-decoration: none;
}

.Purple {
	font-family: var(--font-title);
	color: #6900ff;
	color: -webkit-linear-gradient(0deg, #6900ff 0%, #9951ff 100%);
	color: linear-gradient(0deg, #6900ff 0%, #9951ff 100%);
}

.Code {
	grid-area: code;
	border: 1px solid var(--color-main);
	border-radius: 8px;
}

.Comment {
	color: #43474d;
}

.Function {
	color: #11b7d4;
}

.Function a {
	color: #11b7d4;
}

.Colon {
	color: #00a86b;
}

.Portfolio__container {
	display: flex;
	justify-content: center;
}

.Portfolio__apps {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.Flag {
	background-color: var(--color-code);
	padding: 20px;
}

.Flag span {
	color: white;
	display: flex;
	justify-content: center;
	text-align: center;
}

.Form {
	padding: 20px;
	display: flex;
	justify-content: center;
	margin: 0;
	background-image: radial-gradient(circle, black 1px, transparent 1px);
	background-size: 10px 10px;
	h3 {
		color: white;
	}
}

// Media queries
@media (max-width: 767.98px) {
	h1 {
		font-size: 3rem;
	}

	.Banner {
		header {
			margin: 0;
			margin-bottom: 25px;
			grid-template-columns: 80px 200px 1fr 1fr;
		}
		.Banner_text h2 {
			font-size: 1.5rem;
		}
		.Banner__main {
			h2 {
				font-size: 1.3rem;
			}
			p {
				font-size: 0.9rem;
			}
		}
		.Code {
			span {
				font-size: 0.9rem;
			}
		}
	}
}

@media (max-width: 575.98px) {
	h1 {
		font-size: 2rem;
	}

	.Banner {
		header {
			grid-template-columns: 30px 290px 0fr 0fr;
		}
		.Banner__main {
			h3 {
				visibility: hidden;
			}
			p {
				visibility: hidden;
			}
		}
		.Code {
			span {
				font-size: 0.9rem;
			}
		}
	}
}
</style>
