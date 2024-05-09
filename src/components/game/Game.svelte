<script>
	import Ready from './Ready/Ready.svelte';
	import Play from './play/Play.svelte';
	import { getUniqueRandomSubjects } from '$lib/subjects';
	import { configStore, subjectStore } from '$lib/store';
	import TickOff from './TickOff/TickOff.svelte';

	/** @type {string[]} */
	export let teams;

	let currentTeam = teams[0];
	let currentTeamIndex = 0;

	/** @type {"waitForReady" | "play" | "review"} */
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

		mode = 'waitForReady';
	}
</script>

{#if mode == 'waitForReady'}
	<Ready {currentTeam} on:ready={startPlay} teamNames={teams} />
{:else if mode == 'play'}
	<Play on:next={gotoReview} duration={$configStore.duration} />
{:else}
	<TickOff teamId={currentTeamIndex} on:next={startForNextTeam} />
{/if}
