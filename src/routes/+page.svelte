<script lang="ts">
	import Starfield from './Starfield.svelte';
</script>

<div id="slogan">
	<Starfield />
	<h1>Demos IA pour une IA démocratique</h1>
</div>

<style>
	h1 {
		font-size: 2rem;
		margin: 0;
		color: white;
		text-align: center;
	}

	#slogan {
		background-color: var(--futuristic-dark-purple);
		width: 100%;
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
