<script>
	export let fit = false;
	export let freescale = false;
</script>

<div
	class="{fit ? 'h-fit flex-none' : 'h-full flex-1'} w-full {freescale
		? 'max-w-[650px]'
		: 'max-w-[650px] max-h-[650px]'} p-7 rounded-xl bg-card flex flex-col justify-between items-center relative"
>
	<slot />
</div>
