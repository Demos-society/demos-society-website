<script lang="ts">
	import "../app.css";
	// @ts-ignore
	import "@fontsource-variable/exo-2";
	import { slide } from "svelte/transition";

	let burgerMenuOpen = $state(false);
	let langMenuOpen = $state(false);
	let langMenuContainer: HTMLElement | null = null;
	
	let toggleBurgerMenu = () => {
		burgerMenuOpen != burgerMenuOpen;
	};

	let toggleLangMenu = () => {
		langMenuOpen = !langMenuOpen;
	};

	let handleClickOutside = (e: MouseEvent) => {
		if (langMenuOpen && langMenuContainer && !langMenuContainer.contains(e.target as Node)) {
			langMenuOpen = false;
		}
	};

	const languages = [
		{ code: 'ar', name: 'العربية' },
		{ code: 'ch', name: '中文' },
		{ code: 'de', name: 'Deutsch' },
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Español' },
		{ code: 'fr', name: 'Français' },
		{ code: 'ru', name: 'Русский' }
	];

	let { children } = $props();
</script>

<header onmousedown={handleClickOutside}>
	<a id="logo" href="/">
		<img id="logo-img" src="/favicon/favicon.svg" alt="Logo of the organization" />
		<h2><span id="demos">DEMOS</span><span id="society">SOCIETY</span></h2>
	</a>
	<nav>
		<ul>
			<li id="who-are-we"><a href="/">who are we</a></li>
			<li id="simulation"><a href="/AI/simulation">Play with our simulation</a></li>
		</ul>
	</nav>
	<div id="left-elements">
		<div id="lang-menu-container" bind:this={langMenuContainer}>
			<button id="left-element-container" onclick={toggleLangMenu}>
				<img id="lang-flag" src="/icon/flag/en.svg" alt="English flag" />
				<img id="burger-menu" src="/icon/burger-menu.svg" alt="Burger menu icon"/>
			</button>
			{#if langMenuOpen}
				<div id="lang-menu" transition:slide={{ duration: 300 }}>
					{#each languages as lang}
						<button class="lang-option" data-lang={lang.code}>
							<img src="/icon/flag/{lang.code}.svg" alt="{lang.name} flag" />
							<span>{lang.name}</span>
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>

</header>


{@render children()}

<style>

	:global(body) {
		font-family: "Exo 2 Variable", sans-serif;
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
	}

	a {
		text-decoration: none;
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
		padding:  0.5rem 1rem;
	}

	li:hover {
		background-color: rgba(255, 255, 255, 0.12);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
	}



	h2 {
		margin-left: 1rem;
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

	#society {
		margin-left: 0.5rem;
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
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
	}

	#lang-menu-container {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
	}

	#lang-menu {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		background: linear-gradient(to right, var(--futuristic-pink), var(--futuristic-purple) 33%);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
		margin-top: 0.5rem;
		min-width: 160px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		z-index: 1000;
	}

	.lang-option {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 1rem;
		background: none;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.lang-option:hover {
		background-color: rgba(255, 255, 255, 0.15);
		transform: translateX(-4px);
	}

	.lang-option img {
		width: 24px;
		height: 16px;
		border-radius: 2px;
	}

	#left-element-container {
		border-radius: 10px;
		height: 100%;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		cursor: pointer;
	}

	#left-element-container:hover {
		background-color: rgba(255, 255, 255, 0.12);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
	}

	#burger-menu {
		display: none;
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

		#lang-flag {
			display: none;
		}

		#burger-menu {
			display: block;
		}

		#left-elements {
			width: auto;
			flex-shrink: 0;
			padding-right: 0.25rem;
		}

		#left-element-container {
			padding: 0.35rem;
			min-width: 40px;
			min-height: 40px;
		}

		#lang-menu {
			min-width: 140px;
		}

		.lang-option {
			padding: 0.4rem 0.75rem;
			font-size: 0.85rem;
			gap: 0.5rem;
		}

		.lang-option img {
			width: 20px;
			height: 14px;
		}
	}

</style>