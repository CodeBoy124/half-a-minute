<script>
	import Ready from './r-u-ready/Ready.svelte';
	import Play from './play/Play.svelte';
	import { getFiveUniqueRandomSubjects } from '$lib/subjects';
	import { subjectStore } from '../../store';
	import TickOff from './tick-off/TickOff.svelte';
	import { goto } from '$app/navigation';

	/** @type {string[]} */
	export let teams;

	let currentTeam = teams[0];
	let currentTeamIndex = 0;

	/** @type {"waitForReady" | "play" | "review"} */
	let mode = 'waitForReady';

	function startPlay() {
		const subjects = getFiveUniqueRandomSubjects();
		subjectStore.set(subjects);

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
	<Play on:next={gotoReview} />
{:else}
	<TickOff teamId={currentTeamIndex} on:next={startForNextTeam} />
{/if}
