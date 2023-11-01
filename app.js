Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup', (e1)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName("bi-carpet-down-fill")[i].getElementsByClassName.transform="rotate(100deg)";
        } else {
            document.getElementsByClassName("bi-carpet-down-fill")[i].getElementsByClassName.transform="rotate(0deg)";
        
            
        }
    })

})

