
function toggleFaq(id) {
    const answer = document.getElementById(`answer-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    const faqItem = answer.closest('.faq-item');

    if (faqItem.classList.contains('active')) {
        faqItem.classList.remove('active');
        icon.textContent = "+";
    } else {
        faqItem.classList.add('active');
        icon.textContent = "-";
    }
}


// contact



function submitForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    if (name && phone) {
        alert(`Thank you, ${name}. We will contact you shortly at ${phone}.`);
    } else {
        alert('Please fill in both fields.');
    }
}