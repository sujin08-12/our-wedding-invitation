<script lang="ts">
	import Calendar from '../components/calendar.svelte';
	import Cover from '../components/cover.svelte';
	import Location from '../components/location.svelte';
	import Gallery from '../components/gallery.svelte';
	import Letter from '../components/letter.svelte';
	import Account from '../components/account.svelte';
</script>

<Cover />
<Letter />
<Calendar />
<Gallery />

<section class="account-section-group">
    <Account accountGroup={0}>
        <span slot="buttonText">신랑측 혼주 및 신랑 계좌번호</span>
    </Account>
    <Account accountGroup={1}>
        <span slot="buttonText">신부측 혼주 및 신부 계좌번호</span>
    </Account>
</section>

<Location />

<style>
    .account-section-group {
        display: flex;
        flex-direction: column; /* 버튼을 세로로 나열 */
        align-items: center;
        gap: 1em; /* 버튼 사이 간격 */
        padding: 4em 2em; /* Account 컴포넌트의 기존 패딩과 유사하게 조정 */
        background-color: white;
        text-align: center;
    }
</style>