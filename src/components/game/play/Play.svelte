<script>
	import { createEventDispatcher } from 'svelte';
	import { subjectStore } from '../../../store';

	// store the value of subjectStore into subjects
	/** @type {string[]} */
	let subjects = [];
	subjectStore.subscribe((newSubjects) => {
		subjects = newSubjects;
	});

	// after 30 seconds trigger an event called "next"

	const dispatch = createEventDispatcher();
	const clrTmout = setTimeout(() => {
		dispatch('next');
	}, 30000);

	function goNext() {
		clearTimeout(clrTmout);
		dispatch('next');
	}
</script>

<div>
	<h2>Hier zijn jouw woorden!</h2>
	<ul class="list clear-space">
		{#each subjects as subject}
			<li class="item clear-space">
				{subject}
			</li>
		{/each}
	</ul>
</div>

<button class="btn" on:click={goNext}>Overslaan</button>

<style>
	.list {
		list-style: none;
		height: fit-content;

		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.item {
		height: fit-content;
		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;

		font-size: larger;
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
