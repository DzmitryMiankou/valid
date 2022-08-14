`use strict`
const Form = {
    data() {
        return {
            regex: {
                regLetter: /^[а-яА-Я'][а-яА-Я-' ]+[а-яА-Я']?$/,
                regLoginPassword: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
            },
            name: {
                name: `Ваше имя`, 
                seenName: false,
                nameErrorText: `ввели некоректное имя`,
            },
            family: {
                family: `Ваша фамилия`,
                seenFamily: false,
                familyErrorText: `ввели некоректную фамилию`,
            },   
            login: {
                login: `Логин`,
                seenLogin: false,
                loginErrorText: `латинская буква, цифры (f34rf_)`,
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
                passError2: `Пароль не совпадает`,
            },
            age: {
                age: `Возраст`,
                seenAge: false,
                ageError: `не верный возраст`
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
    }
}

Vue.createApp(Form).mount('#form')
