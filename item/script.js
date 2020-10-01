function wait() {
    return new Promise(resolve => {
        setTimeout(() => { resolve(); }, 3000);
    });
}

async function myFunc() {
    var lang = window.navigator.language || navigator.userLanguage
    if (lang != "ru-RU") {
        await wait();
        let isBoss = confirm("Do you want to read on English?");
        if (isBoss) {
            window.location.href = 'indexEn.html';
        }
    }
}


