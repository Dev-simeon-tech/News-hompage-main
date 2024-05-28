const primaryHeader = document.querySelector('.primary-header');
const primaryNav = document.querySelector('.primary-navigation');
const mobileToggle = document.querySelector('.mobile-nav-toggle');

const showNavigation = (header,nav,toggleBtn)=>{
    toggleBtn.addEventListener( 'click', ()=>{
        const visibility = nav.getAttribute('aria-expanded');

        if(visibility === 'false'){
            nav.setAttribute('aria-expanded',true);
            toggleBtn.setAttribute('aria-expanded',true);
        }
        else{
            nav.setAttribute('aria-expanded',false);
            toggleBtn.setAttribute('aria-expanded',false);  
        }
        header.toggleAttribute('data-overlay');

    })

}
showNavigation(primaryHeader,primaryNav,mobileToggle);