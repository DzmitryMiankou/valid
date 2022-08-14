`use strict`
const Form = {
    data() {
        return {
            disabled: null,
            regex: {
                regLetter: /^[а-яА-Я'][а-яА-Я-' ]+[а-яА-Я']?$/,
                regLoginPassword: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                regEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
            name: {
                name: `Ваше имя`, 
                seenName: false,
                nameErrorText: `некорректное имя`,
            },
            family: {
                family: `Ваша фамилия`,
                seenFamily: false,
                familyErrorText: `некорректная фамилия`,
            },   
            login: {
                login: `Логин`,
                seenLogin: false,
                loginErrorText: `латинская буква и цифры (f34rf_)`,
            },
            pass: {
                pass: `Пароль`,
                seenPass: false,
                passError: ``,
                PassErrorText: `только цифры и латинский`,
                PassErrorTextLength: `пароль не может быть меньше 6 символов`,
            },
            pass2: {
                pass1: null,
                seenPass2: false,
                pass2: `Повторите пароль`,
                passError2: `пароль не совпадает`,
            },
            age: {
                age: `Возраст`,
                seenAge: false,
                ageError: `не верный возраст`
            },
            mail: {
                mail: `E-mail`,
                seenMail: false,
                mailError: `не верный E-mail`,
            },
            submit: {
                submit: `Зарегистрироваться`,
            }
        }
    },
    methods: {
        nameImput(event) {
            const test = this.regex.regLetter.test(event.target.value)
            test === false? this.name.seenName = true: this.name.seenName = false
        },
        familyImput(event) {
            const test = this.regex.regLetter.test(event.target.value)
            test === false? this.family.seenFamily = true: this.family.seenFamily = false
        },
        loginImput(event) {
             const test = this.regex.regLoginPassword.test(event.target.value)
             test === false? this.login.seenLogin = true: this.login.seenLogin = false
        },
        passImput(event) {
            if(event.target.value.length < 7 ) {
                this.pass.PassError = this.pass.PassErrorTextLength
                this.pass.seenPass = true
            } else {
                const test = this.regex.regLoginPassword.test(event.target.value)
                if(test === false) {
                    this.pass.PassError = this.pass.PassErrorText
                    this.pass.seenPass = true
                }else{
                    this.pass.seenPass = false
                }
                this.pass2.pass1 = event.target.value
            }
        },
        pass2Input(event) {
            event.target.value !== this.pass2.pass1? this.pass2.seenPass2 = true: this.pass2.seenPass2 = false
        },
        ageInput(event) {
            let ev = Math.floor(event.target.value)
            ev < 6 || ev > 125 || isNaN(ev)? this.age.seenAge = true: this.age.seenAge = false
        },
        mailInput(event) {
            const test = this.regex.regEmail.test(event.target.value)
            test === false? this.mail.seenMail = true: this.mail.seenMail = false
        },
        submitClick(event) {
            this.name.seenName || this.family.seenFamily || this.login.seenLogin || this.pass.seenPass || this.pass2.seenPass2 || this.age.seenAge || this.mail.seenMail  === true? event.preventDefault(): null
        }
    }
}

Vue.createApp(Form).mount('#form')
