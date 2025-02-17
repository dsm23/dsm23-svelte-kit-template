import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { coverageConfigDefaults } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), tsconfigPaths()],

	test: {
		coverage: {
			all: true,
			include: ['src/**/*.svelte', 'src/**/*.[jt]s?(x)'],
			exclude: [
				'src/**/*.stories.[jt]s?(x)',
				'src/test-utils/**',
				'src/mocks/**',
				'**/node_modules/**',
				'**/e2e/**',
				...coverageConfigDefaults.exclude
			]
			// thresholds: {
			// 	lines: 10,
			// 	functions: 10,
			// 	branches: 10,
			// 	statements: 10
			// }
		},
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],

				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',

				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
