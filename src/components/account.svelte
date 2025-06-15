<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { localeStore } from '../i18n.svelte';
    import { Clipboard, X } from '@lucide/svelte'; // 클립보드 아이콘과 닫기(X) 아이콘

    export let accountGroup: number; // 0 for first 3, 1 for next 3

    let showAccountModal = false;

    const allAccounts = [
        { name: '김성훈', bank: '신한은행', number: '110-123-456789' },
        { name: '윤경숙', bank: '국민은행', number: '012-34-5678-901' },
        { name: '김윤근', bank: '우리은행', number: '1002-345-678901' },
        { name: '정재철', bank: '농협은행', number: '302-1234-5678-90' },
        { name: '김선순', bank: '하나은행', number: '123-456789-012' },
        { name: '정수진', bank: '기업은행', number: '010-9876-5432-10' }
    ];

    $: accountsToDisplay = accountGroup === 0 ? allAccounts.slice(0, 3) : allAccounts.slice(3, 6);

    function copyAccount(accountNumber: string) {
        navigator.clipboard.writeText(accountNumber)
            .then(() => alert($_('account.copied_message')))
            .catch(err => console.error('Failed to copy: ', err));
    }

    function openKakaoPay() {
        // alert($_('account.kakaopay_info')); // 알림 제거
        // 실제 카카오페이 송금 링크로 대체하세요.
        window.open('https://qr.kakaopay.com/Ej9L4tjDn', '_blank'); 
    }

    function openTossPay() {
        // alert($_('account.toss_info')); // 알림 제거
        // 실제 토스페이 송금 링크로 대체하세요.
        window.open('https://toss.me/your-tosspay-link', '_blank');
    }
</script>

<section class="account-section">
    <button class="show-account-btn {localeStore.locale}" on:click={() => showAccountModal = true}>
        <!-- 이 버튼의 텍스트는 +page.svelte에서 설정됩니다. -->
        <slot name="buttonText">버튼 텍스트</slot>
    </button>

    {#if showAccountModal}
        <div class="modal-overlay" on:click={() => showAccountModal = false}>
            <div class="modal-content" on:click|stopPropagation>
                <button class="modal-close-btn" on:click={() => showAccountModal = false}>
                    <X size="1.5em" />
                </button>
                <h3 class="modal-title {localeStore.locale}">{$_('account.modal_title')}</h3>

                <div class="account-list">
                    {#each accountsToDisplay as account}
                        <div class="account-item">
                            <div class="account-row">
                                <span class="account-value">{account.name}</span>
                                <button class="copy-btn" on:click={() => copyAccount(account.number)}>
                                    복사 <Clipboard size="1.1em" />
                                </button>
                            </div>
                            <div class="account-row">
                                <span class="account-value">{account.bank}</span>
                                <button class="kakaopay-btn {localeStore.locale}" on:click={openKakaoPay}>
                                    <img src="/payment_icon_yellow_small.png" alt="KakaoPay icon" class="kakaopay-image-icon" />
                                </button>
                            </div>
                            <div class="account-row">
                                <span class="account-value">{account.number}</span>

                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</section>

<style lang="scss">
    /* .account-section 스타일은 +page.svelte에서 관리하므로 여기서는 제거합니다. */

    h2.title {
        color: $primary-color;
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

    button.show-account-btn {
        background-color: white;
        font-family: 'Paperlogy-Regular';
        border:2px solid #3C1E1E;
        color: #3C1E1E;
        padding: 0.8em 1.5em;
        border-radius: 5px;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

        &:hover {
            background-color: #EFEAE4;
            font-family: 'Paperlogy-Bold';
        }
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: white;
        padding: 2em;
        border-radius: 8px;
        width: 90%;
        max-width: 500px;
        height: 50vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .modal-close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.2em;
        cursor: pointer;
        color: $font-color-default;
    }

    .modal-title {
        color: $primary-color;
        text-align: center;
        margin-bottom: 1.5em;
        font-size: 1em;
        font-weight: bold;
    }

    .account-list {
        margin-bottom: 1.5em;
        .account-item {
            padding: 0.8em 0;
            border-bottom: 1px solid #eee;

            &:last-child {
                border-bottom: none;
            }

            .account-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5em; /* 각 행 사이 간격 */

                &:last-child {
                    margin-bottom: 0;
                }
            }

            .account-label {
                font-weight: bold;
                flex-basis: 25%; /* 라벨 너비 조정 */
                text-align: left;
                font-size: 0.9em; /* 폰트 크기 조정 */
            }

            .account-value {
                text-align: left;
                font-size: 0.9em;
                word-break: break-all;
                padding-right: 1em; /* 버튼과의 간격 */
            }

           

            .copy-btn{
                padding: 0.5em 0.8em;
                border-radius: 4px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.3em;
                flex-shrink: 0;
                font-size: 0.9em;
                transition: background-color 0.3s ease, color 0.3s ease;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                min-width: 60px; /* 원래 min-width로 복원 */
                text-align: center;
            }

            .copy-btn {
                background: none;
                border: 0.5px solid #3C1E1E;
                color: #3C1E1E;

                &:hover {
                    background-color: #3C1E1E;
                    color: white;
                }
            }

            .kakaopay-btn {
             
                border: none; /* 테두리 제거 */
                padding: 0; /* 이미지에 맞춰 패딩 제거 */
                display: flex;
                align-items: center;
                justify-content: center;
                width: 70px; /* 버튼 너비 조정 */
                height: 30px; /* 버튼 높이 조정 */

                &:hover {
                    opacity: 0.9; /* 호버 시 약간의 투명도 변화 */
                }

                .kakaopay-image-icon {
                    width: 80%; /* 이미지 크기 조정 */
                    height: auto;
                }
            }

            .tosspay-btn {
                background-color: #000000; /* 토스페이 원래 색상 */
                color: #ffffff; /* 토스페이 원래 글자색 */
                border: none; /* 테두리 제거 */

                &:hover {
                    opacity: 0.8; /* 호버 시 약간의 투명도 변화 */
                }
            }
        }
    }

    .payment-buttons {
        display: none; /* 이 섹션은 더 이상 사용되지 않으므로 숨김 */
    }
</style> 