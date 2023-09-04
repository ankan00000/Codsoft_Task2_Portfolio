
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {  
            // entry.target.classList.add('sp')        
            // showProgress();
            entry.target.classList.remove('hp') 

        } else {
            entry.target.classList.add('hp') 
            // hideProgress();
        }
    });
});
const progressbar=document.querySelectorAll('.progress-bar')
progressbar.forEach(el=>observer.observe(el));