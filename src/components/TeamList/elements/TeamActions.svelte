<script>
	import { teamsStore } from '$lib/store';
	import Button from '../../Button/Button.svelte';
	import TextInput from '../../Input/TextInput.svelte';

	let value = '';

	function addTeam() {
		if (value === '') return;

		$teamsStore = [...$teamsStore, value];
		value = '';
	}
</script>

<div class="w-full flex flex-col gap-5">
	<TextInput placeholder="Nieuw team..." bind:value on:submit={addTeam} outline={false}>
		<Button on:click={addTeam} transparent>+</Button>
	</TextInput>
	<Button on:click full>Door</Button>
</div>
