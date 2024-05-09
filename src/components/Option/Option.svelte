<script>
	export /** @type {string} */ let value;
	export let selected = false;
</script>

<option {value} {selected}>
	<slot />
</option>
