<script>
  import { onMount } from 'svelte';
  export let data;

  let warningclass = 'warning';

  if (data.cases7_per_100k < 35) {
    warningclass = 'info';
  }

  if (data.cases7_per_100k >= 50 && data.cases7_per_100k < 100) {
    warningclass = 'danger';
  }

  if (data.cases7_per_100k >= 100) {
    warningclass = 'superdanger';
  }

  const apiURL = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=(NeuerFall%20IN(1%2C%20-1))%20AND%20(IdLandkreis%3D%27${data.RS}%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true`;

  let promise = getNewCases();

  async function getNewCases() {
    const res = await fetch(apiURL);
    const json = await res.json();
    const resp = json.features[0].attributes.value;

    if (res.ok) {
      return resp == null ? 0 : resp;
    } else {
      throw new Error(json);
    }
  }

  onMount(async function () {
    promise = getNewCases();
  });
</script>

<style>
  .card {
    display: block;
    padding: 1rem;
    border-radius: 4px;
    margin: 0.5rem 1rem;
    overflow: hidden;
    width: 100%;
    background-color: var(--card-bg);
    color: var(--card-color);
    user-select: none;
  }

  @media (min-width: 768px) {
    .card {
      width: 40%;
      margin: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    .card {
      width: 31%;
    }
  }

  .card__row {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  .card__column {
    width: 50%;
  }

  .card__number {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    font-weight: 500;
  }

  .card__area {
    font-size: 0.7rem;
  }

  .card__city {
    font-size: 1.4rem;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .card__cases {
    font-size: 0.7rem;
  }
</style>

<div class={`card ${warningclass}`}>
  <div class="card__row">
    <div class="card__column">
      <h3 class="card__number">{Number(data.cases7_per_100k).toFixed(2)}</h3>
    </div>
    <div class="card__column">
      <div class="card__area">{data.BEZ}</div>
      <div class="card__city">{data.GEN}</div>
    </div>
  </div>
  <div class="card__row">
    <div class="card__column">
      <div class="card__cases">
        {#await promise}Neue Fälle: ...{:then number}Neue Fälle: {number}{:catch error}...{/await}
      </div>
    </div>
    <div class="card__column">
      <div class="card__cases">Fälle insgesamt: {data.cases}</div>
    </div>
  </div>
</div>
