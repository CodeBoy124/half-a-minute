<script>
	import { createEventDispatcher } from 'svelte';
	import TickOffList from './elements/TickOffList.svelte';

	/** @type {number} */
	export let teamId;

	const dispatch = createEventDispatcher();
	function goNext() {
		dispatch('next');
	}
</script>

<div>
	<h2 class="text-2xl mb-3">Welke woorden waren geraden?</h2>
	<TickOffList {teamId} />
</div>

<button
	class="transition-colors bg-primary active:bg-card rounded-md border-none p-2 text-white text-lg"
	on:click={goNext}>Volgend team</button
>
