<template>
    <transition name="fade">   
    <div class="history-presenter" v-if="shown">
        <div class="history-presenter__container">
            <div class="history-presenter_header">
                <div class="cell">{{ $t("time") }}</div>
                <div class="cell">{{ $t("game") }}</div>
                <div class="cell">{{ $t("event") }}</div>
                <div class="cell">{{ $t("value") }}</div>
                <div class="cell">{{ $t("credit") }}</div>
            </div>
            <div class="history-presenter__body">
                <div v-for="(cell, key) in historyToShow" :key="key" :class="[getClass(cell.sobytie) + ' row']">
                    <div class="cell .text-left">{{ cell.data }}</div>
                    <div class="cell">{{ cell.game }}</div>
                    <div class="cell">{{ cell.sobytie }}</div>
                    <div class="cell">{{ cell.stav }}</div>
                    <div class="cell text-right">{{ cell.summa }}</div>
                </div>
            </div>
            <div class="history-presenter__footer">
                <div class="pagination">
                    <div ref="pagination__start" class="pagination__start" @click="showHistoryPage(1)"></div>
                    <div ref="pagination__back" class="pagination__back" @click="showHistoryPagePrevious()"></div>
                    <div class="pagination__number">
                        {{ currentPage }}
                    </div>  
                    <div ref="pagination__next" class="pagination__next" @click="showHistoryPageNext()"></div>
                    <div ref="pagination__end" class="pagination__end" @click="showHistoryPage(paginationAmount)"></div>
                </div>
                <div @click="close()" class="history-presenter__close-btn"></div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
import EventBus from "../../event-bus.js"
import axios from "axios"
import {history} from "../../config.js"

export default {
    data() {
        return {
            shown: false,
            history: [],
            historyToShow: [],
            rowsAmountPerPage: 20,
            currentPage: 1,
        }
    },
    watch: {
        currentPage() {
            this.$refs.pagination__start.classList.remove("pagination__disabled")
            this.$refs.pagination__back.classList.remove("pagination__disabled")
            this.$refs.pagination__next.classList.remove("pagination__disabled")
            this.$refs.pagination__end.classList.remove("pagination__disabled")

            if (this.currentPage === 1) {
                this.$refs.pagination__start.classList.add("pagination__disabled")
                this.$refs.pagination__back.classList.add("pagination__disabled")
            } else if (this.currentPage === this.paginationAmount) {
                this.$refs.pagination__next.classList.add("pagination__disabled")
                this.$refs.pagination__end.classList.add("pagination__disabled")
            }
        },
    },
    computed: {
        paginationAmount() {
            return Math.ceil(this.history.length / this.rowsAmountPerPage)
        }
    },
    methods: {
        showHistoryPagePrevious() {
            if (this.currentPage === 1) return;
            this.showHistoryPage(this.currentPage - 1)
        },
        showHistoryPageNext() {
            if (this.currentPage === this.paginationAmount) return;
            this.showHistoryPage(this.currentPage + 1)
        },
        showHistoryPage(page) {
            this.historyToShow = this.history.slice((page - 1) * this.rowsAmountPerPage, page * this.rowsAmountPerPage)
            this.currentPage = page
        },
        getClass(event) {
            let myClass = ""

            if (event== 'login' || event == 'logout') {
                myClass = "blue-bg"
            } else if (event == 'game bet, no win') {
                myClass = "yellow-bg"
            } else if (event == 'game bet, win') {
                myClass = "pink-bg"
            }

            return myClass
        },
        close() {
            this.shown = false
            EventBus.$emit("hide-history")
        }
    },
    created() {
        EventBus.$on("show-history", () => {
            this.shown = true
            axios.post(history).then(res => {
                this.history = res.data
                this.historyToShow = this.history.slice(0, this.rowsAmountPerPage)
                
            })
        })

    },
}
</script>
