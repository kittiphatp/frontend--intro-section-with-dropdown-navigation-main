let btnFeature = document.querySelector('.feature');
let btnCompany = document.querySelector('.company');

let arrowFeature = document.querySelector('.arrow-feature');
let arrowCompany = document.querySelector('.arrow-company');


btnFeature.addEventListener('click', () => {
    let ckFeatureActive = document.querySelector('.feature').childNodes[5].classList[1];
    if (ckFeatureActive!="active") {
        btnFeature.childNodes[5].classList.add('active');
        arrowFeature.src = "/images/icon-arrow-up.svg"
    } else {
        btnFeature.childNodes[5].classList.remove('active');
        arrowFeature.src = "/images/icon-arrow-down.svg"
    }
});

btnCompany.addEventListener('click', () => {
    let ckCompanyActive = document.querySelector('.company').childNodes[5].classList[1];
    if (ckCompanyActive!="active") {
        btnCompany.childNodes[5].classList.add('active')
        arrowCompany.src = "/images/icon-arrow-up.svg"
    } else {
        btnCompany.childNodes[5].classList.remove('active');
        arrowCompany.src = "/images/icon-arrow-down.svg"
    }
    
});

