<script lang="ts">
	import Calendar from '../components/calendar.svelte';
	import Letter from '../components/letter.svelte';
	import Cover from '../components/cover.svelte';
	import Location from '../components/location.svelte';
	import type { PageProps } from './$types';
	import Gallery from '../components/gallery.svelte';
	import Account from '../components/account.svelte';
</script>

<Cover />
<Letter />
<Calendar />
<Gallery />

<div class="account-trapezoid">
  <button class="account-btn">신랑측 혼주 및 신랑 계좌번호</button>
  <button class="account-btn">신부측 혼주 및 신부 계좌번호</button>
</div>

<Location />

<style>
  .account-trapezoid {
    width: 100%;
    max-width: 600px;
    min-width: 0;
    height: 180px;
    background: #fff;
    clip-path: polygon(
      0 0,
      100% 0,
      calc(100% - 1px) 100%,
      1px 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0 auto;
    box-sizing: border-box;
    padding: 2em 0 0.5em 0;
  }
  .account-btn {
    font-size: 1rem;
    padding: 1em 1em;
    margin: 0.5em 0;
    background: #fff;
    border: 3px solid #3a2323;
    color: #3a2323;
    font-family: 'Noto Serif KR', serif;
    cursor: pointer;
    width: 80%;
    max-width: 330px;
    min-width: 120px;
    box-sizing: border-box;
    border-radius: 0.72em;
    box-shadow: none;
    margin-left: auto;
    margin-right: auto;
  }
</style>