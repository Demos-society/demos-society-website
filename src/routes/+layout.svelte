<script lang="ts">
	import "../app.css";
	// @ts-ignore
	import "@fontsource-variable/exo-2";


	let burgerMenuOpen = $state(false);
	
	let toggleBurgerMenu = () => {
		burgerMenuOpen != burgerMenuOpen;
	};



	let { children } = $props();
</script>

<header>
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
		<div id="lang-container">
			<img src="/icon/flag/en.svg" alt="English flag" />
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
		background-color: red;
		padding: 0.5rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
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
	}

	li {
		list-style: none;
		font-size: 1.2rem;
	}

	

	#logo {
		height: 100%;
		width: 33%;
		display: flex;
		align-items: center;
		background-color: blue;
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
		background-color: green;
		width: 34%;
		height: 100%;
	}

	#left-elements {
		background-color: yellow;
		width: 33%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	#left-elements img:hover {
		cursor: pointer;
	}

	#lang-container {
		border-radius: 10px;
		padding: 0.5rem;
		background-color: var(--futuristic-dark);
		height: 100%;
	}

</style>