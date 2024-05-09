<script>
	import { teamsStore } from '$lib/store';
	import Button from '../../Button/Button.svelte';
	import Label from '../../Label/Label.svelte';

	/** @type {string} */
	export let team;

	function removeTeam() {
		$teamsStore = $teamsStore.filter((currentTeam) => currentTeam !== team);
	}
</script>

<li class="h-fit w-full flex justify-between items-center">
	<Label isBetween>
		<h3>
			{team}
		</h3>
		<Button on:click={removeTeam} transparent>-</Button>
	</Label>
</li>
