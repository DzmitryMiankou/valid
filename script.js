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
            } 
        }
    },
    methods: {
        nameImput(event) {
            const test = this.regex.regLetter.test(event.target.value)
            test === false? this.name.seenName = true: this.name.seenName = false;
        },
        familyImput(event) {
            const test = this.regex.regLetter.test(event.target.value)
            test === false? this.family.seenFamily = true: this.family.seenFamily = false;
        },
        loginImput(event) {
             const test = this.regex.regLoginPassword.test(event.target.value)
             test === false? this.login.seenLogin = true: this.login.seenLogin = false;
        }
    }
}

Vue.createApp(Form).mount('#form')
