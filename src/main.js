import App from './App.svelte';
import { features } from '../fetch-api-data-action/data.json';


const app = new App({
	target: document.body,
	props: {
		data: features
	}
});

export default app;