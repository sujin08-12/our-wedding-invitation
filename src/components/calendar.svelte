<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	const calendarDeco = "/calendar.png";

	const targetDate = new Date('2025-09-20T14:00:00'); // D-day: 2025년 9월 20일 오후 2시
	let dDay: number;
	let interval: number;

	function calculateDDay() {
		const now = new Date();
		const diff = targetDate.getTime() - now.getTime(); // 밀리초 단위 차이

		if (diff <= 0) {
			dDay = 0; // D-day가 지났거나 오늘인 경우
		} else {
			dDay = Math.ceil(diff / (1000 * 60 * 60 * 24)); // 밀리초를 일 단위로 변환, 올림
		}
	}

	onMount(() => {
		calculateDDay(); // 초기 계산
		interval = setInterval(calculateDDay, 1000 * 60 * 60); // 1시간마다 업데이트 (D-day이므로 하루 단위 업데이트도 충분)
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section class="calendar">
	<img class="calendar-deco" src={calendarDeco} alt="calendar deco" />
	<div class="d-day-display">
		윤근 ♥︎ 수진의 결혼식이
		{#if dDay > 0}
			<p>D-{dDay}일 남았습니다</p>
		{:else if dDay === 0}
			<p>오늘입니다</p>
		{:else}
			<p>결혼식이 지났습니다</p>
		{/if}
	</div>
</section>

<style lang="scss">
	

	.calendar {
		position: relative;
		background-color: $white;
		padding: 1em 3.5em 1em 3.5em;
		img{
			width: 100%;
		}
		.calendar-deco {
			display: flex;
			justify-content: space-between;
		}

		.d-day-display {
			font-family: 'Paperlogy-Regular'; /* 폰트 적용 */
			text-align: center;
			margin-top: 1em; /* 필요에 따라 조정 */
			font-size: 0.5em; /* 필요에 따라 조정 */
			font-weight: bold;
			color: black;
		}
	}
</style>
