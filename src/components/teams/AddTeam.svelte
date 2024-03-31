<script>
	import { teamsStore } from '../../store';

	let value = '';

	function addTeam() {
		teamsStore.update((oldTeam) => [...oldTeam, value]);
		value = '';
	}
</script>

<input class="input" type="text" bind:value on:submit={addTeam} />
<button class="btn" on:click={addTeam}>Add</button>

<style>
	.input {
		background-color: blueviolet;
		border-radius: 10px;
		border: rgb(167, 102, 228);
		padding: 10px;
		color: white;
		outline: none !important;
		font-size: large;
		width: 75%;
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
