<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref, getLocale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { clickOutside } from '$lib/actions/clickOutside';


	// @ts-ignore
	import "@fontsource-variable/exo-2";

	import { slide } from "svelte/transition";

	let burgerMenuOpen = $state(false);
	let langMenuOpen = $state(false);

	let toggleBurgerMenu = () => {
		console.log("fils de pute");
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

<header onmousedown={handleClickOutside}>
	<a id="logo" href="/">
		<img
			id="logo-img"
			src="/favicon/favicon.svg"
			alt="Logo of the organization"
		/>

		<h2>
			<span id="demos">DEMOS</span>
			<span id="AI">AI</span>
		</h2>
	</a>

	<nav>
		<ul>
			<li id="who-are-we"><a href="/">{m.nav_who_are_we()}</a></li>
			<li id="simulation"><a href="/AI/simulation">{m.nav_simulation()}</a></li>
		</ul>
	</nav>

	<div id="left-elements">
		<div id="lang-dropdown" use:clickOutside={() => langMenuOpen = false}>
			<button
				class="left-btn"
				id="lang-flag-btn"
				onclick={toggleLangMenu}
			>
				<img
					id="lang-flag"
					src="/icon/flag/{getLocale()}.svg"
					alt="English flag"
				/>
			</button>

			{#if langMenuOpen}
				<div
					id="lang-menu"
					transition:slide={{ duration: 300 }}
				>
					{#each languages as lang}
						<a data-sveltekit-reload class="lang-option" href={resolve(localizeHref(page.url.pathname, { locale: lang.code }) as Pathname)}>
							<img
								src="/icon/flag/{lang.code}.svg"
								alt="{lang.name} flag"
							/>

							<span>{lang.name}</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>

		<button
			class="left-btn"
			id="burger-menu-btn"
			onclick={toggleBurgerMenu}
		>
			<img
				id="burger-menu"
				src="/icon/burger-menu.svg"
				alt="Burger menu icon"
			/>
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
		font-family: "Exo 2 Variable", sans-serif;
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

	header {
		width: 100%;
		height: 10vh;
		padding: 0.5rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: linear-gradient(to right, var(--futuristic-pink), var(--futuristic-purple) 33%);
		position: relative;
	}

	:global([dir="rtl"]) header {
		background: linear-gradient(to left, var(--futuristic-pink), var(--futuristic-purple) 33%);
	}

	a {
		text-decoration: none;
	}

	button {
		border: none;
		outline: none;
		background: none;
	}

	li {
		color: white;
		font-weight: 600;
		border-radius: 8px;
		transition: all 0.25s ease;
		display: inline-block;
		list-style: none;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	li a {
		padding: 0.5rem 1rem;
	}

	li:hover {
		background-color: rgba(255, 255, 255, 0.12);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
	}

	h2 {
		margin: 0 1rem;
		display: flex;
	}

	:global([dir="rtl"]) h2 {
		direction: ltr;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	ul {
		display: flex;
		gap: 3rem;
		height: 100%;
	}

	#logo {
		height: 100%;
		width: 33%;
		display: flex;
		align-items: center;
		min-width: 150px;
	}

	#logo img {
		transition: transform 0.6s ease;
		transform-origin: center;
	}

	#logo img:hover {
		transform: rotate(360deg);
	}

	#demos {
		color: var(--futuristic-dark);
	}

	#AI {
		margin: 0 0.5rem;
	}

	img {
		height: 100%;
	}

	nav {
		width: 34%;
		height: 100%;
	}

	#left-elements {
		width: 33%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 0 4rem;
		height: 100%;
	}

	.left-btn {
		border-radius: 10px;
		height: 100%;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--futuristic-purple);
	}

	.left-btn:hover {
		background-color: rgba(255, 255, 255, 0.12);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
		cursor: pointer;
	}

	#burger-menu-btn {
		display: none;
	}

	#lang-menu {
		position: absolute;
		top: calc(100% + 0.5rem);
		inset-inline-end: 0;
		width: 10rem;
		background: var(--futuristic-purple);
		border-radius: 10px;
		padding: 0.5rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		z-index: 1000;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		left: 50%;
		transform: translateX(-50%);
	}

	.lang-option {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: left;
		gap: 0.5rem;
		cursor: pointer;
		transition: all 0.2s ease;
		border-radius: 4px;
		padding: 0.5rem;
	}

	.lang-option:hover {
		background-color: rgba(255, 255, 255, 0.15);
		transform: translateX(-4px);
	}

	.lang-option img {
		height: 2rem;
	}

	#lang-dropdown {
		position: relative;
		height: 100%;
	}

	@media (max-width: 1000px) {
		header {
			padding: 0.5rem 0.25rem;
		}

		#logo {
			width: auto;
			flex: 1;
			min-width: auto;
		}

		h2 {
			display: none;
		}

		nav {
			display: none;
		}
		#lang-flag-btn {
			display: none;
		}
		#burger-menu-btn {
			display: block;
		}
		#left-elements {
			padding: 0;
		}
	}
</style>
