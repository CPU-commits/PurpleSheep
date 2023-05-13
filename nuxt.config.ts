// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	runtimeConfig: {
		// Secret
		PB_HOST: '',
		SECRET: '',
		// Public
		public: {
			NODE_ENV: 'dev' as 'dev' | 'prod',
		},
		mail: {
			host: '',
			port: 0,
			user: '',
			password: '',
			sender: '',
			to: '',
		},
	},
	typescript: {
		strict: true,
	},
	css: ['@/assets/scss/main.scss'],
	modules: ['@pinia/nuxt', '@nuxt/image-edge', 'nuxt-icon', '@nuxt/content'],
	imports: {
		dirs: ['stores'],
	},
	ssr: true,
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "@/assets/scss/_variables.scss" as *;',
				},
			},
		},
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'es',
			},
		},
	},
})
