<script>
  import { fade, fly } from 'svelte/transition';
  let visible = false;
  setTimeout(function () {
    visible = true;
  }, 1000);
  setTimeout(function () {
    visible = false;
  }, 3000);
</script>

<style>
  .header {
    display: block;
    position: sticky;
    top: 0;
  }
  header {
    display: block;
    position: relative;
    background-color: var(--header-bg);
    text-align: center;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.6);
    z-index:10;
  }

  .wrapper {
    padding: 0.75rem 1rem;
  }

  h1 {
    font-size: 5vw;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 2.2vw;
    padding: 0 1rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 0.7rem;
    }
  }
  @media (min-width: 1024px) {
    .wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .message {
    position: absolute;
    bottom: -3rem;
    left: 0;
    right: 0;
    text-align: center;
    z-index:5;
  }
</style>

<div class="header">
  <header>
    <div class="wrapper container">
      <h1>🚦 Corona-Ampel für Coburg 🚦</h1>
      <h2>7 Tage Inzidenz für Coburg und Landkreis:</h2>
    </div>
  </header>
  {#if visible}
    <div class="message" in:fly={{ y: -100, duration: 1000 }} out:fly={{ y: -100, duration: 1000 }}>
      <slot />
    </div>
  {/if}
</div>
