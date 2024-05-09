<script>
	import { configStore } from '$lib/store';
</script>

<select
	bind:value={$configStore.subjectType}
	class="w-full transition-colors bg-label p-2 rounded-md border-2 border-border outline-none"
>
	<slot />
</select>
