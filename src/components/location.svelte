<script context="module" lang="ts">
	declare var naver: any; // Naver Maps API의 전역 naver 객체 선언
</script>

<script lang="ts">
	const locationTopWave = "/location-top-wave.svg";
	const locationDeco = "/location-deco.svg";

	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { Clipboard, Github } from '@lucide/svelte';
	import { PUBLIC_NAVER_MAP_CLIENT_ID } from '$env/static/public';
	import { onMount } from 'svelte';

	const address = '서울 강남구 강남대로 262\nB1층 브라이드밸리 웨딩홀';
	$: addressHtml = address.replace(/\n/g, '<br>');

	function copyAddress() {
		navigator.clipboard
			.writeText(address)
			.then(() => alert($_('location.address_copied')))
			.catch(() => null);
	}

	onMount(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${PUBLIC_NAVER_MAP_CLIENT_ID}`;
		document.head.appendChild(script);

		script.onload = () => {
			const mapOptions = {
				center: new naver.maps.LatLng(37.486914707911, 127.03332909844),
				zoom: 17,
				minZoom: 8,
				zoomControl: true,
				zoomControlOptions: {
					position: naver.maps.Position.TOP_RIGHT
				}
			};

			const map = new naver.maps.Map('naver-map', mapOptions);

			const marker = new naver.maps.Marker({
				position: new naver.maps.LatLng(37.486914707911, 127.03332909844),
				map: map
			});
		};
	});
</script>

<img src={locationTopWave} class="location-top-wave" alt="" />
<section class="location">
	<h2 class="title {localeStore.locale}">{$_('location.title')}</h2>
	<p class="venue ko">브라이드 밸리</p>
	<button class="copy-address en" on:click={copyAddress}>
		<span class="clipboard-icon">
			<Clipboard size="1.1em" />
		</span>
		<span class="address">{@html addressHtml}</span>
	</button>
	<div id="naver-map" class="map"></div>

	<div class="map-buttons-container">
		<button class="map-button" on:click={() => window.open('https://naver.me/5f5s7gcK', '_blank')}>
			<img src="/naver_Icon.png" alt="네이버 지도 아이콘" class="map-icon" />
			<span>네이버맵</span>
		</button>
		<button class="map-button" on:click={() => window.open('https://tmap.life/37a1cafb', '_blank')}>
			<img src="/tmap_icon.jpeg" alt="티맵 지도 아이콘" class="map-icon" />
			<span>티맵</span>
		</button>
	</div>

	<div class="transportation-info">
		<h3 class="info-title {localeStore.locale}">{$_('location.parking_title')}</h3>
		<p class="info-text {localeStore.locale}">{$_('location.parking_desc')}</p>

		<h3 class="info-title {localeStore.locale}">{$_('location.public_transport_title')}</h3>
		<p class="info-text {localeStore.locale}">{$_('location.public_transport_desc')}</p>
	
		<h3 class="info-title {localeStore.locale}">{$_('location.public_bus_title')}</h3>
		<p class="info-text {localeStore.locale}">{$_('location.public_bus_station')}</p>
		<h4 class="info-text {localeStore.locale}">{$_('location.public_bus_trunk_title')}</h4>
		<p class="info-text {localeStore.locale}">{$_('location.public_bus_trunk_desc')}</p>
		<h4 class="info-text {localeStore.locale}">{$_('location.public_bus_branch_title')}</h4>
		<p class="info-text {localeStore.locale}">{$_('location.public_bus_branch_desc')}</p>
		<h4 class="info-text {localeStore.locale}">{$_('location.public_bus_direct_title')}</h4>
		<p class="info-text {localeStore.locale}">{$_('location.public_bus_direct_desc')}</p>
		<h4 class="info-text {localeStore.locale}">{$_('location.public_bus_etc_title')}</h4>
		<p class="info-text {localeStore.locale}">{$_('location.public_bus_etc_desc')}</p>
	</div>

	<p class="signature en">made with ♡ by Sujin & Yungeun</p>
	<a class="github-icon" href="https://github.com/alxdr3k/our-wedding-invitation" target="_blank"
		><Github size="1.1em" strokeWidth={1} /></a
	>
	<img class="location-deco" src={locationDeco} alt="" />
</section>

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
		&.ko {

			font-family: 'Noto Serif KR', serif;
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
			font-size: 1em;
			font-family: 'Noto Serif KR', serif;
			text-decoration: underline;
		}
	}

	.map {
		margin-top: 2em;
		width: 100%;
		height: 16em;
	}

	.map-buttons-container {
		display: flex;
		justify-content: center;
		gap: 1em;
		width: 100%;
		margin: 2em 0;
	}

	.map-button {
		border: none;
		cursor: pointer;
		padding: 0;
		display: flex;
		flex-direction: row;
		color: $font-color-default;
		font-size: 1.4em;
		text-align: center;
		gap: 0.5em;
		width: auto;
		align-items: center;
	}

	.map-button span {
		font-size: 0.7em;
	}

	.map-icon {
		width: 30px;
		height: auto;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: translateY(-5px);
		}
	}

	.transportation-info {
		width: 100%;
		padding: 1em 0;
		text-align: left;
		margin-bottom: 7em;

		.info-title {
			font-size: 1em;
			font-weight: bold;
			color: $primary-color;
			margin-top: 1em;
			margin-bottom: 0.5em;
			color:rgb(29, 11, 11)
		}

		.info-text {
			font-size: 1.0em;
			line-height: 1.5;
			color: $font-color-default;
		}

		h4.info-text {
			margin-top: 0.75em;
			margin-bottom: 0.1em;
			line-height: 1.0;
		}
		p.info-text + h4.info-text {
			margin-top: 0.75em;
		}
		p.info-text {
			&:nth-of-type(6),
			&:nth-of-type(8),
			&:nth-of-type(10),
			&:nth-of-type(12) {
				margin-bottom: 0.4em;
				line-height: 1.5;
			}
		}
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
