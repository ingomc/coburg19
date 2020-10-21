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
    margin: .5rem 1rem;
    overflow: hidden;
    width: 100%;
    background-color: var(--card-bg);
    color: var(--card-color);
  }

  @media (min-width: 768px) {
      .card {
        width:40%;
      }
  }

  @media (min-width: 1024px) {
      .card {
        width:30%;
      }
  }

  .card__row {
    display:flex;
    align-items: center;
    padding: 0.5rem;
  }

  .card__column {
    width:50%;
  }

  .card__number {
    font-size: 2rem;
    margin:0;
    padding:0;
    font-weight: 300;
  }

  .card__area {
    font-size: .7rem;
  }

  .card__city {
    font-size: 1.4rem;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .card__update {
    font-size: .5rem;
  }

  .card__cases {
    font-size: .5rem;
  }
</style>

<div class={`card ${warningclass}`}>
  <div class="card__row">
    <div class="card__column">
      <h3  class="card__number">{Number(data.cases7_per_100k).toFixed(2)}</h3>
    </div>
    <div class="card__column">
      <div class="card__area">
        {data.BEZ}
      </div>
      <div class="card__city">
        {data.GEN}
      </div>
    </div>
  </div>
  <div class="card__row">
    <div class="card__column">
      <div class="card__update">
        Stand: {data.last_update}
      </div>
    </div>
    <div class="card__column">
        <div class="card__cases">
          Fälle insgesamt: {data.cases}
        </div>
    </div>
  </div>
</div>
