import App from './App.svelte';
import data from '../actions/data.json';


const app = new App({
	target: document.body,
	props: {
		name: 'world',
		data: data.features[0].attributes
	}
});

export default app;