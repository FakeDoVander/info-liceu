function logar(){
    var senha = document.getElementById("senha").value;
    if(senha == "liceuform"){
        alert("Sucesso");
        location.href = "file:///media/fuse/drivefs-4db9b6de881e6bfd89f0c5ffe0ab2f37/root/CADERNOS/ZZZTRABALHO/admin.html";
    }
    else{
        alert("Senha incorreta");
        $('form').submit(function(){
        $(this)[0].reset();
        });
    }
}
