const sber_btn = document.querySelector('.btn_c-sber');
const tbank_btn = document.querySelector('.btn_c-tbank');
sber_btn.addEventListener("click", () => {
    window.open("sbol://p2p/perevod?recipientNumber=9221714929")
})
// "https://www.tinkoff.ru/rm/lugovoy.filipp1/2n5gO45226"
console.log(sber_btn);