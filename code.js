function startUp(){
    counter = Number(document.getElementById("num").value);
    timer = setInterval(function(){typer()},Number(document.getElementById("spd").value));
}
var win;
function typer(){
    counter+=1;
    
    if(win!=undefined){
        // document.getElementById("words").innerHTML=win.location;
        // document.getElementById("ulr").value = win.document.getElementById("image").src;
        win.close();
    }
    win = window.open("https://"+document.getElementById("ulr").value+document.getElementById("vir").value+counter);
    // urk = "proxy.php?a=https://rule34.xxx/index.php?page=post&s=view&id=5314795";
    // win = window.open(urk);
    // document.getElementById("words").innerHTML=win.location.href;
    // if(win.location.href=="https://"+document.getElementById("ulr").value+document.getElementById("blk").value){
    //     win = window.open("https://"+document.getElementById("ulr").value+document.getElementById("vir").value+(Number(counter)+1));
    // }
}
function kill(){
    clearInterval(timer);
}