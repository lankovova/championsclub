<template>
    <div class="container">
        <div class="error-modal" v-show="error">
            <div class="error-modal__button" @click="hideErrorModal"></div>
        </div>
        <div class="calculator">
            <div class="calculator__close"></div>
            <div class="calculator__input">
                <template v-for="(number, key) in login">
                    <div :key="key" class="number">{{ number }}</div>
                    <div v-if="(key % 2) === 1 && key !== (login.length - 1)" :key="key+200" class="divider">-</div>
                </template>
                <div v-if="login.length !== loginLength" class="caret"></div>
            </div>
            
            <div class="calculator__buttons">
                <template v-for="(btn, key) in buttons">
                    <div 
                        v-if="btn.class == 'calculator__button-delete'"
                        :class="'calculator__button ' + btn.class" 
                        @click="deleteLastChar()"
                        @mousedown="addMyClass(btn.class, 'calculator__button--pressed')"
                        @mouseup="removeMyClass(btn.class, 'calculator__button--pressed')"
                        @mouseleave="removeMyClass(btn.class, 'calculator__button--pressed')"
                        :ref="btn.class"
                        :key="key"
                    ></div>

                    <div
                        v-else-if="btn.class == 'calculator__button-ok'" 
                        :class="'calculator__button ' + btn.class" 
                        @click="makeLogin()"
                        @mousedown="addMyClass(btn.class, 'calculator__button--pressed')"
                        @mouseup="removeMyClass(btn.class, 'calculator__button--pressed')"
                        @mouseleave="removeMyClass(btn.class, 'calculator__button--pressed')"
                        :ref="btn.class"
                        :key="key"
                    ></div>

                    <div
                        v-else
                        :class="'calculator__button ' + btn.class" 
                        @click="writeLogin(btn.val)"
                        @mousedown="addMyClass(btn.class, 'calculator__button--pressed')"
                        @mouseup="removeMyClass(btn.class, 'calculator__button--pressed')"
                        @mouseleave="removeMyClass(btn.class, 'calculator__button--pressed')"
                        :ref="btn.class"
                        :key="key"
                    ></div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import {login} from "../config.js"
import axios from "axios"
import EventBus from "../event-bus.js"

export default {
    data() {
        return {
            error: false,
            login: [],
            loginLength: 14,
            buttons: [
                {class: 'calculator__button-1', val: 1},
                {class: 'calculator__button-2', val: 2},
                {class: 'calculator__button-3', val: 3},
                {class: 'calculator__button-4', val: 4},
                {class: 'calculator__button-5', val: 5},
                {class: 'calculator__button-6', val: 6},
                {class: 'calculator__button-7', val: 7},
                {class: 'calculator__button-8', val: 8},
                {class: 'calculator__button-9', val: 9},
                {class: 'calculator__button-delete', val: ''},
                {class: 'calculator__button-0', val: 0},
                {class: 'calculator__button-ok', val: ''}
            ]
        }
    },
    methods: {
        writeLogin(val) {
            // Only numbers allowed
            if (!isNaN(val) && this.login.length !== this.loginLength) {
                this.login.push(val)
                this.checkButtonsState()
            }
        },
        checkButtonsState() {
            if (this.login.length !== this.loginLength) {
                this.enableButtons()
                this.addMyClass('calculator__button-ok', 'calculator__button--disabled')
            } else {
                this.disableNumbers()
                this.removeMyClass('calculator__button-ok', 'calculator__button--disabled')
            }
        },
        deleteLastChar() {
            this.login.splice(-1,1)
            this.checkButtonsState()
        },
        makeLogin() {
            if (this.$refs['calculator__button-ok'][0].classList.contains('calculator__button--disabled')) {
                return
            }
            axios.post(login, {
                code: this.login.join(""),
                license: 'champion'
            }).then((res) => {
                if (res.data.error) {
                    this.error = true
                    return
                }
                EventBus.$emit("authed")
            })
        },
        addMyClass(btnClass, btnClassToAdd) {
            this.$refs[btnClass][0].classList.add(btnClassToAdd)
        },
        removeMyClass(btnClass, btnClassToRemove) {
            this.$refs[btnClass][0].classList.remove(btnClassToRemove)
        },
        disableNumbers() {
            for (const button of this.buttons) {
                if (button.class !== 'calculator__button-delete' &&
                    button.class !== 'calculator__button-ok' &&
                    !this.$refs[button.class][0].classList.contains('calculator__button--disabled')
                ) {
                        this.$refs[button.class][0].classList.add('calculator__button--disabled')
                }
            }
        },
        enableButtons() {
            for (const button of this.buttons) {
                this.$refs[button.class][0].classList.remove('calculator__button--disabled')
            }
        },
        hideErrorModal() {
            this.error = false
            this.resetCalculator()
        },
        resetCalculator() {
            this.login = []
            this.enableButtons()
        },
        onKeyDown(e) {
            switch (e.keyCode) {
                case 13:
                    this.makeLogin()
                break
                default:
                    this.writeLogin(parseInt(e.key))
                break
            }
        }
    },
    mounted() {
        this.checkButtonsState()
        document.addEventListener('keydown', e => this.onKeyDown(e));
    },
    beforeDestroy() {
        document.removeEventListener('keydown', () => this.onKeyDown(), false);
    }
}
</script>
