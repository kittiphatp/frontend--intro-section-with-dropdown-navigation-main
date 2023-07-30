let btnFeature = document.querySelector('.feature');
let btnCompany = document.querySelector('.company');

let arrowFeature = document.querySelector('.arrow-feature');
let arrowCompany = document.querySelector('.arrow-company');


btnFeature.addEventListener('click', (e) => {
    let ckFeatureActive = document.querySelector('.feature').childNodes[5].classList[1];
    
    // check screen size for mobile
    let currentSubMenuForMobile = e.view.screen.availWidth
    // console.log(currentSubMenuForMobile)

    if (ckFeatureActive!="active") {
        btnFeature.childNodes[5].classList.add('active');
        arrowFeature.src = "/images/icon-arrow-up.svg";


        // POP-UP SUBMENU FOR MOBILE
        if(currentSubMenuForMobile <= 375) {
            btnFeature.style.height = '180px'
        }

    } else {
        btnFeature.childNodes[5].classList.remove('active');
        arrowFeature.src = "/images/icon-arrow-down.svg";

        // POP-UP SUBMENU FOR MOBILE
        if(currentSubMenuForMobile <= 375)  {
            btnFeature.style.height = '38px';
            btnFeature.childNodes[5].classList.remove('active');
        }
    }
});

btnCompany.addEventListener('click', (e) => {
    let ckCompanyActive = document.querySelector('.company').childNodes[5].classList[1];
    
    // check screen size for mobile
    let currentSubMenuForMobile = e.view.screen.availWidth
    // console.log(currentSubMenuForMobile)
    
    if (ckCompanyActive!="active") {
        btnCompany.childNodes[5].classList.add('active')
        arrowCompany.src = "/images/icon-arrow-up.svg"

        // POP-UP SUBMENU FOR MOBILE
        if(currentSubMenuForMobile <= 375) {
            btnCompany.style.height = '180px'
        }

    } else {
        btnCompany.childNodes[5].classList.remove('active');
        arrowCompany.src = "/images/icon-arrow-down.svg"

         // POP-UP SUBMENU FOR MOBILE
         if(currentSubMenuForMobile <= 375)  {
            btnCompany.style.height = '38px';
            btnCompany.childNodes[5].classList.remove('active');
        }
    }
    
});


// MOBILE
let hamMenu = document.querySelector('.ham-menu');
let ckHam = 0;

hamMenu.addEventListener('click', () => {
    
    if(ckHam == 0) {
        hamMenu.src = "/images/icon-close-menu.svg";
        let navMenu = document.querySelector('menu')
        navMenu.classList.add('active');
        navMenu.nextElementSibling.style.display = 'inline-block';

        ckHam++
    } else {
        hamMenu.src = "/images/icon-menu.svg";
        let navMenu = document.querySelector('menu')
        navMenu.classList.remove('active');
        navMenu.nextElementSibling.style.display = 'none';

        ckHam--
    }
  
});

addEventListener('resize', (e) => {
    let currentSrcWidth = e.srcElement.screen.width
    // console.log(e.srcElement.screen.width);

    let authenMenu = document.querySelector('.authen')

    if(currentSrcWidth > 375 && ckHam == 0) {
        authenMenu.style.display = 'block';
        // console.log(`width: ${currentSrcWidth} and ckHam = ${ckHam}`);
    } else if (currentSrcWidth > 375 && ckHam == 1) {
        hamMenu.src = "/images/icon-menu.svg";
        let navMenu = document.querySelector('menu')
        navMenu.classList.remove('active');
        authenMenu.style.display = 'inline-block';
        // console.log(`width: ${currentSrcWidth} and ckHam = ${ckHam}`);
    } else if (currentSrcWidth <= 375 && ckHam == 0) {
        authenMenu.style.display = 'none';
        // console.log(`width: ${currentSrcWidth} and ckHam = ${ckHam}`);
    } else if (currentSrcWidth <= 375 && ckHam == 1) {
        hamMenu.src = "/images/icon-menu.svg";
        let navMenu = document.querySelector('menu')
        navMenu.classList.remove('active');
        authenMenu.style.display = 'none';
        // console.log(`width: ${currentSrcWidth} and ckHam = ${ckHam}`);
    }

    // Disable pop-up when there're resize screen
    btnFeature.childNodes[5].classList.remove('active');
    arrowFeature.src = "/images/icon-arrow-down.svg";
    btnFeature.style.height = '38px';
    btnCompany.childNodes[5].classList.remove('active');
    arrowCompany.src = "/images/icon-arrow-down.svg";
    btnCompany.style.height = '38px';

    if(currentSrcWidth > 375) {
        btnFeature.style.height = '18px';
        btnCompany.style.height = '18px';
    }




});


// MOBILE WITH SUB-MENU
