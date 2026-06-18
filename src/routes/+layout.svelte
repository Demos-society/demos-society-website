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
		<button id="left-element-container">
			<img id="lang-flag" src="/icon/flag/en.svg" alt="English flag" />
			<img id="burger-menu" src="/icon/burger-menu.svg" alt="Burger menu icon"/>
		</button>

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
	}

	

	#left-element-container {
		border-radius: 10px;
		height: 100%;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#left-element-container:hover {
		background-color: rgba(255, 255, 255, 0.12);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
	}

	#burger-menu {
		display: none;
	}

	@media (max-width: 1000px) {
		nav {
			display: none;
		}

		#lang-flag {
			display: none;
		}

		#burger-menu {
			display: block;
		}
	}

</style>