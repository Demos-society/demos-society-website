<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { localizeHref, getLocale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { clickOutside } from '$lib/actions/clickOutside';

	import { slide } from 'svelte/transition';
	import { MediaQuery } from 'svelte/reactivity';

	let langMenuOpen = $state(false);
	import { browser } from '$app/environment';

	let ligthMode = $state(false);

	$effect(() => {
		if (!browser) return;

		const saved = localStorage.getItem('theme');

		ligthMode = saved
			? saved === 'light'
			: window.matchMedia('(prefers-color-scheme: light)').matches;
	});

	let toggleLigthMode = () => {
		ligthMode = !ligthMode;
		localStorage.setItem('theme', ligthMode ? 'light' : 'dark');
	};

	let { toggleBurgerMenu, onTheHeader, burgerMenuOpen } = $props();

	let toggleLangMenu = () => {
		langMenuOpen = !langMenuOpen;
	};

	$effect(() => {
		document.body.classList.toggle('light-mode', ligthMode);
	});

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
</script>

{#if !(burgerMenuOpen && onTheHeader)}
	<nav class={onTheHeader ? 'onTheHeader' : 'notOnTheHeader'}>
		<ul>
			<li id="who-are-we"><a href="/" onclick={toggleBurgerMenu}>{m.nav_who_are_we()}</a></li>
			<li id="simulation">
				<a href="/AI/simulation" onclick={toggleBurgerMenu}>{m.nav_simulation()}</a>
			</li>
		</ul>
	</nav>
{/if}

<div class="left-elements {onTheHeader ? 'onTheHeader' : 'notOnTheHeader'}">
	{#if !(burgerMenuOpen && onTheHeader)}
		<div id="lang-dropdown" use:clickOutside={() => (langMenuOpen = false)}>
			<button class="left-btn" id="lang-flag-btn" onclick={toggleLangMenu}>
				<img id="lang-flag" src="/icon/flag/{getLocale()}.svg" alt="English flag" />
			</button>

			{#if langMenuOpen}
				<div id="lang-menu" transition:slide={{ duration: 300 }}>
					{#each languages as lang}
						<a
							data-sveltekit-reload
							class="lang-option"
							href={resolve(localizeHref(page.url.pathname, { locale: lang.code }) as Pathname)}
						>
							<img src="/icon/flag/{lang.code}.svg" alt="{lang.name} flag" />

							<span>{lang.name}</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>
		<button class="left-btn" id="light-mode" onclick={toggleLigthMode}>
			<img src="/icon/{ligthMode ? 'dark' : 'light'}-mode.svg" alt="change the color theme" />
		</button>
	{/if}
	{#if onTheHeader}
		<button class="left-btn" id="burger-menu-btn" onclick={toggleBurgerMenu}>
			<img id="burger-menu" src="/icon/burger-menu.svg" alt="Burger menu icon" />
		</button>
	{/if}
</div>

<style>
	:global(body) {
		background-color: black;
		color: white;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	:global(body.light-mode) {
		background-color: white;
		color: black;
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

	li {
		color: white;
		font-weight: 600;
		border-radius: 8px;
		transition: all 0.25s ease;
		display: inline-block;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	nav.onTheHeader li {
		height: 100%;
	}

	li a {
		padding: 0.5rem 1rem;
	}

	li:hover {
		background-color: rgba(255, 255, 255, 0.12);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	ul {
		display: flex;
		gap: 3rem;
	}

	nav.onTheHeader ul {
		height: 100%;
	}

	img {
		height: 100%;
	}

	nav.onTheHeader {
		width: 34%;
		height: 100%;
	}

	.left-elements {
		width: 33%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1rem;
	}

	.left-elements.onTheHeader {
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

	#light-mode {
		padding: 0.8rem;
	}

	@media (max-width: 1000px) {
		nav.onTheHeader {
			display: none;
		}
		.left-elements.onTheHeader #lang-flag-btn {
			display: none;
		}
		#burger-menu-btn {
			display: block;
		}
		.left-elements {
			padding: 0;
		}
		.left-elements.onTheHeader #light-mode {
			display: none;
		}

		nav.notOnTheHeader {
			width: 100%;
			padding: 0 1rem;
		}

		nav.notOnTheHeader ul {
			display: flex;
			flex-direction: column;
			width: 100%;
			padding: 0;
		}

		nav.notOnTheHeader ul {
			width: 100%;
		}

		nav.notOnTheHeader a {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			height: 3rem;
		}

		.left-elements.notOnTheHeader {
			width: 100%;
			height: 8%;
			flex-direction: row-reverse;
			margin-bottom: 40%;
		}

		.left-elements.notOnTheHeader .left-btn {
			background-color: var(--futuristic-purple-pink);
		}

		.left-elements.notOnTheHeader #lang-menu {
			background-color: var(--futuristic-purple-pink);
		}
	}
</style>
