

// addEventListener for 'history' button
document.getElementById('history-button').addEventListener('click', function() {
    this.classList.add('bg-[#B4F461]', 'text-black-1');
    this.classList.remove('border', 'border-[#1111114D]', 'text-black-2');


    const donationButton = tabButtonId('donation-button');
    donationButton.classList.remove('bg-[#B4F461]', 'text-black-1');
    donationButton.classList.add('border', 'border-[#1111114D]', 'text-black-2');


    const donationArea = tabButtonId('donation-area');
    donationArea.classList.add('hidden');

});


// addEventListener for 'donation' button
document.getElementById('donation-button').addEventListener('click', function() {
    this.classList.add('bg-[#B4F461]', 'text-black-1');
    this.classList.remove('border', 'border-[#1111114D]', 'text-black-2');


    const historyButton = tabButtonId('history-button');
    historyButton.classList.remove('bg-[#B4F461]', 'text-black-1');
    historyButton.classList.add('border', 'border-[#1111114D]', 'text-black-2');


    const donationArea = tabButtonId('donation-area');
    donationArea.classList.remove('hidden');


});





