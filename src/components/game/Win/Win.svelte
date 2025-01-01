<script>
	import { teamPointsStore } from '$lib/store';
	import { isPlural } from '$lib/util';
	import Card from '../../Card/Card.svelte';
	import Scores from '../../Scores/Scores.svelte';
	import Title from '../../Title/Title.svelte';

	/** @type {string[]} */
	export let teamNames;

	function getWinningTeam() {
		const highestScore = Math.max(...Object.values($teamPointsStore));
		/** @type {string[]} */
		let wonTeams = []
		for (let teamId in $teamPointsStore) {
			if ($teamPointsStore[teamId] == highestScore) {
				wonTeams.push(teamId)
			}
		}
		return teamNames[parseInt(wonTeams[Math.floor(Math.random()*wonTeams.length)])]
	}

	$: winTeam = getWinningTeam();
	$: winTeamIsPlural = isPlural(winTeam ?? '');
</script>

<Card close>
	<Title>{winTeam} {winTeamIsPlural ? 'hebben' : 'heeft'} gewonnen!</Title>
	<Scores {teamNames} />
</Card>
