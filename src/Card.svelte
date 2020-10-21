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
    h3 {
    display: inline-block;
    color: var(--inzidenz);
    font-size: 4em;
    font-weight: 400;
    padding: 0.5rem 2rem;
    border-radius: 4px;
    background-color: var(--bg);
  }
</style>

<div class={`card ${warningclass}`}>
  <h3>{Number(data.cases7_per_100k).toFixed(2)}</h3>
  <p>Bezirk: {data.BEZ},&nbsp;{data.GEN}</p>
  <p><small>Zuletzt aktualisiert: {data.last_update}</small></p>
</div>
