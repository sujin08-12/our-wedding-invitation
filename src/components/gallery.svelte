<script lang="ts">
	import { localeStore } from '../i18n.svelte';
	import { _ } from 'svelte-i18n';
	import Carousel from 'svelte-light-carousel';

	const photos = Array.from({ length: 22 }, (_, i) => ({ src: `/${i + 1}.webp` }));

	let dotCarousel: HTMLDivElement; // 썸네일 캐러셀 요소를 참조하기 위한 변수
	let loadedImages = new Set();
	
	function handleImageLoad(src: string) {
		loadedImages.add(src);
	}
</script>

<section class="gallery">
	<div class="header">
		<h2 class="title {localeStore.locale}">{$_('gallery.title')}</h2>
	</div>
	<Carousel slides={photos} arrows={false}>
		<div slot="slide" let:slide>
			<div class="image-container">
				{#if !loadedImages.has(slide.src)}
					<div class="loading-placeholder">
						<div class="loading-spinner"></div>
					</div>
				{/if}
				<img 
					class="thumbnail {loadedImages.has(slide.src) ? 'loaded' : ''}" 
					src={slide.src} 
					alt="" 
					loading="lazy"
					on:load={() => handleImageLoad(slide.src)}
				/>
			</div>
		</div>
		<div slot="dots" let:dots let:scrollTo>
			<!-- 동그라미 인디케이터 -->
			<div class="custom-dots">
				{#each dots as dot, i}
					<span
						class="dot {dot.active ? 'active' : ''}"
						on:click={() => scrollTo(i)}
					></span>
				{/each}
			</div>
			<!-- 기존 썸네일 프리뷰 -->
			<div class="carousel-dots-container">
				<button class="dot-arrow dot-prev-arrow" on:click={() => dotCarousel.scrollBy({ left: -70, behavior: 'smooth' })}>&lt;</button>
				<div class="carousel-dots" bind:this={dotCarousel}>
					{#each dots as dot, i}
						<button
							class="carousel-dot {dot.active ? 'active' : ''}"
							on:click={() => scrollTo(i)}
						>
							<img 
								src={photos[i].src} 
								alt={`thumbnail ${i + 1}`} 
								class="dot-thumbnail" 
								loading="lazy"
							/>
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

	.image-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 400px;
	}

	.loading-placeholder {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	.loading-spinner {
		width: 40px;
		height: 40px;
		border: 4px solid #e0e0e0;
		border-top: 4px solid $primary-color;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	img.thumbnail {
		display: block;
		width: auto;
		height: 400px;
		max-width: 100vw;
		max-height: 60vh;
		object-fit: cover;
		margin: 0 auto;
		border-radius: 4px;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		
		&.loaded {
			opacity: 1;
		}
	}

	/* svelte-light-carousel basic styles */
	:global(.carousel) {
		width: 100%;
		height: auto;
		position: relative;
	}

	:global(.carousel-slide) {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: auto;
		height: auto;
		position: relative;
	}

	:global(.carousel-slide img) {
		width: auto;
		height: 400px;
		max-width: 100vw;
		max-height: 60vh;
		object-fit: cover;
		margin: 0 auto;
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

	.custom-dots {
		position: absolute;
		bottom: 20%;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.4em;
		z-index: 2;
	}

	.dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #ddd;
		display: inline-block;
		transition: background 0.2s;
		cursor: pointer;
	}

	.dot.active {
		background: $primary-color;
	}
</style>
