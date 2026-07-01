// reveal.ts
export function reveal(node: HTMLElement, options = { threshold: 0.2 }) {
	let visible = false;

	const observer = new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting && !visible) {
			visible = true;
			node.classList.add('visible');
			observer.disconnect();
		}
	}, options);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}