<script>
	import { createEventDispatcher } from 'svelte';
	import SubjectList from './elements/SubjectList.svelte';
	import Title from '../../Title/Title.svelte';
	import Button from '../../Button/Button.svelte';
	import Card from '../../Card/Card.svelte';
	import Timer from './elements/Timer.svelte';

	export let duration = 30;

	function gotoReview() {
		dispatch('next');
		const audio = new Audio('./ping-contact-cinematic-trailer-sound-effects-124764.mp3');
		audio.play();
	}

	// after 30 seconds trigger an event called "next"
	const dispatch = createEventDispatcher();
	const dispatchTimeout = setTimeout(() => {
		gotoReview();
	}, duration * 1000);

	// skip
	function goNext() {
		clearTimeout(dispatchTimeout);
		gotoReview();
	}
</script>

<Card>
	<Timer value={duration} />

	<div class="flex flex-col gap-3 w-full">
		<Title>Omschrijf deze woorden</Title>
		<SubjectList />
	</div>

	<Button on:click={goNext} full>Overslaan</Button>
</Card>
