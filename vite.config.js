import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

import postcssNesting from 'postcss-nesting'
import cssnanoPlugin from 'cssnano'
import autoprefixer from 'autoprefixer'

import svg from '@poppanator/sveltekit-svg'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		svg({
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// preserve viewBox
						params: { overrides: { removeViewBox: false } }
					},
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		})
	],
	resolve: {
		alias: {
			$assets: path.resolve('./src/assets'),
			$css: path.resolve('./src/css'),
			$data: path.resolve('./src/data'),
			$lib: path.resolve('./src/lib'),
			$stores: path.resolve('./src/stores'),
			$utils: path.resolve('./src/utils')
		}
	},
	css: {
		postcss: {
			plugins: [postcssNesting(), cssnanoPlugin(), autoprefixer()]
		}
	}
})
