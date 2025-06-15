<script lang="ts">
	import locationTopWave from '$lib/assets/location-top-wave.svg';

	import locationDeco from '$lib/assets/location-deco.svg';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { Clipboard, Github } from '@lucide/svelte';
	// import { PUBLIC_NAVER_MAP_CLIENT_ID } from '$env/static/public';

	function copyAddress() {
		navigator.clipboard
			.writeText('108 Lamplighter, Irvine, CA 92620')
			.then(() => alert($_('location.address_copied')))
			.catch(() => null);
	}
</script>

<img src={locationTopWave} class="location-top-wave" alt="" />
<section class="location">
	<h2 class="title {localeStore.locale}">{$_('location.title')}</h2>
	<p class="venue en">Woodbury Community Association</p>
	<button class="copy-address en" onclick={copyAddress}>
		<span class="clipboard-icon">
			<Clipboard size="1.1em" />
		</span>
		<span class="address">108 Lamplighter, Irvine, CA 92620</span></button
	>
	<!-- <div id="naver-map" class="map"></div> -->
	<p class="signature en">made with ♡ by Emily & Anthony</p>
	<a class="github-icon" href="https://github.com/anthopark/our-wedding-invitation" target="_blank"
		><Github size="1.1em" strokeWidth={1} /></a
	>
	<img class="location-deco" src={locationDeco} alt="" />
</section>

<!--
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId={PUBLIC_NAVER_MAP_CLIENT_ID}"></script>
<script type="text/javascript">
	const mapOptions = {
		center: new naver.maps.LatLng(33.669445, -117.823059),
		zoom: 17,
		minZoom: 8,
		zoomControl: true,
		zoomControlOptions: {
			position: naver.maps.Position.TOP_RIGHT
		}
	};

	const map = new naver.maps.Map('naver-map', mapOptions);

	const marker = new naver.maps.Marker({
		position: new naver.maps.LatLng(33.669445, -117.823059),
		map: map
	});
</script>
-->

<style lang="scss">
	img.location-top-wave {
		max-width: $content-max-width;
		margin: auto;
	}

	section.location {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		background-color: $bg-color-1;
		padding: 1em 2em 1em 2em;
	}

	h2.title {
		color: $primary-color;
		text-align: center;
		margin-bottom: 1em;

		&.kr {
			@extend .title-font-kr;
			letter-spacing: 1px;
		}

		&.en {
			@extend .title-font-en;
			letter-spacing: 1px;
		}
	}

	p.venue {
		&.en {
			font-size: 1.1rem;
		}
	}

	button.copy-address {
		display: flex;
		align-items: center;
		margin-top: 0.5em;

		.clipboard-icon {
			height: 1em;
			display: inline-block;
			margin-right: 0.2em;
			color: $font-color-default;
		}

		.address {
			display: inline-block;
			font-size: 1.2rem;
			text-decoration: underline;
		}
	}

	.map {
		margin-top: 2em;
		width: 100%;
		height: 16em;
		margin-bottom: 7em;
	}

	p.signature {
		font-size: 1rem;
	}
	.github-icon {
		margin-top: 0.2em;
		color: $font-color-default;
		cursor: pointer;
	}

	img.location-deco {
		position: absolute;
		bottom: 2.5em;
		right: 1.5em;
	}
</style>
