let ulProductsList = document.querySelector('#productsList');

function createObjects (id, img, type, name, description, value) {
    let product = {
        id: id,
        img: img,
        type: type,
        name: name,
        description: description,
        value: value
    }

    return product;
}

let arrProductsList = [];

arrProductsList.push(createObjects(1, "./assets/equipamentos/A3-Banner-Image.png", "Equipamentos", "Citômetro de fluxo BD FACSymphony A3 Cell Analyzer", "Um citômetro de fluxo personalizável que fornece análise de alto parâmetro em um espaço menor", "R$600.000"));

arrProductsList.push(createObjects(2, "./assets/equipamentos/BD-FACSCanto-II.png", "Equipamentos", "Citômetro de fluxo BD FACSCanto Clinical Flow Cytometry System", "Qualidade e desempenho comprovados nos quais você pode confiar", "R$670.000"));

arrProductsList.push(createObjects(3, "./assets/reagentes/340499_01.png", "Reagentes", "Multitest CD3 FITC/ CD8 PE/ CD45 PerCP/ CD4 APC reagent", "Kit contendo anticorpos anti-CD3, anti-CD45, anti-CD8, anti-CD4", "R$1000"));

arrProductsList.push(createObjects(4, "./assets/reagentes/340664_01.png", "Reagentes", "CD45 FITC", "Kit contendo anticorpo monoclonal anti-CD45 humano com flurocromo FITC", "R$400"));

arrProductsList.push(createObjects(5, "./assets/recipientes/340334_01.png", "Recipientes", "Trucount Absolute Counting Tubes IVD", "Tubos de citometria de fluxo contendo beads para análise quantitativa de eventos", "R$2000"));

arrProductsList.push(createObjects(6, "./assets/recipientes/362760_01.png", "Recipientes", "Mononuclear Cell Preparation Tube - Sodium Citrate", "Usado para a separação de células mononucleares do sangue total", "R$500"));

arrProductsList.push(createObjects(7, "./assets/equipamentos/FACSDiscover-S8-Banner-Image.png", "Equipamentos", "Citômetro de fluxo BD FACSDiscover™ S8 Cell Sorter", "É o primeiro citômetro de fluxo cell-sorter com capacidade de análise por imagem", "R$800.000"));

arrProductsList.push(createObjects(8, "./assets/equipamentos/Lyric-Banner.png", "Equipamentos", "Citômetro de fluxo BD FACSLyric Clinical Flow Cytometry System", "Descubra como este citômetro de fluxo pode transformar seu laboratório clínico com excelente desempenho, automação e padronização", "R$650.000"));

arrProductsList.push(createObjects(9, "./assets/reagentes/340672_01.png", "Reagentes", "CD4 APC", "Kit contendo anticorpo monoclonal anti-CD4 humano com flurocromo APC", "R$400"));

arrProductsList.push(createObjects(10, "./assets/reagentes/340693_01.png", "Reagentes", "CD8 PerCP", "Kit contendo anticorpo monoclonal anti-CD8 humano com flurocromo PerCP", "R$400"));

arrProductsList.push(createObjects(11, "./assets/recipientes/362788_01.png", "Recipientes", "Vacutainer PPT Plasma Preparation Tube", "Usado para a separação de plasma do sangue total", "R$500"));

arrProductsList.push(createObjects(12, "./assets/recipientes/frasco-reagente-graduado-tampa-azul.jpg", "Recipientes", "Frasco reagente graduado com tampa azul", "Usado para o armazenamento de reagentes utilizados durante a preparação de amostras", "R$300"));

arrProductsList.push(createObjects(13, "./assets/equipamentos/Melody.png", "Equipamentos", "Citômetro de fluxo BD FACSMelody Cell Sorter", "Descubra uma forma de separar eventos de interesse de diversas amostras de forma rápida, acessível e automatizada", "R$700.000"));

arrProductsList.push(createObjects(14, "./assets/equipamentos/Symphony-A5-Banner.png", "Equipamentos", "Citômetro de fluxo BD FACSymphony A5 Cell Analyzer", "Um citômetro de fluxo personalizável para análise de até 50 parâmetros", "R$850.000"));

arrProductsList.push(createObjects(15, "./assets/reagentes/349201_01.png", "Reagentes", "CD3 FITC", "Kit contendo anticorpo monoclonal anti-CD3 humano com flurocromo FITC", "R$400"));

arrProductsList.push(createObjects(16, "./assets/reagentes/controlSamples.png", "Reagentes", "Calibrite 3 Beads", "Os beads são usados para ajustar as configurações do instrumento, definir a compensação de ﬂuorescência e verificar a sensibilidade do instrumento", "R$1500"));

arrProductsList.push(createObjects(17, "./assets/recipientes/proveta.jpg", "Recipientes", "Proveta graduada de 100mL", "Usada para a preparação de soluções químicas", "R$100"));

arrProductsList.push(createObjects(18, "./assets/recipientes/tubosEDTA.png", "Recipientes", "EDTA tubes", "ubos de coleta de sangue à vácuo contendo anticoagulante EDTA", "R$500"));

function addCardsOnProductsList (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++
        let li = document.createElement('li');
        li.setAttribute('id', `_P${count}`);

        let divImages = document.createElement('div');
        divImages.classList.add('images');

        let img = document.createElement('img');
        img.src = arr[i].img;

        divImages.appendChild(img);

        li.appendChild(divImages);

        let pType = document.createElement('p');
        pType.classList.add('product-type');
        pType.innerHTML = arr[i].type;
        li.appendChild(pType);

        let productsName = document.createElement('h2');
        productsName.innerHTML = arr[i].name;
        li.appendChild(productsName);

        let pDescription = document.createElement('p');
        pDescription.classList.add('description');
        pDescription.innerHTML = arr[i].description;
        li.appendChild(pDescription);

        let span = document.createElement('span');
        span.innerHTML = arr[i].value;
        li.appendChild(span);

        let buttonAddProducts = document.createElement('button');
        buttonAddProducts.classList.add('addProducts');
        buttonAddProducts.setAttribute('id', `_B${count}`);
        buttonAddProducts.innerHTML = 'Adicionar ao carrinho'; 
        li.appendChild(buttonAddProducts);

        ulProductsList.appendChild(li);
    }
    return ulProductsList;
}

addCardsOnProductsList (arrProductsList);

/* Adicionar evento de adicionar e remover os itens do carrinho*/

let amountValue = 0;

let cart = [];

let ulShoppingCart = document.querySelector('#products-cart');

let amount = document.querySelector('#qt');

let total = document.querySelector('#value');

let buttonsAdicionar = document.querySelectorAll('.addProducts'); 

function addButtonFuncionality (buttonsAdicionar, arr) {
    for (let buttons = 0; buttons < buttonsAdicionar.length; buttons++) {
        let button = buttonsAdicionar[buttons];

        button.addEventListener('click', function(e) {
            let idButton = e.target.id;
            let id = parseInt(idButton.substring(2));

            if(verifyProduct(id) === false) {
                amountValue++

                let searchId = searchProduct(id, arr);

                cart.push(searchId);

                let productCard = createCardsShoppingCart (searchId);

                ulShoppingCart.appendChild(productCard);

                amount = document.querySelector('#qt');
                amount.innerHTML = amountValue;

                calculateTotal (cart);
            }
        })
    } 
}

addButtonFuncionality (buttonsAdicionar, arrProductsList);


function verifyProduct (id) {
    let product = document.querySelector('#_C'+id);
    if (product === null) {
        return false;
    } else {
        return true;
    }
}

function searchProduct (id, arr){
    for(let i = 0; i < arr.length ; i++){
        let product = arr[i];
        if(product.id == id){
            return product;
        }
    }
    return 'Produto não encontrado';
}

function createCardsShoppingCart (searchId) {
    let li = document.createElement('li');
    li.setAttribute('id', `_C${searchId.id}`);

    let img = document.createElement('img');
    img.src = searchId.img;
    li.appendChild(img);

    let div = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.innerHTML = searchId.name;

    let span = document.createElement('span');
    span.innerHTML = searchId.value;

    let button = document.createElement('button');
    button.setAttribute('id', `_BC${searchId.id}`);
    button.classList.add('remove-button');
    button.innerHTML = 'Remover produto';

    div.appendChild(h3);
    div.appendChild(span);
    div.appendChild(button);

    li.appendChild(div);

    button.addEventListener('click', function() {
        let liCart = document.querySelector('#_C'+searchId.id);
        liCart.remove()

        console.log(cart);

        cart = cart.filter(function(e) {
            return e.id != searchId.id
        })

        calculateTotal (cart);

        amountValue--;
        amount.innerHTML = amountValue;
    })

    return li;
}

function calculateTotal (arr) {
    let sum = 0;

    for (let value = 0; value < arr.length; value++) {
        let valueAdjustment = arr[value].value.substring(2);

        let newValue = "";

            for (let i = 0; i < valueAdjustment.length; i++)
            {
                if (valueAdjustment[i] !== '.') {
                newValue+=valueAdjustment[i];
                }
             } 
            sum+=parseFloat(newValue);
    }
            
    total.innerHTML = `R$${sum.toLocaleString()}`
}

/*Adicionando funcionalidade aos botões do menu*/

let allButton = document.querySelector('#all');

allButton.addEventListener('click', function() {
    ulProductsList.innerHTML = '';

    let addCards = addCardsOnProductsList (arrProductsList);

    let buttonsAdicionar = document.querySelectorAll('.addProducts'); 

    let addButtons = addButtonFuncionality (buttonsAdicionar, arrProductsList)
})

let equipment = [];
let reagent = [];
let recipient = [];

for (let products = 0; products < arrProductsList.length; products++) {
    if (arrProductsList[products].type === 'Equipamentos') {
        equipment.push(arrProductsList[products]);
    } else if (arrProductsList[products].type === 'Reagentes') {
        reagent.push(arrProductsList[products]);
    } else if (arrProductsList[products].type === 'Recipientes') {
        recipient.push(arrProductsList[products]);
    }
}

let machinesButton = document.querySelector('#machines');

machinesButton.addEventListener('click', function() {
    ulProductsList.innerHTML = '';

    let addCards = addCardsOnProductsList (equipment);

    let buttonsAdicionar = document.querySelectorAll('.addProducts'); 

    let addButtons = addButtonFuncionality (buttonsAdicionar, equipment);
})

let reagentsButton = document.querySelector('#reagents');

reagentsButton.addEventListener('click', function() {
    ulProductsList.innerHTML = '';

    let addCards = addCardsOnProductsList (reagent);
})

let recipientsButton = document.querySelector('#recipients');

recipientsButton.addEventListener('click', function() {
    ulProductsList.innerHTML = '';

    let addCards = addCardsOnProductsList (recipient);
})


/*Adicionando funcionalidade no input*/

let searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('input', function(e){
    let element = e.target.value;
    newArray = [];

    for (let i = 0; i < arrProductsList.length; i++) {
        let nameLowerCase = arrProductsList[i].name.toLowerCase()
        let typeLowerCase = arrProductsList[i].type.toLowerCase()
        if (nameLowerCase.includes(element.toLowerCase()) === true || typeLowerCase.includes(element.toLowerCase())) {
            newArray.push(arrProductsList[i])
        } 
    }
    ulProductsList.innerHTML = '';
    addCardsOnProductsList(newArray);
})