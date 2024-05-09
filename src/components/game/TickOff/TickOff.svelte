<script>
	import { createEventDispatcher } from 'svelte';
	import TickOffList from './elements/TickOffList.svelte';
	import Card from '../../Card/Card.svelte';
	import Button from '../../Button/Button.svelte';
	import Title from '../../Title/Title.svelte';

	/** @type {number} */
	export let teamId;

	const dispatch = createEventDispatcher();
	function goNext() {
		dispatch('next');
	}
</script>

<Card>
	<div class="flex flex-col gap-3">
		<Title>Welke woorden waren geraden?</Title>
		<!-- <h2 class="text-2xl mb-3">Welke woorden waren geraden?</h2> -->
		<TickOffList {teamId} />
	</div>

	<Button on:click={goNext} full>Volgend team</Button>
	<!-- <button
		class="transition-colors bg-primary active:bg-card rounded-md border-none p-2 text-white text-lg"
		on:click={goNext}>Volgend team</button
	> -->
</Card>
