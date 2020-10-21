<script>
  import Card from "./Card.svelte";
  export let data;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>

<main>
  <h1>Corona-Ampel für Coburg</h1>
  <h2>
    7-Tage Inzidenz pro 100.000 Einwohner in Coburg und Landkreis:
  </h2>
  {#each data as itemData}
    <Card data={itemData.attributes} />
  {/each}
</main>
