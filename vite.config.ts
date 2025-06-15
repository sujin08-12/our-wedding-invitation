import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 5173,
		allowedHosts: [
			'sujin-yungeun.mooo.com'
		]
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
				additionalData: `
				@use '/src/styles/variables.scss' as *;
				`
			}
		}
	}
});
