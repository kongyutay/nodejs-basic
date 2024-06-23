const tds = document.querySelectorAll('td');
tds.forEach(item => {
    item.onClick = function(){
        this.style.background = "#222";
    }
});