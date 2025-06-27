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


<section class="account-trapezoid">
    <Account accountGroup={0}>
        <span slot="buttonText">신랑측 혼주 및 신랑 계좌번호</span>
    </Account>
    <Account accountGroup={1}>
        <span slot="buttonText">신부측 혼주 및 신부 계좌번호</span>
    </Account>
</section>

<Location />

<style>

  .account-trapezoid {
    width: 600px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0 auto;
    padding: 2em 0 0.5em 0;
    text-align: center;
    gap: 1em;
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