<script>
	export let isBetween = false;
</script>

<div
	class="bg-label p-2 rounded-md w-full flex justify-{isBetween
		? 'between'
		: 'center'} items-center"
>
	<slot />
</div>
