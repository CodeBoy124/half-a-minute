<script>
	import { createEventDispatcher, onMount } from 'svelte';

	export /** @type {any} */ let value = '';
	export /** @type {any} */ let placeholder = '';
	export let outline = true;
	export let autofocus = false;

	const dispatch = createEventDispatcher();

	// emit submit on enter
	function onKeyDown(/** @type {KeyboardEvent} */ e) {
		if (e.key !== 'Enter') return;
		dispatch('submit');
	}

	/** @type {HTMLInputElement} */ let inputElement;
	onMount(() => {
		if (!autofocus) return;
		inputElement.focus();
	});
</script>

<div
	class="w-full flex justify-between items-center transition-colors bg-label p-2 rounded-md {outline
		? 'border-2 border-border'
		: ''} outline-none"
>
	<input
		class="flex-1 bg-label border-none outline-none placeholder-placeholder placeholder:italic"
		type="text"
		bind:value
		bind:this={inputElement}
		{placeholder}
		on:submit
		on:keydown={onKeyDown}
	/>
	<slot />
</div>
