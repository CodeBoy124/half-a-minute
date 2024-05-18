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
		? 'opacity-100'
		: 'line-through opacity-50'}"
>
	<button on:click={switchActive} class="w-full">
		<Label isBetween>
			<p>{subject}</p>
			<div class="w-2 h-2 rounded-full transition-colors {active ? 'bg-green' : 'bg-red'}"></div>
		</Label>
	</button>
</li>
