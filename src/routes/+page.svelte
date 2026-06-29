<script lang="ts">
	import { onMount } from 'svelte';
	import Starfield from './Starfield.svelte';
	import { theme } from '$lib/stores/theme';

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
	let reflectionTime = 750;

	function sleep(ms: number) {
		return new Promise((r) => setTimeout(r, ms));
	}

	async function type(text: string) {
		const start = displayed;

		for (let i = 0; i < text.length; i++) {
			if (!running) return;
			displayed = start + text.slice(0, i + 1);
			await sleep(40 + Math.random() * 40);
		}
	}

	async function eraseToBase() {
		while (displayed.length > base.length) {
			if (!running) return;
			displayed = displayed.slice(0, -1);
			await sleep(35);
		}
	}

	async function eraseAll() {
		while (displayed.length > 0) {
			if (!running) return;
			displayed = displayed.slice(0, -1);
			await sleep(35);
		}
	}

	async function loop() {
		while (running) {
			const phrase = phrases[index];
			const isFirst = index === 0;
			const isLast = index === phrases.length - 1;

			if (isFirst) {
				await type(base + phrase);
				await sleep(timeToSleep);
				await eraseToBase();
				await sleep(reflectionTime);
			} else if (!isLast) {
				await type(phrase);
				await sleep(timeToSleep);
				await eraseToBase();
				await sleep(reflectionTime);
			} else {
				await type(phrase);
				await sleep(timeToSleep);
				await eraseAll();
				await sleep(800);
			}

			index = (index + 1) % phrases.length;
		}
	}

	onMount(() => {
		loop();
		return () => (running = false);
	});
</script>

<div id="slogan" class={$theme}>
	<Starfield />

	<div class="container">
		<div class="text">
			<h1>
				{displayed}
			</h1>
		</div>

		<div class="image">
			<img src="/mysterious-earth.webp" alt="Earth" />
		</div>
	</div>
</div>

<style>
	#slogan {
		width: 100%;
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		position: relative;
	}

	/* layout principal */
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: min(1100px, 90%);
		gap: 4rem;
		z-index: 1;
	}

	/* texte */
	.text {
		flex: 1;
		display: flex;
		align-items: flex-start; /* ancrage haut */
		justify-content: flex-start;
	}

	h1 {
		margin: 0;
		font-size: 2.5rem;
		line-height: 2;

		/* Hauteur fixe = 2 lignes max */
		min-height: 2lh; /* 2 × line-height */
	}

	/* image ronde */
	.image img {
		width: 80vh;
		height: 80vh;
		border-radius: 50%;
		object-fit: cover;
		overflow: visible;

		/* glow extérieur */
		box-shadow: 0 0 80px 30px rgba(155, 90, 255, 0.4);

		/* masque : fondu plus progressif, commence à 55% au lieu de 65% */
		-webkit-mask-image: radial-gradient(circle, black 50%, transparent 75%);
		mask-image: radial-gradient(circle, black 50%, transparent 75%);

		/* screen fusionne le noir de l'image avec le fond noir → invisible */
		mix-blend-mode: screen;
	}

	h1::after {
		content: '';
		display: inline-block;
		width: 3px;
		height: 0.75em;
		margin-left: 6px;
		background: var(--futuristic-blue);
		vertical-align: -0.05em;
		animation: blink 0.8s infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	@media (orientation: portrait) {
		.container {
			justify-content: center;
			padding: 1rem;
		}

		.image {
			position: absolute;
		}

		.image img {
			height: 95vw;
			width: 95vw;
		}

		.text {
			align-items: center;
			justify-content: center;
		}
	}
</style>
