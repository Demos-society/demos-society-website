<script lang="ts">
	import './layout.css';
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref, getLocale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { clickOutside } from '$lib/actions/clickOutside';

	// @ts-ignore
	import '@fontsource-variable/exo-2';

	import { slide } from 'svelte/transition';

	let burgerMenuOpen = $state(false);
	let langMenuOpen = $state(false);

	let toggleBurgerMenu = () => {
		console.log('fils de pute');
		burgerMenuOpen = !burgerMenuOpen;
	};

	let toggleLangMenu = () => {
		langMenuOpen = !langMenuOpen;
	};

	const languages = [
		{ code: 'ar', name: 'العربية' },
		{ code: 'ch', name: '中文' },
		{ code: 'de', name: 'Deutsch' },
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Español' },
		{ code: 'fr', name: 'Français' },
		{ code: 'ru', name: 'Русский' }
	] as const;

	console.log(getLocale());

	let { children } = $props();
</script>

<header class="w-full h-[10vh] p-2 flex items-center justify-between bg-gradient-to-r from-[var(--futuristic-pink)] via-[var(--futuristic-purple-pink)] to-[var(--futuristic-purple)] relative [&[dir='rtl']]:bg-gradient-to-l max-md:p-1">
	<a id="logo" href="/" class="h-full flex items-center min-w-[150px] w-1/3 max-md:w-auto max-md:flex-1 max-md:min-w-0">
		<img id="logo-img" src="/favicon/favicon.svg" alt="Logo of the organization" class="h-full" />

		<h2 class="m-0 ms-4 flex [&[dir='rtl']]:direction-ltr">
			<span id="demos" class="text-[var(--futuristic-dark)]">DEMOS</span>
			<span id="AI" class="mx-2 text-white">AI</span>
		</h2>
	</a>

	<nav class="flex items-center justify-center w-[34%] h-full max-md:hidden">
		<ul class="flex gap-12 h-full">
			<li id="who-are-we" class="text-white font-semibold rounded-lg transition-all duration-250 inline-block list-none h-full flex items-center justify-center hover:bg-white/12 hover:-translate-y-0.5 hover:shadow-lg"><a href="/" class="px-4 py-2">{m.nav_who_are_we()}</a></li>
			<li id="simulation" class="text-white font-semibold rounded-lg transition-all duration-250 inline-block list-none h-full flex items-center justify-center hover:bg-white/12 hover:-translate-y-0.5 hover:shadow-lg"><a href="/AI/simulation" class="px-4 py-2">{m.nav_simulation()}</a></li>
		</ul>
	</nav>

	<div id="left-elements" class="flex gap-4 w-1/3 items-center justify-end pe-16 h-full max-md:w-auto max-md:pe-0">
		<div id="lang-dropdown" use:clickOutside={() => (langMenuOpen = false)} class="relative h-full max-md:hidden">
			<button class="left-btn p-2 border-none outline-none bg-none rounded-lg h-full px-2 flex items-center justify-center bg-[var(--futuristic-purple)] hover:bg-white/12 hover:shadow-lg cursor-pointer transition-all" id="lang-flag-btn" onclick={toggleLangMenu}>
				<img id="lang-flag" src="/icon/flag/{getLocale()}.svg" alt="English flag" />
			</button>

			{#if langMenuOpen}
				<div id="lang-menu" transition:slide={{ duration: 300 }} class="absolute top-[calc(100%+0.5rem)] right-0 w-40 bg-[var(--futuristic-purple)] rounded-lg p-4 shadow-2xl z-[1000] flex flex-col gap-2 left-1/2 -translate-x-1/2">
					{#each languages as lang}
						<a
							data-sveltekit-reload
							class="lang-option w-full flex items-center gap-2 cursor-pointer transition-all rounded px-2 py-2 hover:bg-white/15 hover:-translate-x-1"
							href={resolve(localizeHref(page.url.pathname, { locale: lang.code }) as Pathname)}
						>
							<img src="/icon/flag/{lang.code}.svg" alt="{lang.name} flag" class="h-8" />

							<span>{lang.name}</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>

		<button class="left-btn p-2 border-none outline-none bg-none rounded-lg h-full px-2 flex items-center justify-center bg-[var(--futuristic-purple)] hover:bg-white/12 hover:shadow-lg cursor-pointer transition-all max-md:block hidden" id="burger-menu-btn" onclick={toggleBurgerMenu}>
			<img id="burger-menu" src="/icon/burger-menu.svg" alt="Burger menu icon" />
		</button>
	</div>
</header>

{@render children()}

<style>
	:global(:root) {
		--futuristic-purple: #6946ac;
		--futuristic-purple-pink: #cc83f4;
		--futuristic-pink: #fd92f1;
		--futuristic-blue: #67cff7;
		--futuristic-dark: #1d1d20;
	}

	:global(body) {
		font-family: 'Exo 2 Variable', sans-serif;
		margin: 0;
	}

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	* {
		color: white;
	}

	a {
		text-decoration: none;
	}

	button {
		border: none;
		outline: none;
		background: none;
	}

	#logo img {
		transition: transform 0.6s ease;
		transform-origin: center;
	}

	#logo img:hover {
		transform: rotate(360deg);
	}
</style>
