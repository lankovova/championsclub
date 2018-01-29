@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/bookofwinner.css')}}" rel=stylesheet type=text/css>
@endsection

@section('help')

    @component('games.parts.help')
        @slot('helpValues')
            <div data-symbols="6" class="help__prize_container">

            </div>
        @endslot
    @endcomponent

@endsection

@section('js')
    @parent
    <script src="{{asset('public/js/bookofwinner_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('BookOfWinner');
    </script>

    <style>
        .help__prize_container {
            position: absolute;
        }
        .help__prize_container[data-symbols='6'] {
            top: 270px;
            left: 255px;
        }
        .help__prize_container div {
            font-size: 26px;
            line-height: 43px;
            text-align: center;
            color: #fff;
            letter-spacing: 3px;
            text-shadow: -2px -2px 2px #000, 2px 2px 2px #000, -2px 2px 2px #000, 2px -2px 2px #000;
            width: 177px;
            height: 43px;
        }
    </style>

    <script>
        class Help {

            constructor() {
                if (settings.helpType === "slider") {
                    this.initSlider();
                }
                this.initPrizeContainers();
                document.getElementById("helpBtnClose").addEventListener("click", () => this.onClose());
            }

            initPrizeContainers() {
                let containers = document.getElementsByClassName("help__prize_container");
                
                for (let container of containers) {
                    // convert to array 
                    let symbols = container.dataset.symbols.split(' ');
                    let paytable = settings.symbols[symbols[0]].paytable;
                    
                    for (const pay of paytable) {
                        if (+pay !== 0) {
                            let payEl = document.createElement('div');
                            payEl.innerText = pay;
                            container.prepend(payEl);
                        }  
                    }   
                }
            }

            onClose() {
                document.getElementById("help").style.transform = "translateY(-100%)";
            }

            showNextSlide() {
                if (this.disableButtons) return;
                this.disableButtons = true;
                this.sliderTracker.style.transform = `translateX(-${this.slideLength * this.next()}px)`;
                this.slideCurrent = this.next();
            }

            showPreviousSlide() {
                if (this.disableButtons) return;
                this.disableButtons = true;
                this.sliderTracker.style.transform = `translateX(-${this.slideLength * this.prev()}px)`;
                this.slideCurrent = this.prev();
            }

            next() {
                return (this.slideCurrent + 1) > this.slidesAmount ? 1 : this.slideCurrent + 1;
            }

            prev() {
                return (this.slideCurrent - 1) < 0 ? this.slidesAmount : this.slideCurrent - 1;
            }

            onTransitionEnd() {
                this.sliderTracker.style.transitionDuration = `0ms`;
                if (this.slideCurrent === 0) { // Last slide
                    this.sliderTracker.style.transform = `translateX(-${this.slideLength * (this.slidesAmount - 2)}px)`
                    this.slideCurrent = this.slidesAmount - 2
                } else if (this.slideCurrent === (this.slidesAmount - 1)) { // First slide
                    this.sliderTracker.style.transform = `translateX(-${this.slideLength}px)`
                    this.slideCurrent = 1 // default
                }

                setTimeout(() => {
                    this.sliderTracker.style.transitionDuration = `${this.trasitionTime}ms`
                    this.disableButtons = false
                }, 0)
            }

            initSlider() {
                this.sliderTracker = document.getElementById("helpSliderTracker");
                this.slidesAmount = this.sliderTracker.children.length;
                let firstChild = this.sliderTracker.children[0].cloneNode(true);
                let lastChild = this.sliderTracker.children[this.slidesAmount - 1].cloneNode(true);
                this.sliderTracker.appendChild(firstChild);
                this.sliderTracker.prepend(lastChild);

                this.trasitionTime = 700;
                // renew
                this.slidesAmount = this.sliderTracker.children.length;
                this.slideLength = this.sliderTracker.children[0].offsetWidth;
                this.slideCurrent = 1;
                this.disableButtons = false; 
                this.sliderTracker.style.transform = `translateX(-${this.slideLength}px)`
                this.sliderTracker.style.transitionDuration = `${this.trasitionTime}ms`

                try {
                    document.getElementById("helpBtnNext").addEventListener("click", () => this.showNextSlide());
                    document.getElementById("helpBtnPrev").addEventListener("click", () => this.showPreviousSlide());
                } catch (e) {}

                this.sliderTracker.addEventListener("transitionend", () => this.onTransitionEnd(), false);
            }
        }

        let help = new Help()
    </script>
@endsection
