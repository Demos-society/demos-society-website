<script lang="ts">
	import Navbar from './Navbar.svelte';

	let burgerMenuOpen = $state(false);

	let toggleBurgerMenu = () => {
		burgerMenuOpen = !burgerMenuOpen;
	};

	let { children } = $props();
</script>

<header>
	<a id="logo" href="/">
		<img id="logo-img" src="/favicon/favicon.svg" alt="Logo of the organization" />

		<h2>
			<span id="demos">DEMOS</span>
			<span id="AI">AI</span>
		</h2>
	</a>
	<Navbar {toggleBurgerMenu} {burgerMenuOpen} onTheHeader={true} />
</header>
{#if burgerMenuOpen}
	<div id="slider-container">
		<Navbar {toggleBurgerMenu} {burgerMenuOpen} onTheHeader={false} />
	</div>
{/if}

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

	:global([dir='rtl']) header {
		background: linear-gradient(to left, var(--futuristic-pink), var(--futuristic-purple) 33%);
	}

	a {
		text-decoration: none;
	}

	h2 {
		margin: 0 1rem;
		display: flex;
	}

	:global([dir='rtl']) h2 {
		direction: ltr;
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

	#slider-container {
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

	    #slider-container {
			height: 90vh;
			width: 100%;
			display: flex;
			flex-direction: column;
			position: absolute;
			z-index: 10;
			
			background: var(--futuristic-purple);
		}
	}
</style>
