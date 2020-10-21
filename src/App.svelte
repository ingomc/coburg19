<script>
  import Card from "./Card.svelte";
  import Header from "./Header.svelte";
  export let data;
  let sortedData = [];
  data.forEach(element => {
    // SORT COBURG TO THE TOP
    const city = element.attributes.GEN.toLowerCase(); 
    const coburg = 'coburg';
    if (city.includes(coburg)) {
      sortedData.unshift(element);
    }
      sortedData.push(element);
  });
</script>

<style>
</style>

<main>
  <Header />
  <div class="container">
    {#each sortedData as itemData}
      <Card data={itemData.attributes} />
    {/each}
  </div>
</main>
