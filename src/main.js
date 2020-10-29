import App from './App.svelte';
import { locations } from '../generated/data.json';


const app = new App({
	target: document.body,
	props: {
		data: locations
	}
});

export default app;