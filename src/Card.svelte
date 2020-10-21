<script>
  export let data;
    let warningclass = "warning";

  if (data.cases7_per_100k < 35) {
    warningclass = "info";
  }

  if (data.cases7_per_100k >= 50) {
    warningclass = "danger";
  }
</script>

<style>
  .card {
    display:block;
    padding:1rem;
    border-radius: 4px;
    margin: 1rem;

    background-color: var(--card-bg);
    color: var(--card-color);
  }
</style>

<div class={`card ${warningclass}`}>
  <h3>{Number(data.cases7_per_100k).toFixed(2)}</h3>
  <p>Bezirk: {data.BEZ},&nbsp;{data.GEN}</p>
  <p>Fälle insgesamt: {data.cases}</p>
  <p><small>Zuletzt aktualisiert: {data.last_update}</small></p>
</div>
