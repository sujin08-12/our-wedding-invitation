<script lang="ts">
	import sundayCol from '$lib/assets/calendar/calendar-sunday.svg';
	import mondayCol from '$lib/assets/calendar/calendar-monday.svg';
	import tuesdayCol from '$lib/assets/calendar/calendar-tuesday.svg';
	import wednesdayCol from '$lib/assets/calendar/calendar-wednesday.svg';
	import thursdayCol from '$lib/assets/calendar/calendar-thursday.svg';
	import fridayCol from '$lib/assets/calendar/calendar-friday.svg';
	import saturdayCol from '$lib/assets/calendar/calendar-saturday.svg';
	import calendarDeco from '$lib/assets/calendar.png';
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
