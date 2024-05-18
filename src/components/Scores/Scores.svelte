<script>
	import { teamPointsStore } from '$lib/store';

	/** @type {string[]} */
	export let teamNames;

	function showScoring() {
		let scorePieces = [];

		for (let teamId = 0; teamId < teamNames.length; teamId++) {
			const hasExistingScore = $teamPointsStore.hasOwnProperty(teamId);
			scorePieces.push({
				team: teamNames[teamId],
				score: hasExistingScore ? $teamPointsStore[teamId] : 0
			});
		}

		return scorePieces;
	}

	$: scores = showScoring();
</script>

<div class="w-full flex flex-col gap-3">
	{#each scores as score}
		<div class="flex justify-between items-center">
			<p>{score.team}</p>
			<p>{score.score} {score.score === 1 ? 'punt' : 'punten'}</p>
		</div>
	{/each}
</div>
