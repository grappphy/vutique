<template>
    <vu-el-container>
        <vu-el-buttons>
            <template #item="{ defaultClass }">
                <div :class="defaultClass">
                    <vu-el-button :tag="'button'" :color="'primary'" :size="'sm'" :text="'버튼'" />
                </div>
                <div :class="defaultClass">
                    <vu-el-button :tag="'button'" :color="'primary'" :size="'sm'" :text="'버튼'" />
                </div>
            </template>
        </vu-el-buttons>
        <vu-el-badge :type="'filled'" :size="'sm'" :color="'primary'" :text="'뱃지'" :text-color="'white'" />
        <vu-el-checkbox :size="'sm'" :control-type="'checkbox'" :label="'체크박스'" :use-label="true" />
        <vu-el-radio :size="'sm'" :control-type="'radio'" :label="'라디오'" :use-label="true" />
        <vu-el-chip :type="'filled'" :tag="'button'" :size="'sm'" :text="'칩'" :use-button="true" />
        <vu-el-menu>
            <template #list="{ defaultClass }">
                <div :class="defaultClass">
                    <vu-el-menu-item>
                        <vu-el-menu-button> aaaa </vu-el-menu-button>
                    </vu-el-menu-item>
                </div>
            </template>
        </vu-el-menu>

        <vu-el-input :type="'filled'" :size="'lg'" :control-type="'text'" :is-disabled="true" />

        <vu-el-dropdown :type="'outline'" :size="'lg'">
            <template #button>
                <vu-el-dropdown-button :text="'선택'" />
            </template>
        </vu-el-dropdown>

        <vu-el-switch :size="'sm'" :control-type="'checkbox'" :label="'스위치'" :use-label="true" />

        <vu-el-symbol :type="'circle'" :size="'40'" />

        <div style="position: absolute">
            <vu-el-tooltip :text="'툴팁'" :placement="'bottom-start'" :is-active="true" />
        </div>

        <div style="width: 200px">
            <vu-el-ratio :ratio="'1x1'">
                <img src="https://dummyimage.com/600x400/000/fff" />
            </vu-el-ratio>
        </div>

        <vu-el-hashtag :tag="'button'" :icon="'fa-solid fa-hashtag'" :text="'해시태그'" />

        <vu-el-list :type="'decimal'" :tag="'ul'">
            <template #item="{ defaultClass }">
                <li :class="defaultClass">
                    <vu-el-text :tag="'span'" :size="'13'" :content="'리스트 아이템'" />
                    <vu-el-list :type="'decimal'" :tag="'ul'">
                        <template #item="{ defaultClass }">
                            <li :class="defaultClass">
                                <vu-el-text :tag="'span'" :size="'13'" :content="'리스트 아이템'" />
                            </li>
                        </template>
                    </vu-el-list>
                </li>
            </template>
        </vu-el-list>

        <vu-el-profile :size="'md'" :use-symbol="true">
            <template #symbol>
                <vu-el-symbol :type="'circle'" :size="'40'">
                    <template #thumbnail="{ defaultClass }">
                        <img :class="defaultClass" src="https://dummyimage.com/600x400/000/fff" />
                    </template>
                </vu-el-symbol>
            </template>

            <template #nickname="{ defaultClass }">
                <vu-el-text :class="defaultClass" :tag="'span'" :content="'닉네임'" />
            </template>
        </vu-el-profile>

        <vu-el-pagination>
            <template #content="{ listClass, itemClass }">
                <div :class="listClass">
                    <div :class="itemClass">
                        <vu-el-pagination-button :is-active="true">
                            <template #content> 1 </template>
                        </vu-el-pagination-button>
                    </div>
                </div>
            </template>
        </vu-el-pagination>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import {
    VuElContainer,
    VuElText,
    VuElButtons,
    VuElButton,
    VuElBadge,
    VuElCheckbox,
    VuElRadio,
    VuElChip,
    VuElDialog,
    VuElMenu,
    VuElMenuItem,
    VuElMenuButton,
    VuElDropdown,
    VuElDropdownButton,
    VuElDropdownMenu,
    VuElDropdownMenuItem,
    VuElDropdownMenuButton,
    VuElInput,
    VuElSwitch,
    VuElSymbol,
    VuElTooltip,
    VuElRatio,
    VuElHashtag,
    VuElList,
    VuElProfile,
    VuElPagination,
    VuElPaginationButton
} from './components/elements';

export default defineComponent({
    components: {
        VuElContainer,
        VuElText,
        VuElButtons,
        VuElButton,
        VuElBadge,
        VuElCheckbox,
        VuElRadio,
        VuElChip,
        VuElMenu,
        VuElMenuItem,
        VuElMenuButton,
        VuElDropdown,
        VuElDropdownButton,
        VuElInput,
        VuElSwitch,
        VuElSymbol,
        VuElTooltip,
        VuElRatio,
        VuElHashtag,
        VuElList,
        VuElProfile,
        VuElPagination,
        VuElPaginationButton
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
