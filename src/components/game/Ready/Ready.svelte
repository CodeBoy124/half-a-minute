<script>
	import { createEventDispatcher } from 'svelte';
	import { teamPointsStore } from '$lib/store';

	/** @type {string} */
	export let currentTeam;
	/** @type {string[]} */
	export let teamNames;

	// When the user is ready dispatch an event
	const dispatch = createEventDispatcher();
	function imReady() {
		dispatch('ready');
	}

	// use teamPointsStore to showcase the current points
	/** @type {{[index: number]: number}}*/
	let teamPoints = {};
	teamPointsStore.subscribe((newPoints) => {
		teamPoints = newPoints;
	});

	// show the score using the following format: <Team>: <Points> - <Team>: <Points> - etc.
	function showScoring() {
		/** @type {string[]} */
		let scoreStr = [];

		for (let teamId = 0; teamId < teamNames.length; teamId++) {
			const hasExistingScore = teamPoints.hasOwnProperty(teamId);
			scoreStr.push(`${teamNames[teamId]}: ${hasExistingScore ? teamPoints[teamId] : 0}`);
		}

		return scoreStr.join(' - ');
	}

	$: scoringDisplay = showScoring();
</script>

<div class="w-full h-full flex items-center justify-center flex-col gap-3">
	<h1 class="text-3xl">
		Jij bent, {currentTeam}
	</h1>
	<span>{scoringDisplay}</span>
	<button
		class="transition-colors bg-primary active:bg-card rounded-md border-none p-2 text-white text-lg"
		on:click={imReady}>Ik ben er klaar voor!</button
	>
</div>
