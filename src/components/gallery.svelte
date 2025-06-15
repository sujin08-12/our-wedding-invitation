<script lang="ts">
	import PhotoSwipeLightBox from 'photoswipe/lightbox';
	import PhotoSwipe from 'photoswipe';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';
	import { localeStore } from '../i18n.svelte';
	import { _ } from 'svelte-i18n';

	const photos = [
		{
			src: "/10.webp",
			width: 1200,
			height: 1800
		},
		{
			src: "/2.webp",
			width: 1200,
			height: 1800
		},
		{
			src: "/3.webp",
			width: 1200,
			height: 1800
		},
		{
			src: "/4.webp",
			width: 2000,
			height: 1333
		},
		{
			src: "/5.webp",
			width: 1200,
			height: 1800
		},
		{
			src: "/6.webp",
			width: 2000,
			height: 1333
		},
		{
			src: "/7.webp",
			width: 1200,
			height: 1800
		},
		{
			src: "/8.webp",
			width: 1200,
			height: 1800
		},
		{
			src: "/9.webp",
			width: 1200,
			height: 1790
		},
		{
			src: "/11.webp",
			width: 1200,
			height: 1790
		}
	];

	onMount(() => {
		const lightbox = new PhotoSwipeLightBox({
			gallery: '#gallery',
			children: 'a',
			showHideAnimationType: 'fade',
			pswpModule: PhotoSwipe
		});

		lightbox.init();
	});
</script>

<section class="gallery">
	<div class="header">
		<h2 class="title {localeStore.locale}">{$_('gallery.title')}</h2>
		<p class="sub-title {localeStore.locale}">{$_('gallery.sub_title')}</p>
	</div>
	<div id="gallery">
		{#each photos as photo}
			<a
				href={photo.src}
				class="slide"
				data-pswp-width={photo.width}
				data-pswp-height={photo.height}
				target="_blank"
			>
				<img class="thumbnail" src={photo.src} alt="" />
			</a>
		{/each}
	</div>
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

	#gallery {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 6.5em;
	}

	img.thumbnail {
		border-radius: 4px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.slide:nth-child(1),
	.slide:nth-child(2),
	.slide:nth-child(3),
	.slide:nth-child(5),
	.slide:nth-child(7),
	.slide:nth-child(8),
	.slide:nth-child(9),
	.slide:nth-child(10) {
		grid-row: span 2;
	}
</style>
