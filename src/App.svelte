<script>
  export let data;
  let warningclass = "yellow";

  if (data.cases7_per_100k < 35) {
    warningclass = "green";
  }

  if (data.cases7_per_100k >= 50) {
    warningclass = "red";
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    display: inline-block;
    color: var(--inzidenz);
    font-size: 4em;
    font-weight: 400;
    padding: 0.5rem 2rem;
    border-radius: 4px;
    background-color: var(--bg);
  }
</style>

<main class={warningclass}>
  <h3>
    <strong>7-Tage Inzidenz pro 100.000 Einwohner:</strong>
  </h3>
  <h1>{Number(data.cases7_per_100k).toFixed(2)}</h1>
  <h2>Bezirk: {data.BEZ},&nbsp;{data.GEN}</h2>
  <p>
    <small>Zuletzt aktualisiert: {data.last_update}</small>
  </p>
</main>
