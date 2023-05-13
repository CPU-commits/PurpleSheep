<script setup lang="ts">
import 'animate.css'

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
		src: '/images/skills/python.png',
		alt: 'Python',
	},
	{
		src: '/images/skills/node_js.png',
		alt: 'NodeJS',
	},
	{
		src: '/images/skills/type_script.webp',
		alt: 'Typescript',
	},
	{
		src: '/images/skills/golang.png',
		alt: 'Golang',
	},
	{
		src: '/images/skills/rust.png',
		alt: 'Rust',
	},
	{
		src: '/images/skills/mongo_db.png',
		alt: 'MongoDB',
	},
	{
		src: '/images/skills/postgre.png',
		alt: 'PostgreSQL',
	},
	{
		src: '/images/skills/nestjs.svg',
		alt: 'NestJS',
	},
	{
		src: '/images/skills/docker.png',
		alt: 'Docker',
	},
	{
		src: '/images/skills/fastapi.png',
		alt: 'FastAPI',
	},
	{
		src: '/images/skills/svelte.png',
		alt: 'Svelte',
	},
]
const rightSlides = [
	{
		src: '/images/skills/vue.png',
		alt: 'Vue 3',
	},
	{
		src: '/images/skills/nuxt.svg',
		alt: 'Nuxt',
	},
	{
		src: '/images/skills/kubernetes.png',
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
		src: '/images/skills/fresh.png',
		alt: 'Deno Fresh',
	},
	{
		src: '/images/skills/java.png',
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
		src: '/images/skills/sqlite.png',
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
	<div>
		<section class="Banner">
			<h1 class="animate__animated animate__fadeInDown">
				Solo se necesita un pequeño empujon
			</h1>
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
					<h2>
						Momento de pasar la oveja negra a la oveja
						<span class="Purple">morada</span>
					</h2>
					<p>
						Sitio para obedecer a tus problemas y entender que
						necesitas como producto
					</p>
				</article>
				<article class="Banner_description" />
			</header>
		</section>

		<section class="Skills">
			<Skills :slides="leftSlides" direction="right" />
			<Skills :slides="rightSlides" />
		</section>

		<About />

		<Portfolio />

		<section class="Flag">
			<span>
				Desarrollemos juntos tu siguiente proyecto desde el inicio hasta
				el final
			</span>
		</section>

		<section class="Form">
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
	</div>
</template>

<style scoped lang="scss">
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
	text-align: center;
	color: var(--color-main);
}

h2 {
	text-align: center;
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
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	flex-direction: column;
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

.Flag {
	background-color: var(--color-code);
	padding: 20px;
}

.Flag span {
	color: white;
	display: flex;
	justify-content: center;
}

.Form {
	padding: 20px;
	display: flex;
	justify-content: center;
}
</style>
