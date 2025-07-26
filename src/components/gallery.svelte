<script lang="ts">
	import { localeStore } from '../i18n.svelte';
	import { _ } from 'svelte-i18n';
	import Carousel from 'svelte-light-carousel';
	import { onMount } from 'svelte';
	const photos = Array.from({ length: 22}, (_, i) => {
		// JPG 파일이 있는 경우 JPG 사용, 없으면 PNG 사용
		const jpgExists = [2, 3, 4, 5, 16, 17, 20, 21].includes(i + 1);
		const extension = jpgExists ? 'jpg' : 'png';
		return { src: `/${i + 1}.${extension}`, key: i + 1 };
	});
	let dotCarousel: HTMLDivElement; // 썸네일 캐러셀 요소를 참조하기 위한 변수
	let mounted = false;
	
	// 모든 이미지를 미리 로딩하는 함수
	const preloadImages = () => {
		photos.forEach(photo => {
			const img = new Image();
			img.src = photo.src;
		});
	};
	
	onMount(() => {
		mounted = true;
		if (dotCarousel) {
			dotCarousel.scrollTo({ left: 0, behavior: 'auto' });
		}
		// 페이지가 렌더링된 후 모든 이미지를 미리 로딩
		preloadImages();
	});
</script>

{#if mounted}
<section class="gallery">
	<div class="header">
		<h2 class="title {localeStore.locale}">{$_('gallery.title')}</h2>
	</div>
	<Carousel slides={photos} arrows={false}>
		<div slot="slide" let:slide>
			<img class="thumbnail" src={slide.src} alt="" loading="lazy" />
		</div>
		<div slot="dots" let:dots let:scrollTo>
			<!-- 동그라미 인디케이터 -->
			<div class="custom-dots">
				{#each dots as dot, i (i)}
					<span
						class="dot {dot.active ? 'active' : ''}"
						on:click={() => scrollTo(i)}
						role="button"
						tabindex="0"
						on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') scrollTo(i); }}
					></span>
				{/each}
			</div>
			<!-- 기존 썸네일 프리뷰 -->
			<div class="carousel-dots-container">
				<button class="dot-arrow dot-prev-arrow" on:click={() => dotCarousel.scrollBy({ left: -70, behavior: 'smooth' })}>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
					</svg>
				</button>
				<div class="carousel-dots" bind:this={dotCarousel}>
					{#each dots as dot, i (i)}
						<button
							class="carousel-dot {dot.active ? 'active' : ''}"
							on:click={() => scrollTo(i)}
						>
							<img src={photos[i].src} alt={`thumbnail ${i + 1}`} class="dot-thumbnail" loading="lazy" />
						</button>
					{/each}
				</div>
				<button class="dot-arrow dot-next-arrow" on:click={() => dotCarousel.scrollBy({ left: 70, behavior: 'smooth' })}>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
					</svg>
				</button>
			</div>
		</div>
	</Carousel>
</section>
{/if}

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
	}

	img.thumbnail {
		display: block;
		max-width: 100vw;
		max-height: 60vh;
		width: auto;
		height: auto;
		object-fit: contain;
		margin: 0 auto;
		border-radius: 4px;
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
		max-width: 100%;
		margin: 50% 0%;
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
		background-color: rgba(255, 255, 255, 0.9);
		color: #333;
		border: none;
		padding: 8px;
		cursor: pointer;
		z-index: 10;
		border-radius: 50%;
		margin: 0 8px;
		flex-shrink: 0;
		width: 36px;
		height: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(10px);
		transform: translateY(.4em);
		
		&:hover {
			background-color: rgba(255, 255, 255, 1);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
			transform: scale(1.05);
		}
		
		&:active {
			transform: scale(0.95);
		}
		
		svg {
			transition: transform 0.2s ease;
		}
		
		&:hover svg {
			transform: scale(1.1);
		}
	}

	:global(.carousel-dot) {
		background: none;
		border: 2px solid transparent;
		padding: 0;
		cursor: pointer;
		margin: 0 5px;
		width: 60px;
		height: 60px;
		border-radius: 8px;
		flex-shrink: 0;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		overflow: hidden;
		position: relative;
		
		&:hover {
			transform: scale(1.05);
			border-color: rgba(0, 0, 0, 0.1);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		}
		
		&:active {
			transform: scale(0.98);
		}
	}

	:global(.carousel-dot.active) {
		border-color: $primary-color;
		box-shadow: 0 0 0 2px rgba($primary-color, 0.2);
		
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(45deg, transparent 30%, rgba($primary-color, 0.1) 50%, transparent 70%);
			animation: shimmer 2s infinite;
		}
	}

	:global(.dot-thumbnail) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		border-radius: 6px;
		transition: transform 0.3s ease;
		
		&:hover {
			transform: scale(1.1);
		}
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
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
