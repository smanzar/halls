
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
    if (itemClass == 'accordionItem open') {
        this.parentNode.className = 'accordionItem close';
    }
}

function myFunction(id)
{
    var e = document.getElementById(id);
    if (e.className == 'navbar-nav active')
    {
        e.className="navbar-nav";
    }
    else
    {
        e.className="navbar-nav active";
        // console.log()
        // e.style.display = 'active';
    }
}