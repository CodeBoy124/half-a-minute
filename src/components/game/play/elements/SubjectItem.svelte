<script>
	import Label from '../../../Label/Label.svelte';

	/** @type {string} */
	export let subject;
</script>

<li class="h-fit w-full flex justify-between items-center text-lg">
	<Label>
		{subject}
	</Label>
</li>
