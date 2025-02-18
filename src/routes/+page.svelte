<script>
	import Button from '~/components/ui/button/button.svelte';
</script>

<main>
	<section class="bg-white dark:bg-gray-900">
		<div class="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
			<div class="mx-auto place-self-center">
				<h1
					class="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white"
				>
					SvelteKit Enterprise Boilerplate
				</h1>
				<p
					class="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400"
				>
					Jumpstart your enterprise project with our feature-packed, high-performance SvelteKit
					boilerplate! Experience rapid UI development, AI-powered code reviews, and an extensive
					suite of tools for a smooth and enjoyable development process.
				</p>
				<Button href="https://github.com/dsm23/dsm23-svelte-kit-template" class="mr-3">
					Get started
				</Button>
				<Button
					variant="outline"
					href="https://vercel.com/new/git/external?repository-url=https://github.com/dsm23/dsm23-svelte-kit-template/"
				>
					Deploy Now
				</Button>
			</div>
		</div>
	</section>
</main>
