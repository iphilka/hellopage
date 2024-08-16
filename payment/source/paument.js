const sber_btn = document.querySelector('.btn_c-sber');
const tbank_btn = document.querySelector('.btn_c-tbank');

sber_btn.addEventListener("click", () => {
    setTimeout(function() {
        window.location.href = "sberbank-online://p2p/perevod?recipientNumber=9221714929";
    }, 1000)
    
})

sber_btn.addEventListener("click", () => {
    setTimeout(function() {
        window.location.href = "tinkoffbank://P2PTransfer?contractId=5171423667";
    }, 1000)
})

console.log(sber_btn);