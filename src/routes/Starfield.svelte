<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let animationId: number;

	type Star = {
		x: number;
		y: number;
		radius: number;
		alpha: number;
		speed: number;
		twinkle: number;
	};

	let stars: Star[] = [];

	onMount(() => {
		const ctx = canvas.getContext('2d')!;

		function resize() {
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;

			stars = Array.from({ length: 100 }, () => ({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: Math.random() * 1.8 + 0.2,
				alpha: Math.random(),
				speed: Math.random() * 0.15 + 0.03,
				twinkle: Math.random() * Math.PI * 2
			}));
		}

		function animate(time: number) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (const star of stars) {
				star.y += star.speed;

				if (star.y > canvas.height) {
					star.y = 0;
					star.x = Math.random() * canvas.width;
				}

				const alpha = 0.4 + 0.6 * Math.sin(time * 0.001 + star.twinkle);

				ctx.beginPath();
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255,255,255,${alpha})`;
				ctx.shadowBlur = 8;
				ctx.shadowColor = '#ffffff';
				ctx.fill();
			}

			animationId = requestAnimationFrame(animate);
		}

		resize();
		window.addEventListener('resize', resize);

		animationId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', resize);
		};
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		display: block;
		pointer-events: none;
	}
</style>
