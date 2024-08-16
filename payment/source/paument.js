const sber_btn = document.querySelector('.btn_c-sber');
const tbank_btn = document.querySelector('.btn_c-tbank');

sber_btn.addEventListener("click", () => {
    setTimeout(function() {
        window.location = "sberbank-online://p2p/perevod?recipientNumber=9221714929";
    }, 10)
    
})

sber_btn.addEventListener("click", () => {
    setTimeout(function() {
        window.location = "tinkoffbank://P2PTransfer?contractId=5171423667";
    }, 10)
})

console.log(sber_btn);