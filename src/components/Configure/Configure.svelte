<script>
	import { createEventDispatcher } from 'svelte';
	import { subjects } from '$lib/subjects';
	import { configStore } from '$lib/store';
	import Button from '../Button/Button.svelte';
	import Title from '../Title/Title.svelte';
	import InputTitle from '../InputTitle/InputTitle.svelte';
	import InputGroup from '../InputGroup/InputGroup.svelte';
	import Select from '../Select/Select.svelte';
	import Option from '../Option/Option.svelte';
	import NumberInput from '../Input/NumberInput.svelte';
	import Card from '../Card/Card.svelte';

	const dispatch = createEventDispatcher();
	function ready() {
		dispatch('ready');
	}
</script>

<Card>
	<Title>Configuratie</Title>

	<div class="w-full h-full flex flex-col justify-evenly items-center">
		<InputGroup>
			<InputTitle>Onderwerpen</InputTitle>
			<Select>
				{#each subjects.subjects as subject, index}
					<Option value={subject} selected={index === 0}>{subject}</Option>
				{/each}
				<Option value="All">Alles</Option>
			</Select>
		</InputGroup>

		<InputGroup>
			<InputTitle>Tijd in sec.</InputTitle>
			<NumberInput bind:value={$configStore.duration} />
		</InputGroup>

		<InputGroup>
			<InputTitle>Woorden per keer</InputTitle>
			<NumberInput bind:value={$configStore.words} />
		</InputGroup>
	</div>

	<Button on:click={ready} full>Volgende</Button>
</Card>
