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
		<img src="/favicon/favicon.svg" alt="Demos society logo"/>
		<h2><span id="demos">DEMOS</span><span id="society">SOCIETY</span></h2>
	</a>
	<nav id="desktop-view">
		<ul>
			<li>
				<a href="/">Who we are</a>
			</li>
			<li>
				<a href="/simulation">Play with our simulation</a>
			</li>
		</ul>
	</nav>
	<div id="left-elements">
		<img src="/icon/flag/en.svg" alt="English flag"/>
	</div>
</header>
{@render children()}

<style>
header {
	display: flex;
	align-items: center;
	background: linear-gradient(to right, var(--futuristic-pink), var(--futuristic-purple) 30%);
	padding: 0.8rem;
	height: 6vh;
	min-height: 25px;
	width: 100%;
}

span {
	margin-left: 0.5rem;
}

#demos {
	color: white;
}

#society {
	color: var(--futuristic-dark);
}

#logo {
	display: flex;
	align-items: center;
	height: 100%;
	flex: 1;
}

nav {
	flex: 1;
	display: flex;
	justify-content: center;
}

#left-elements {
	display: flex;
	align-items: center;
	flex-shrink: 0;
	width: auto;
	max-width: 50px;
}

img {
	height: 100%;
	max-width: 100%;
}

#logo {
	flex: 0 0 auto;
}

#logo img {
	transition: transform 0.6s ease;
	transform-origin: center;
}

#logo img:hover {
	transform: rotate(360deg);
}

h2 {
	margin: 0;
	font-family: "Exo 2 Variable", sans-serif;
}

ul {
	margin: 0;
	display: flex;
	gap: 2rem;
}

li {
	list-style: none;
}

a {
	text-decoration: none;
}

li a {
	color: white;
	font-family: "Exo 2 Variable", sans-serif;
	font-weight: 600;
	padding:  1.5rem;
	border-radius: 8px;
	transition: all 0.25s ease;
	display: inline-block;
}

li a:hover {
	background-color: rgba(255, 255, 255, 0.12);
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

#left-elements {
	text-align: left;
	height: 100%;
}

@media (max-width: 768px) {

}


</style>
