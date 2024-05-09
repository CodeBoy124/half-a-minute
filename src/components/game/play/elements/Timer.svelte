<script>
	import { onDestroy } from 'svelte';

	export let value = 10;

	const decreaseInterval = setInterval(() => {
		value -= 1;
	}, 1000);

	onDestroy(() => {
		clearInterval(decreaseInterval);
	});
</script>

<div
	class="absolute right-3 top-3 w-8 h-8 flex justify-center items-center transition-colors {value >=
	10
		? 'bg-btn text-text'
		: 'bg-red text-title'} rounded-full"
>
	<p>{value}</p>
</div>
