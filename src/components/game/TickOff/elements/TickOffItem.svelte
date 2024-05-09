<script>
	import { teamPointsStore } from '$lib/store';
	import Label from '../../../Label/Label.svelte';

	/** @type {string} */
	export let subject;
	/** @type {number} */
	export let teamId;

	let active = false;

	function switchActive() {
		active = !active;

		teamPointsStore.update((oldTeamPoints) => {
			// initial set
			if (!oldTeamPoints.hasOwnProperty(teamId)) oldTeamPoints[teamId] = 0;

			// update
			if (active) {
				oldTeamPoints[teamId]++;
			} else {
				oldTeamPoints[teamId]--;
			}

			// return
			return oldTeamPoints;
		});
	}
</script>

<li
	class="h-fit w-full flex justify-between items-center {active
		? 'line-through opacity-100'
		: 'no-underline opacity-50'}"
>
	<button on:click={switchActive} class="w-full">
		<Label>{subject}</Label>
	</button>
	<!-- <button class="bg-transparent border-none text-lg text-white" on:click={switchActive}>
		{subject}
	</button> -->
</li>
