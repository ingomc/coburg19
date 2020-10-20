<script>
	export let data;
</script>

<main>
	<h3><strong>7-Tage Inzidenz pro 100.000 Bewohner:</strong></h3>
	<h1>{data.cases7_per_100k}</h1>
	<h2>Bezirk: {data.BEZ},&nbsp;{data.GEN}</h2>
	<p><small>Zuletzt aktualisiert: {data.last_update}</small></p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>