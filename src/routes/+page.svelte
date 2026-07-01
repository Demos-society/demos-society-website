<script lang="ts">
	import Slogan from './Slogan.svelte';
	import { theme } from '$lib/stores/theme';
	import { reveal } from '$lib/actions/reveal';
</script>

<Slogan></Slogan>

<div class="container reveal "  id="public-interest" use:reveal>
	<h2>Pour que l'IA soit bénéfique à l'humanité</h2>
	<div class="text-img">
		<div class="text">
			<p>
				Chez Demos IA, nous pensons que l'intelligence artificielle n'est ni bonne ni mauvaise en
				elle-même. Comme toute technologie, son impact dépend des choix que nous faisons quant à son
				développement et à son utilisation.
			</p>

			<p>
				L'IA transforme déjà notre société de manière positive. En médecine, elle accélère la
				découverte de nouveaux traitements et ouvre la voie à des thérapies pour des maladies
				jusqu'ici considérées comme incurables. Dans le domaine scientifique, elle permet aux
				chercheurs d'effectuer des découvertes plus rapidement et d'améliorer notre compréhension du
				monde. À plus long terme, elle pourrait également accroître considérablement la productivité
				de notre économie, réduisant le temps de travail nécessaire pour produire les biens et
				services dont nous avons besoin et offrant à chacun davantage de temps libre.
			</p>

			<p>
				Mais l'intelligence artificielle représente également des risques majeurs. Elle pourrait
				concentrer un pouvoir économique et technologique sans précédent entre les mains d'un petit
				nombre d'acteurs, accroître les inégalités en remplaçant de nombreux emplois, renforcer les
				capacités de surveillance des États et des entreprises, faciliter le développement d'armes
				autonomes capables de prendre des décisions létales sans intervention humaine, accélérer la
				conception d'agents biologiques dangereux ou encore rendre les cyberattaques plus puissantes
				en compromettant des infrastructures critiques.
			</p>
			<p>
				La mission de Demos IA est donc simple, faire en sorte que le développement de
				l'intelligence artificielle bénéficie au plus grand nombre et serve l'intérêt général, en
				maximisant ses aspect positif et en minimisant ses aspect negatif.
			</p>
		</div>
		<hr />
		<div class="img-container">
			<img src="/mutual-help.svg" alt="Mutual help symbol" />
		</div>
	</div>
</div>

<div class="container reveal {theme}" class:light={$theme === 'light'} class:dark={$theme === 'dark'}  id="democracy" use:reveal>
	<h2>Pour une IA démocratique</h2>
	<div class="text-img">
		<div class="img-container">
			<img src="/democracy.svg" alt="democracy symbol" />
		</div>
		<hr />
		<div class="text">
			<p>
				Pour atteindre cet objectif, nous pensons que le développement de l'intelligence
				artificielle doit devenir plus démocratique.
			</p>

			<p>
				Aujourd'hui, cette technologie est principalement développée par un nombre très limité
				d'acteurs privés (grandes entreprises technologiques, fonds d'investissement etc...). Une
				telle concentration du pouvoir technologique soulève une question fondamentale de légitimité
				démocratique.
			</p>

			<p>
				Les personnes qui conçoivent ces systèmes ne reflètent qu'imparfaitement la diversité
				démographique des sociétés dans lesquelles ils seront déployés. Les choix de conception, les
				priorités de recherche et les orientations stratégiques sont donc souvent guidés par des
				intérêts économiques ou géopolitiques, plutôt que par une réflexion collective sur l'intérêt
				général.
			</p>
			<p>
				Chez Demos IA, nous souhaitons réintroduire une dimension démocratique dans le développement
				de l'intelligence artificielle. Nous sommes convaincus que l'intelligence collective de
				millions de citoyens peut produire de meilleures décisions qu'un petit nombre d'acteurs
				agissant seuls.
			</p>
		</div>
	</div>
</div>

<div class="container-txt reveal" id="action-pincipal" use:reveal>
	<h2>Nos principes d'action</h2>
	<div class="text">
		<p>
			Contrairement à de nombreuses associations, Demos IA ne défend pas un ensemble de mesures
			figées.
		</p>

		<p>Notre priorité est de poursuivre nos deux missions fondamentales :</p>
		<ul>
			<li>
				<a href="#public-interest"
					>faire en sorte que le développement de l'intelligence artificielle bénéficie à l'humanité</a
				>
			</li>
			<li><a href="#democracy">favoriser un développement de l'IA plus démocratique</a></li>
		</ul>

		<p>
			Nous sommes conscients qu'une telle approche peut rendre notre association moins lisible pour
			le grand public ou certains décideurs politiques. C'est cependant un choix assumé.
		</p>
		<p>
			Nous pensons qu'il n'existe pas de solution optimal et intemporelle. Certaine solution les
			plus pertinentes aujourd'hui ne seront peut-être plus adaptées dans dix ans. Les progrès
			technologiques, les évolutions économiques et les transformations de la société imposent
			d'adapter en permanence nos propositions.
		</p>
		<p>
			Notre objectif n'est donc pas de défendre des mesures immuables, mais d'identifier en
			permanence les actions ayant le plus fort impact positif pour la société.
		</p>
	</div>
</div>

<div class="container-txt reveal" id="your-actions" use:reveal>
	<h2>Ce que nous voulons faire</h2>
	<div class="text">
		<p>
			Même si nous ne défendons pas un programme figé, nous souhaitons mener des actions concrètes.
		</p>

		<p>
			Notre premier projet consiste à développer une simulation interactive, à mi-chemin entre un
			jeu de rôle et un simulateur, permettant d'explorer différents scénarios d'évolution de
			l'intelligence artificielle.
		</p>
		<p>
			Cette simulation permettra aux citoyens, aux entreprises, aux chercheurs, aux associations et
			aux responsables politiques de tester différentes décisions et d'en observer les conséquences
			sur la société. L'objectif est d'aider chacun à mieux comprendre les enjeux de l'IA et à
			identifier les stratégies les plus bénéfiques pour l'humanité. (Pour en savoir plus sur notre
			simulation cliqué ici)
		</p>
		<p>
			Les résultats obtenus par les participants nous permettront ensuite d'identifier les
			propositions les plus pertinentes afin d'orienter les actions de l'association.
		</p>
	</div>
</div>

<style>
	/** {
		outline: 1px solid red;
	}*/

	.container {
		width: 100%;
		min-height: 100vh;
		padding: 2rem;
		box-sizing: border-box;
		justify-content: center;
		align-items: center;
	}

	li {
		list-style: none;
		margin-bottom: 1rem;
	}

	li::before {
		content: '- ';
		color: var(--futuristic-purple-pink);
	}

	a {
		font-weight: bold;
		font-size: 1.1rem;
	}

	p {
		font-weight: bold;
		font-size: 1.1rem;
	}

	.container-txt {
		width: 100%;
		padding: 2rem;
		box-sizing: border-box;
		justify-content: center;
		align-items: center;
	}
	.text-img {
		display: flex;
		justify-content: space-between;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}

	.reveal {
		opacity: 0;
		transform: translateY(24px);
		transition:
			opacity 600ms ease,
			transform 600ms ease;
		will-change: opacity, transform;
	}

	.reveal.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.img-container {
		width: 45%;
		height: 100%;
		padding: 3rem;
	}

	.img-container img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}

	.text-img .text {
		width: 45%;
	}

	.text-img hr {
		align-self: stretch;
	}

	/*.container.light {
		background-color: white;
		color: black;
	}

	.container.dark {
		background-color: black;
		color: white;
	}*/

	h2 {
		text-align: center;
		font-size: 2rem;
	}

	#public-interest.light {
		background: linear-gradient(to bottom, black, rgba(255, 255, 255, 1) 2rem);
	}

	@media (max-width: 1000px) {
		hr {
			display: none;
		}

		h2 {
			z-index: 100;
		}

		.text-img .text {
			width: 100%;
			z-index: 100;
		}

		.img-container {
			width: 80%;
			position: absolute;
			opacity: 50%;
		}
	}
</style>
