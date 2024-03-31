<script>
	import { teamsStore } from '../../store';

	/** @type {string} */
	export let team;

	function removeTeam() {
		teamsStore.update((currentTeams) => currentTeams.filter((currentTeam) => currentTeam !== team));
	}
</script>

<li class="container">
	<h3 class="content">
		{team}
	</h3>
	<button class="btn" on:click={removeTeam}>-</button>
</li>

<style>
	.container {
		margin: 0;
		padding: 0;

		height: fit-content;
		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.content {
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
