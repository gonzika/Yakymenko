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

// function translate() {
//     title = "Resume Yakymenko Mykola"
//     name = "Yakymenko Mykola"
//     tel = "Mobile-phone:"
//     birthday = "Birthday: 1991/10/31"
//     city = "City: Mariupol, Ukraine"
//     education = "Education"
//     account = "01.09.2011 - 21.06.2015. Priazovsky State Technical University. Specialty: accounting and audit. Scientific degree: Master"
//     works = "My works"
//     emTitle = "Don't finished yet"

//     document.getElementsByTagName("TITLE")[0].text = title
//     document.getElementById('name').innerHTML = name
//     document.getElementById('tel').innerHTML = tel
//     document.getElementById('birthday').innerHTML = birthday
//     document.getElementById('city').innerHTML = city
//     document.getElementById('education').innerHTML = education
//     document.getElementById('account').innerHTML = account
//     document.getElementById('works').innerHTML = works
//     document.getElementById('today').title = emTitle
//     document.getElementById('today1').title = emTitle
// }
