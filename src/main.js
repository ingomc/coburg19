import App from './App.svelte';
import { date, locations } from '../generated/data.json';

const app = new App({
  target: document.body,
  props: {
    data: locations,
    date
  },
});

export default app;
