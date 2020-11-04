<style>
  .message {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    background-color: var(--header-bg);
    border-radius: 4px;
    max-width: 700px;
    text-align: center;
  }

  svg {
    display:block;
  }

  .icon {
    margin-right: 1rem;
    animation: rotate .7s ease-in-out infinite forwards;
    transform-origin: 50% 50%;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg) scaleX(-1);
    }
    to {
      transform: rotate(360deg) scaleX(-1);
    }
  }
</style>

<div class="message">
  <div class="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      focusable="false"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"><path
        d="M8.625 8.5h-4.5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v3.5h3.5a1 1 0 0 1 0 2z"
        fill="currentColor" />
      <path
        class="uim-primary"
        d="M21 13a1 1 0 0 1-1-1A7.995 7.995 0 0 0 5.08 8.001a1 1 0 0 1-1.731-1.002A9.995 9.995 0 0 1 22 12a1 1 0 0 1-1 1zm-1.125 9a1 1 0 0 1-1-1v-3.5h-3.5a1 1 0 0 1 0-2h4.5a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1z"
        fill="currentColor" />
      <path
        class="uim-primary"
        d="M12 22A10.012 10.012 0 0 1 2 12a1 1 0 0 1 2 0a7.995 7.995 0 0 0 14.92 3.999a1 1 0 0 1 1.731 1.002A10.032 10.032 0 0 1 12 22z"
        fill="currentColor" /></svg>
  </div>
  <slot />
</div>
