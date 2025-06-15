<script lang="ts">
	const calendarDeco = "/calendar.png";
</script>

<section class="calendar">
	<img class="calendar-deco" src={calendarDeco} alt="calendar deco" />
</section>

<style lang="scss">
	.calendar {
		position: relative;
		background-color: $white;
		padding: 2em 3.5em 4em 3.5em;

		.calendar-deco {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
