const sber_btn = document.querySelector('.btn_c-sber');
const tbank_btn = document.querySelector('.btn_c-tbank');

sber_btn.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        window.location = 'location';
    }, 5);
    window.location = "sbol://p2p/perevod?recipientNumber=9221714929";    
})

tbank_btn.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(function() {
        window.location = 'location';
    }, 5)
    window.location.href = "tinkoffbank://P2PTransfer?contractId=5171423667";
    
})
