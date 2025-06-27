<script lang="ts">
	import { localeStore } from '../i18n.svelte';
	import { browser } from '$app/environment';
	import { Confetti } from 'svelte-confetti';
	import { _ } from 'svelte-i18n';

	const maxSectionHeight = 900;
	let sectionHeight = $state(maxSectionHeight);

	function setSectionHeight() {
		sectionHeight = window.innerHeight < maxSectionHeight ? window.innerHeight : maxSectionHeight;
	}

	if (browser && window.matchMedia('(max-width: 1024px)')) {
		setSectionHeight();
	}
</script>

<section style:height={`${sectionHeight}px`} class="cover">
	<div class="white-gradient-blur"></div>
	<div class="blur-gradient"></div>
	<div class="confetti-area">
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			colorArray={['#588adb', '#f5e298', '#fff', '#9aa3f5']}
			delay={[500, 2000]}
			infinite
			duration={5000}
			amount={70}
			fallDistance={`${sectionHeight}px`}
		/>
	</div>

	<div class="names-kr-box">
		<span class="names kr">김윤근</span>
		<span class="names kr">그리고</span>
		<span class="names kr">정수진</span>
	</div>

	<div class="cover-title-container">
		<div class="names-en-box">
			<span class="names en-sacramento">Sujin & Yungeun</span>
		</div>

		<div class="event-date-and-place-box">
			<span class="event-date-and-time {localeStore.locale}">{$_('cover.date')}</span>
			<span class="event-place {localeStore.locale}">{$_('cover.place')}</span>
		</div>
	</div>
</section>

<style lang="scss">
	section.cover {
		position: relative;
		background-image: url('/DSCF6624 4.webp');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
	}

	.white-gradient-blur {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 35%;
	pointer-events: none;
	/* 아래가 핵심: 위에서 아래로 흰색이 점점 투명해지는 그라데이션 */
	background: linear-gradient(
			to bottom,
			rgba(255,255,255,1) 0%,
			rgba(255,255,255,0.5) 60%,
			rgba(255,255,255,0) 100%
  		);
	}

	/* 블러 그라데이션 오버레이 */
	.blur-gradient {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 35%;
	pointer-events: none;
	/* 블러 효과 */
	backdrop-filter: blur(5px);
	/* 블러가 점점 사라지도록 마스크 */
	-webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
	mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%,  rgba(0,0,0,0) 100%);
	}
	.confetti-area {
		position: absolute;
		top: -50px;
		left: -50px;
		height: 100vh;
		width: 100%;
		overflow: hidden;
		pointer-events: none;
	}
	.names-kr-box {
		position: absolute;
		top: 3em;
		left: 4em;

		span.names {
			color: #616161;
			display: block;
			font-size: 1rem;
			letter-spacing: 0.8em;
			line-height: 2;
		}
	}

	.cover-title-container {
		width: 100%;
		position: absolute;
		bottom: 1.5em;
	}

	.names-en-box {
		width: 100%;
		display: flex;
		justify-content: center;

		span.names {
			display: block;
			color: $white;
			word-spacing: 5px;
			font-size: 2.2rem;
		}
	}

	.event-date-and-place-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		span.event-date-and-time,
		span.event-place {
			display: block;
			color: $white;

			&.kr {
				font-size: 1rem;
			}

			&.en {
				font-size: 1.4rem;
			}
		}

		span.event-date-and-time.kr {
			margin-bottom: 0.4em;
		}
	}
</style>
