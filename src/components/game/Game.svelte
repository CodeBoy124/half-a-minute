<script>
	import Ready from './Ready/Ready.svelte';
	import Play from './play/Play.svelte';
	import { getUniqueRandomSubjects } from '$lib/subjects';
	import { configStore, subjectStore, teamPointsStore } from '$lib/store';
	import TickOff from './TickOff/TickOff.svelte';
	import Win from './Win/Win.svelte';

	/** @type {string[]} */
	export let teams;

	let currentTeam = teams[0];
	let startTeam = teams[0];
	let currentTeamIndex = 0;

	/** @type {"waitForReady" | "play" | "review" | "win"} */
	let mode = 'waitForReady';

	// progression actions
	function startPlay() {
		const subjects = getUniqueRandomSubjects();
		$subjectStore = subjects;

		mode = 'play';
	}

	function gotoReview() {
		mode = 'review';
	}

	function startForNextTeam() {
		currentTeamIndex++;
		if (currentTeamIndex >= teams.length) {
			currentTeamIndex = 0;
		}
		currentTeam = teams[currentTeamIndex];

		mode = 'waitForReady'
		if(currentTeam == startTeam && Math.max(...Object.values($teamPointsStore)) >= $configStore.winPoints) {
			mode = 'win'
		}
	}
</script>

{#if mode == 'waitForReady'}
	<Ready {currentTeam} on:ready={startPlay} teamNames={teams} />
{:else if mode == 'play'}
	<Play on:next={gotoReview} duration={$configStore.duration} />
{:else if mode == 'win'}
	<Win teamNames={teams} />
{:else}
	<TickOff teamId={currentTeamIndex} on:next={startForNextTeam} />
{/if}
