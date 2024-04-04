<script>
	import { createEventDispatcher } from 'svelte';
	import SubjectList from './elements/SubjectList.svelte';

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

<div>
	<h2 class="text-2xl mb-3">Hier zijn jouw woorden!</h2>
	<SubjectList />
</div>

<button
	class="transition-colors bg-primary active:bg-card rounded-md border-none p-2 text-white text-lg"
	on:click={goNext}>Overslaan</button
>
