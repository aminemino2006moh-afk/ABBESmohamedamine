
const products = [
    { id: 1, nom: "Kiwi", prix:2400, stock: 20, categorie: "Chine", details: "Le kiwi, au goût à la fois sucré et acidulé, est riche en vitamine C, en fibres et en antioxydants ; il facilite la digestion, renforce le système immunitaire et aide à réguler la pression artérielle grâce à sa teneur en potassium, sans être salé ni amer",image: "../image/kiwi.jpg"},
    { id: 2, nom: "Carambola", prix: 1250, stock: 15, categorie: "Asie du Sud-Est", details: "La carambole en forme d'étoile , au goût à la fois acidulé, légèrement sucré et parfois amer selon sa maturité, sans être salée, est riche en vitamine C et en antioxydants ; elle aide à renforcer l'immunité, favorise la digestion et peut contribuer à réguler la tension artérielle grâce à sa faible teneur en sodium.",image:" ../image/carambola.jpg "},
    { id: 3, nom: "Ramboutans", prix: 1800, stock: 10, categorie: "Asie du Sud-Est", details: "Le ramboutan, au goût doux, sucré et légèrement acidulé, sans aucune amertume ni salinité, est riche en vitamine C, en cuivre et en fibres ; il renforce le système immunitaire, améliore la digestion et contribue à la santé des os et des vaisseaux sanguins.", image :"../image/ramboutans.jpg" },
    { id: 4, nom: "Litchi", prix: 1800, stock: 25, categorie: "Chine", details: "Le litchi, au goût très sucré, floral et légèrement acidulé, sans aucune amertume ni saveur salée, est riche en vitamine C, en cuivre et en antioxydants ; il booste l'immunité, favorise une belle peau et aide à lutter contre la fatigue." ,image: "../image/litchi.jpg"},
    { id: 5, nom: "Mangosteens", prix:1800 , stock: 8, categorie: "Asie du Sud-Est", details: "Le mangoustan roi des fruits tropicaux , au goût exquis à la fois sucré, légèrement acidulé et floral, sans aucune amertume ni salinité, est riche en xanthones, en vitamine C et en fibres ; il possède de puissantes propriétés antioxydantes et anti-inflammatoires, renforce le système immunitaire et favorise une bonne digestion." ,image: "../image/mangosteens.jpg"},
    { id: 6, nom: "Passion-fruit", prix: 550, stock: 30, categorie: "Amérique de Sud", details: "Le fruit de la passion, au goût intensément acidulé, sucré et légèrement amer selon sa maturité, sans aucune salinité, est riche en vitamine C, en vitamine A, en fibres et en antioxydants ; il aide à renforcer l'immunité, améliore la digestion grâce à ses graines croquantes et favorise la détente grâce à sa teneur en magnésium.",image: "../image/passion-fruit.jpg "},
    { id: 7, nom: "Dragon-fruit yellow", prix: 2500, stock: 5, categorie: "Amérique Centrale", details: "Le fruit du dragon jaune, au goût plus sucré que la variété rouge, avec une douceur agréable et une absence totale d'acidité, d'amertume ou de salinité, est riche en fibres, en vitamine C et en magnésium ; il favorise le transit intestinal, améliore la digestion, hydrate l'organisme et contribue à réduire le mauvais cholestérol." ,image:" ../image/dragon-fruitred.jpg"},
    { id: 8, nom: "Dragon-fruit red", prix:2390 , stock: 7, categorie: "Amérique de Sud", details: "Le fruit du dragon à chair rouge, au goût légèrement sucré et très doux, sans acidité prononcée ni amertume ni salinité, est riche en vitamines C et B, en fibres et en antioxydants (bétalaïnes) ; il favorise le transit intestinal, protège les cellules du vieillissement, et aide à réguler la glycémie grâce à sa faible teneur en sucre." ,image: "../image/dragon-fruityellow.jpg"},
    { id: 9, nom: "Diospyros (kaki)", prix:7100 , stock: 7, categorie: "Chine", details: "Le fruit du dragon jaune, au goût plus sucré que la variété rouge, avec une douceur agréable et une absence totale d'acidité, d'amertume ou de salinité, est riche en fibres, en vitamine C et en magnésium ; il favorise le transit intestinal, améliore la digestion, hydrate l'organisme et contribue à réduire le mauvais cholestérol." ,image: "../image/diospyros.jpg"},
    { id: 10, nom: "Achacha", prix: 2110, stock:23 , categorie: "Amérique de Sud", details: "L'achacha, au goût rafraîchissant à la fois acidulé, légèrement sucré et subtilement amer, sans aucune salinité, est riche en vitamine C et en antioxydants ; il aide à renforcer l'immunité, facilite la digestion et possède des propriétés anti-inflammatoires naturelles.",image: "../image/achacha.jpg" },
    { id: 11, nom:"Mangue" ,prix:1500,stock:112,categorie: "Asie du Sud-Est", details:"La mangue, au goût délicieusement sucré, juteux et légèrement acidulé, sans amertume ni salinité, est riche en vitamines A, C et E, en fibres et en antioxydants ; elle protège la vision, renforce l'immunité, améliore la digestion et contribue à la santé de la peau.",image: "../image/mango.jpg"},
    { id: 12, nom:"Avocat",prix:1990,stock:43,categorie: "Amérique de Sud", details:"L'avocat, au goût doux, crémeux et légèrement beurré, sans aucune acidité, amertume prononcée ni salinité naturelle, est riche en bons gras (oméga-9), en fibres, en vitamines K, C, E et en potassium ; il protège le système cardiovasculaire, favorise la satiété, améliore la digestion et contribue à une peau éclatante.",image:"../image/avocado.jpg"}
]

function displayProducts(productsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ""; 

    productsArray.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.nom}" onerror="this.src='../images/placeholder.jpg'">
                <h3>${product.nom}</h3>
                <p>Prix: ${product.prix} DA</p>
                <p>Région: ${product.categorie}</p>
                <p>Stock: ${product.stock}</p>
                <button class="btn-details" onclick="showDetails('${product.nom}')">Détails</button>
            </div>
        `;
    });
}



let selectedProduct = null;

function showDetails(productName) {
    const product = products.find(p => p.nom === productName);
    if (!product) return;

    selectedProduct = product; 
    document.getElementById('modal-title').innerText = product.nom;
    document.getElementById('modal-desc').innerText = product.details;
    document.getElementById('modal-price').innerText = "Prix: " + product.prix + " DA";
    document.getElementById('details-modal').style.display = 'flex';
}

function placeOrder() {
    if (selectedProduct) {
        localStorage.setItem('pendingOrder', JSON.stringify(selectedProduct));
        closeModal();
        window.location.href = "order.html"; 
    }}

function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
}

function filterProducts(category) {
    const filtered = (category === "all") ? products : products.filter(p => p.categorie === category);
    displayProducts(filtered, "products-container");
    const filterButtons = document.querySelectorAll('.filters .card');
    filterButtons.forEach(btn => {
        
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active'); 
        } else {
            btn.classList.remove('active'); 
        }

    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products, "products-container");
});
