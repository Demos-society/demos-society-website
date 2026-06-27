<script lang="ts">
	import { onMount } from 'svelte';
	import Starfield from './Starfield.svelte';

	const base = 'Demos IA pour une IA ';

	const phrases = [
		'démocratique',
		'qui bénéficie à tous le monde',
		'bienveillante',
		"qui prend soin de l'humanité"
	];

	let displayed = $state('');
	let index = 0;
	let running = true;

	let timeToSleep = 3000;

	function sleep(ms: number) {
		return new Promise((r) => setTimeout(r, ms));
	}

	// écrit une string complète
	async function type(text: string) {
		const start = displayed; // snapshot de ce qui est déjà affiché
		for (let i = 0; i < text.length; i++) {
			if (!running) return;
			displayed = start + text.slice(0, i + 1);
			await sleep(45 + Math.random() * 50);
		}
	}

	// efface jusqu'au prefix
	async function eraseToBase() {
		while (displayed.length > base.length) {
			if (!running) return;
			displayed = displayed.slice(0, -1);
			await sleep(30);
		}
	}

	// efface tout
	async function eraseAll() {
		while (displayed.length > 0) {
			if (!running) return;
			displayed = displayed.slice(0, -1);
			await sleep(30);
		}
	}

	async function loop() {
		while (running) {
			const phrase = phrases[index];

			const isFirst = index === 0;
			const isLast = index === phrases.length - 1;

			// 🟢 premier : base + phrase
			if (isFirst) {
				await type(base + phrase);
				await sleep(timeToSleep);
				await eraseToBase();
			}

			// 🔁 milieu : phrase seule
			else if (!isLast) {
				await type(phrase);
				await sleep(timeToSleep);
				await eraseToBase();
			}

			// 🔴 dernier : phrase seule + erase complet
			else {
				await type(phrase);
				await sleep(timeToSleep);
				await eraseAll();
				await sleep(1000);
			}

			index = (index + 1) % phrases.length;
		}
	}

	onMount(() => {
		loop();
		return () => (running = false);
	});
</script>

<div id="slogan">
	<Starfield />

	<h1 class="seo">
		Demos IA pour une IA démocratique, qui bénéficie à tous le monde, bienveillante, qui prend soin
		de l'humanité
	</h1>

	<h1 class="animated" aria-hidden="true">
		{displayed}<span class="cursor"></span>
	</h1>
</div>

<style>
	#slogan {
		position: relative;
		overflow: hidden;
		background: var(--futuristic-dark-purple);
		width: 100%;
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		position: absolute;
		margin: 0;
		font-size: 2rem;
		color: white;
		text-align: center;
		z-index: 1;
	}

	.cursor {
		display: inline-block;
		width: 3px;
		height: 1em;
		margin-left: 4px;
		background: var(--futuristic-blue);
		animation: blink 0.8s infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	.seo {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
</style>
