<script lang="ts">
	import Calendar from '../components/calendar.svelte';
	import Letter from '../components/letter.svelte';
	import Cover from '../components/cover.svelte';
	import Location from '../components/location.svelte';
	import type { PageProps } from './$types';
	import Gallery from '../components/gallery.svelte';
	import Account from '../components/account.svelte';
  const nameDivider = `
    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#B99493"/>
    </svg>`;
</script>

<Cover />
<Letter />
<Calendar />
<Gallery />


<section class="account-trapezoid">
    <Account accountGroup={0}>
        <span slot="buttonText">신랑 	<span class="name-divider">{@html nameDivider}</span> 신부 마음 전하기</span>
    </Account>
</section>

<Location />

<style>

  .account-trapezoid {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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