<script lang="ts">
	import { localeStore } from '../i18n.svelte';
	import { _ } from 'svelte-i18n';
	import Carousel from 'svelte-light-carousel';

	const photos = [
		{
			src: "/1.JPG"
		},
		{
			src: "/2.JPG"
		},
		{
			src: "/3.JPG"

		},
		{
			src: "/4.JPG"
		},
		{
			src: "/5.JPG"
		},
		{
			src: "/6.JPG"
		},
		{
			src: "/7.JPG"
		},
		{
			src: "/8.JPG"
		},
		{
			src: "/9.JPG"
		},
		{
			src: "/10.JPG"
		},
		{
			src: "/11.JPG"
		},
		{
			src: "/12.JPG"
		}
	];

	let dotCarousel: HTMLDivElement; // 썸네일 캐러셀 요소를 참조하기 위한 변수
</script>

<section class="gallery">
	<div class="header">
		<h2 class="title {localeStore.locale}">{$_('gallery.title')}</h2>
	</div>
	<Carousel slides={photos} arrows={true}>
		<div slot="prev" let:prev>
			<button on:click={prev} class="carousel-arrow prev-arrow">&#10094;</button>
		</div>
		<div slot="next" let:next>
			<button on:click={next} class="carousel-arrow next-arrow">&#10095;</button>
		</div>
		<div slot="slide" let:slide>
			<img class="thumbnail" src={slide.src} alt="" />
		</div>
		<div slot="dots" let:dots let:scrollTo>
			<div class="carousel-dots-container">
				<button class="dot-arrow dot-prev-arrow" on:click={() => dotCarousel.scrollBy({ left: -70, behavior: 'smooth' })}>&lt;</button>
				<div class="carousel-dots" bind:this={dotCarousel}>
					{#each dots as dot, i}
						<button
							class="carousel-dot {dot.active ? 'active' : ''}"
							on:click={() => scrollTo(i)}
						>
							<img src={photos[i].src} alt="thumbnail {i + 1}" class="dot-thumbnail" />
						</button>
					{/each}
				</div>
				<button class="dot-arrow dot-next-arrow" on:click={() => dotCarousel.scrollBy({ left: 70, behavior: 'smooth' })}>&gt;</button>
			</div>
		</div>
	</Carousel>
</section>

<style lang="scss">
	section.gallery {
		padding: 4.5em 2em 2em 2em;
		background-color: $white;
	}

	.header {
		margin-bottom: 2em;
	}

	h2.title {
		text-align: center;
		&.en {
			@extend .title-font-en;
			letter-spacing: 1px;
		}

		&.kr {
			@extend .title-font-kr;
			letter-spacing: 1px;
		}
	}

	p.sub-title {
		text-align: center;
		&.kr {
			margin-top: 0.9em;
			font-size: 0.9rem;
		}

		&.en {
			margin-top: 0.5em;
			font-size: 1.2rem;
		}
	}

	img.thumbnail {
		border-radius: 4px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* svelte-light-carousel basic styles */
	:global(.carousel) {
		width: 100%;
		height: auto;
		position: relative;
	}

	:global(.carousel-slide) {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(.carousel-slide img) {
		max-width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	:global(.carousel-arrow) {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: transparent;
		color: white;
		border: none;
		padding: 10px;
		cursor: pointer;
		z-index: 10;
		font-size: 1.5em;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(.prev-arrow) {
		left: 10px;
	}

	:global(.next-arrow) {
		right: 10px;
	}

	:global(.carousel-dots) {
		display: flex;
		justify-content: center;
		margin-top: 1em;
		overflow-x: auto;
		padding: 0.5em 0;
		scroll-behavior: smooth;
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
		max-width: 370px;
		white-space: nowrap;
	}

	:global(.carousel-dots-container) {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
	}

	:global(.dot-arrow) {
		background-color: transparent; /* 투명 배경 */
		color: black; /* 흰색 화살표 */
		border: none;
		padding: 10px;
		cursor: pointer;
		z-index: 10;
		border-radius: 50%; /* 둥근 모양 */
		margin: 0 5px;
		flex-shrink: 0;
		font-size: 1.5em; /* 메인 화살표와 동일한 크기 */
		font-weight: normal; /* font-weight 제거 (기본값으로) */
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(.carousel-dot) {
		background: none;
		border: 2px solid transparent;
		padding: 0;
		cursor: pointer;
		margin: 0 5px;
		width: 60px;
		height: 60px;
		border-radius: 4px;
		overflow: hidden;
		flex-shrink: 0;
	}

	:global(.carousel-dot.active) {
		border-color: $primary-color;
	}

	:global(.dot-thumbnail) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
