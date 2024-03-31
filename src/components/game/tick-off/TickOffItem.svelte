<script>
	import { teamPointsStore } from '../../../store';

	/** @type {string} */
	export let subject;
	/** @type {number} */
	export let teamId;

	let active = false;

	function switchActive() {
		active = !active;

		teamPointsStore.update((oldTeamPoints) => {
			if (!oldTeamPoints.hasOwnProperty(teamId)) {
				oldTeamPoints[teamId] = 0;
			}
			if (active) {
				oldTeamPoints[teamId]++;
			} else {
				oldTeamPoints[teamId]--;
			}
			return oldTeamPoints;
		});
	}
</script>

<li class="item clear-space {active ? 'active' : ''}">
	<button class="btn clear-space" on:click={switchActive}>
		{subject}
	</button>
</li>

<style>
	.item {
		height: fit-content;
		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	li:not(.active) {
		text-decoration: none;
		opacity: 75%;
	}
	li.active {
		text-decoration: line-through;
		opacity: 100%;
	}

	.btn {
		background-color: transparent;
		border: none;
		font-size: larger;
		color: white;
	}

	.clear-space {
		margin: 0;
		padding: 0;
	}
</style>
