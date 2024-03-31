<script>
	import { createEventDispatcher } from 'svelte';
	import { subjectStore } from '../../../store';
	import TickOffItem from './TickOffItem.svelte';

	/** @type {number} */
	export let teamId;

	// store the value of subjectStore into subjects
	/** @type {string[]} */
	let subjects = [];
	subjectStore.subscribe((newSubjects) => {
		subjects = newSubjects;
	});

	const dispatch = createEventDispatcher();
	function goNext() {
		dispatch('next');
	}
</script>

<div>
	<h2>Welke woorden waren geraden?</h2>
	<ul class="list clear-space">
		{#each subjects as subject}
			<TickOffItem {subject} {teamId} />
		{/each}
	</ul>
</div>

<button class="btn" on:click={goNext}>Volgend team</button>

<style>
	.list {
		list-style: none;
		height: fit-content;

		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.clear-space {
		margin: 0;
		padding: 0;
	}

	.btn {
		transition: background-color 0.2s;
		background-color: blueviolet;
		border-radius: 10px;
		border: none;
		padding: 10px;
		color: white;
		font-size: large;
	}
	.btn:active {
		background-color: rgb(167, 73, 255);
	}
</style>
