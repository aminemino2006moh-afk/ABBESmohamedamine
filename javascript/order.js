function selectOption(type, element) {
    document.querySelectorAll('.card').forEach(card => card.classList.remove('selected'));
   element.classList.add('selected');
    document.getElementById('selectedType').value = type;
}

document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.querySelector('form');
    if (orderForm) {
        orderForm.addEventListener("submit", function(e) {
            e.preventDefault();
           alert("Merci pour votre commande ! Votre demande a été bien enregistrée.");
            window.location.href = "../index.html";
        });
    }

const display = document.getElementById('product-display');
    if (display) {
        const orderData = JSON.parse(localStorage.getItem('pendingOrder'));
        if (orderData) {
            display.innerHTML = `
                <div class="order-card">
                    <h3>${orderData.nom}</h3>
                    <p>Prix: ${orderData.prix} DA</p>
                    <button class="btn-order" onclick="finaliserAchat()">Finaliser l'achat</button>
                </div>
            `;
        }
    }
});

function finaliserAchat() {
    alert('Merci pour votre achat!');
    localStorage.removeItem('pendingOrder');
    window.location.href = "../index.html";
}