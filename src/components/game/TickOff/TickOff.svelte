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
	<div class="flex flex-col gap-3 w-full">
		<Title>Welke woorden waren geraden?</Title>
		<TickOffList {teamId} />
	</div>

	<Button on:click={goNext} full>Volgend team</Button>
</Card>
