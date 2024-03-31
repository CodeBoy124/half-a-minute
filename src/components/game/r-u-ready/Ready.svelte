<script>
	import { createEventDispatcher } from 'svelte';
	import { teamPointsStore } from '../../../store';

	/** @type {string} */
	export let currentTeam;
	/** @type {string[]} */
	export let teamNames;

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

	function showScoring() {
		// show the score using the following format: <Team>: <Points> - <Team>: <Points> - etc.
		/** @type {string[]} */
		let scoreStr = [];
		for (let teamId = 0; teamId < teamNames.length; teamId++) {
			if (teamPoints.hasOwnProperty(teamId)) {
				scoreStr.push(`${teamNames[teamId]}: ${teamPoints[teamId]}`);
			} else {
				scoreStr.push(`${teamNames[teamId]}: 0`);
			}
		}

		return scoreStr.join(' - ');
	}

	$: scoringDisplay = showScoring();
</script>

<div class="container">
	<h1 class="title">
		Jij bent, {currentTeam}
	</h1>
	<span>{scoringDisplay}</span>
	<button class="btn" on:click={imReady}>Ik ben er klaar voor!</button>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 15px;
	}

	.title {
		padding: 0;
		margin: 0;
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
