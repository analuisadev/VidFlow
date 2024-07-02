const SwitchMode = {
    // input: document.querySelector('.search__input'),
    // searchButton: document.querySelector('.search__btn'),
    // audioButton: document.querySelector('.header__audio'),
    htmlBody: document.body,

    lightMode() {
        this.htmlBody.classList.remove('dark')
        this.htmlBody.classList.add('light')
    },

    darkMode() {
        this.htmlBody.classList.remove('light')
        this.htmlBody.classList.add('dark')
    }
}

const lightMode = () => SwitchMode.lightMode()

const darkMode = () => SwitchMode.darkMode()