<template>
    <div id="loading" v-if="showLoading">
        <div class="loading__container">
            <div class="loading__text">please wait. loading <span id="loading__persent">100.00</span> %</div>
            <div id="loading__block"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['shouldHide'],
    data() {
        return {
            loadingTime: 2000,
            loadingBlockLength: 21,
            loadingBlockCount: 0,
            maxLoadingBlockAmount: 28,
            loadingPersentCount: 0,
            loadingInterval: '',
            loadingPersentInterval: '',
            showLoading: true
        }
    },
    watch: {
        shouldHide () {
            this.removeLoading()
        }
    },
    methods: {
		loading() {  
            this.loadingInterval = setInterval(() => {
                if (this.loadingBlockCount === this.maxLoadingBlockAmount) {
                    clearInterval(this.loadingInterval);
                }
                document.getElementById("loading__block").style.width = 21 * this.loadingBlockCount + "px";
                this.loadingBlockCount++;
            }, this.loadingTime/this.maxLoadingBlockAmount)
        },
		loadingPersent(){ 
            this.loadingPersentInterval = setInterval( () => {
                this.loadingPersentCount += 1.11;
                if (this.loadingPersentCount >= 100.00) {
                    this.loadingPersentCount = 100;
                    clearInterval(this.loadingPersentInterval);
                }
                document.getElementById("loading__persent").innerText = this.loadingPersentCount.toFixed(2);
            }, this.loadingTime / 100) // 100%
        },
		removeLoading() {
			if (this.loadingPersentCount === 100) {
                clearInterval(this.loadingInterval);
                clearInterval(this.loadingPersentInterval);
                this.showLoading = false
				return;
			}
			setTimeout(() => {
                this.removeLoading()
            }, 100);
		},
    },
    mounted() {
        
        this.loading()
        this.loadingPersent()
    }
}
</script>
