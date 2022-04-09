
const allLinks= document.querySelectorAll('a:link');
allLinks.forEach(function(link){
    const hreff = link.getAttribute('href');
    const id = link.getAttribute('id');
    if(id=== "nav-links" ){
    link.addEventListener("click",function(e){
        e.preventDefault();
        const href = link.getAttribute('href');
        //Scroll back to top
        $("#navi-toggle").prop("checked",false);

        if(href==='#'){

            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
        }        else if(href !=='#' && href.startsWith("#")){
                setTimeout(()=>{
                    const sectionEl = document.querySelector(href);
                    sectionEl.scrollIntoView({behavior: 'smooth'});
                },500)

              
              

        }


    })
}
})
















