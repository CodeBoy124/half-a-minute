<script>
	export let transparent = false;
	export let full = false;
</script>

<button
	class="transition-colors p-2 border-none outline-none text-white text-lg {full
		? 'w-full'
		: ''} {transparent ? 'bg-transparent px-3' : 'bg-btn active:bg-card px-2 rounded-md'}"
	on:click
>
	<slot />
</button>
