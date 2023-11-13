<script>
	import { count } from '$stores/state.js'
	const increment = () => {
		$count += 1
	}
	const decrement = () => {
		$count -= 1
	}
</script>

<div class="flex">
	<button on:click={decrement}> -1 </button>
	<div class="value" class:warn={$count < 0}>{$count}</div>
	<button on:click={increment}> +1 </button>
</div>

<style>
	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.value {
		font-weight: bold;
		min-width: 5ch;
		text-align: center;
	}
	button {
		color: black;
		background: white;
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
	}
	.warn {
		background: #ff3e00;
	}
</style>
