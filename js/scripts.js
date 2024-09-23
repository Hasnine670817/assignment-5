// blog-btn click
document.getElementById('blog-btn').addEventListener('click', function() {
    window.location.href = 'blog.html';
});


// addEventListener for 'history' button
document.getElementById('history-button').addEventListener('click', function() {
    this.classList.add('bg-[#B4F461]', 'text-black-1');
    this.classList.remove('border', 'border-[#1111114D]', 'text-black-2');


    const donationButton = tabButtonId('donation-button');
    donationButton.classList.remove('bg-[#B4F461]', 'text-black-1');
    donationButton.classList.add('border', 'border-[#1111114D]', 'text-black-2');


    const donationArea = tabButtonId('donation-area');
    donationArea.classList.add('hidden');

    document.getElementById('history-container').classList.remove('hidden');

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

    document.getElementById('history-container').classList.add('hidden');


});





// flood-1 donate calculation
document.getElementById('donate-button1').addEventListener('click', function(event) {
    event.preventDefault();

    const userTotalAmount = innerTextValueId('user-total-amount');
    let donationInput1 = inputValueId('donation-input1');
    const flood1Amount = innerTextValueId('flood1-amount');

    // If the input is empty or not a valid amount
    if (isNaN(donationInput1) || donationInput1 < 1) {
        alert("Please enter a valid amount");
        return;
    }

    // If the amount becomes more than the total amount
    if (userTotalAmount < donationInput1) {
        alert("You don't have enough money");
        return;
    }

    // Calculate donateFlood1
    const donateForFlood1 = flood1Amount + donationInput1;
    document.getElementById('flood1-amount').innerText = donateForFlood1;
    
    // Calculate totalAmount
    const newUserTotalAmount = userTotalAmount - donationInput1;
    document.getElementById('user-total-amount').innerText = newUserTotalAmount;

    const congratsSection = document.getElementById('congrats-section');
    congratsSection.classList.remove('hidden');

    const closeInfoButtons = document.getElementById('close-info-btn1');
    closeInfoButtons.addEventListener('click', function() {
        congratsSection.classList.add('hidden');
    });


    // for date and time
    const dateToday = new Date();

    // for history value
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="border border-[#1111111A] rounded-2xl p-5 md:p-8 mb-6">
            <h3 class="text-base md:text-xl font-bold mb-2 md:mb-4">${donationInput1} Taka Donate for Flood at Noakhali, Bangladesh</h3>
            <p class="text-sm md:text-base font-light text-black-2">Date : ${dateToday}</p>
        </div>
    `
    
    document.getElementById('inr-history-container').appendChild(div);
    
    
});



// flood-2 donate calculation
document.getElementById('donate-button2').addEventListener('click', function(event) {
    event.preventDefault();

    const userTotalAmount = innerTextValueId('user-total-amount');
    let donationInput2 = inputValueId('donation-input2');
    const flood2Amount = innerTextValueId('flood2-amount');

    // If the input is empty or not a valid amount
    if (isNaN(donationInput2) || donationInput2 < 1) {
        alert("Please enter a valid amount");
        return;
    }

    // If the amount becomes more than the total amount
    if (userTotalAmount < donationInput2) {
        alert("You don't have enough money");
        return;
    }

    // Calculate donateFlood2
    const donateForFlood2 = flood2Amount + donationInput2;
    document.getElementById('flood2-amount').innerText = donateForFlood2;
    
    // Calculate totalAmount
    const newUserTotalAmount = userTotalAmount - donationInput2;
    document.getElementById('user-total-amount').innerText = newUserTotalAmount;

    const congratsSection = document.getElementById('congrats-section');
    congratsSection.classList.remove('hidden');

    const closeInfoButtons = document.getElementById('close-info-btn1');
    closeInfoButtons.addEventListener('click', function() {
        congratsSection.classList.add('hidden');
    });



    // for date and time
    const dateToday = new Date();

    // for history value
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="border border-[#1111111A] rounded-2xl p-5 md:p-8 mb-6">
            <h3 class="text-base md:text-xl font-bold mb-2 md:mb-4">${donationInput2} Taka Donate for Flood Relief in Feni,Bangladesh</h3>
            <p class="text-sm md:text-base font-light text-black-2">Date : ${dateToday}</p>
        </div>
    `
    
    document.getElementById('inr-history-container').appendChild(div);
    
    
});



// injured donate calculation
document.getElementById('donate-button3').addEventListener('click', function(event) {
    event.preventDefault();

    const userTotalAmount = innerTextValueId('user-total-amount');
    let donationInput3 = inputValueId('donation-input3');
    const flood3Amount = innerTextValueId('flood3-amount');

    // If the input is empty or not a valid amount
    if (isNaN(donationInput3) || donationInput3 < 1) {
        alert("Please enter a valid amount");
        return;
    }

    // If the amount becomes more than the total amount
    if (userTotalAmount < donationInput3) {
        alert("You don't have enough money");
        return;
    }

    // Calculate donateFlood2
    const donateForFlood3 = flood3Amount + donationInput3;
    document.getElementById('flood3-amount').innerText = donateForFlood3;
    
    // Calculate totalAmount
    const newUserTotalAmount = userTotalAmount - donationInput3;
    document.getElementById('user-total-amount').innerText = newUserTotalAmount;

    const congratsSection = document.getElementById('congrats-section');
    congratsSection.classList.remove('hidden');

    const closeInfoButtons = document.getElementById('close-info-btn1');
    closeInfoButtons.addEventListener('click', function() {
        congratsSection.classList.add('hidden');
    });



    // for date and time
    const dateToday = new Date();

    // for history value
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="border border-[#1111111A] rounded-2xl p-5 md:p-8 mb-6">
            <h3 class="text-base md:text-xl font-bold mb-2 md:mb-4">${donationInput3} Taka Aid for Injured in the Quota Movement</h3>
            <p class="text-sm md:text-base font-light text-black-2">Date : ${dateToday}</p>
        </div>
    `
    
    document.getElementById('inr-history-container').appendChild(div);
    
    
});