function acao() {
    var modal = document.querySelector(".modal")

    modal.style.display = 'block'
}

function fechar() {
    var modal = document.querySelector(".modal")
    
    modal.style.display = 'none'
}

function entre() {
    var mold = document.querySelector(".mold")

    mold.style.display = 'block'
}

function sumir() {
    var mold = document.querySelector(".mold")

    mold.style.display = 'none'
}

function fund() {
    var mod = document.querySelector(".mod")

    mod.style.display = 'block'
}

function sub() {
    var mod = document.querySelector(".mod")

    mod.style.display = 'none'
}

function conf() {
    var modall = document.querySelector(".modall")

    modall.style.display = 'block'
}
function fec() {
    var modall = document.querySelector(".modall")

    modall.style.display = 'none'
}

function abr() {
    var cai = document.querySelector(".cai")

    cai.style.display = 'block'
}
function fech() {
    var cai = document.querySelector(".cai")

    cai.style.display = 'none'
}

function apa() {
    var cax = document.querySelector(".cax")

    cax.style.display = 'block'
}
function feh() {
    var cax = document.querySelector(".cax")

    cax.style.display = 'none'
}

function apar() {
    var caxh = document.querySelector(".caxh")

    caxh.style.display = 'block'
}
function fehc() {
    var caxh = document.querySelector(".caxh")

    caxh.style.display = 'none'
}

function pon() {
    var opc = document.querySelector(".opc")

    opc.style.display = 'block'
}
function enc() {
    var opc = document.querySelector(".opc")

    opc.style.display = 'none'
}

var dados = []

var tela=1
var selecionado=null

function mudartela(i, id=null){
    id!==null?selecionado=id:''
    tela=i
    listar ()
}

function listar () { 
    if (tela==1){ 
        document.querySelector('#tela-principal').style.display=''
        document.querySelector('#tela-carrinho').style.display='none'
        document.querySelector('#tela-carteira').style.display='none'
        document.querySelector('#tela-login').style.display='none'
        document.querySelector('#tela-cupom').style.display='none'
    }
    if (tela==2){ 
        document.querySelector('#tela-principal').style.display='none'
        document.querySelector('#tela-carrinho').style.display=''
        document.querySelector('#tela-carteira').style.display='none'
        document.querySelector('#tela-login').style.display='none'
        document.querySelector('#tela-cupom').style.display='none'
    }
    if (tela==3){ 
        document.querySelector('#tela-principal').style.display=''
        document.querySelector('#tela-carrinho').style.display='none'
        document.querySelector('#tela-carteira').style.display='none'
        document.querySelector('#tela-login').style.display='none'
        document.querySelector('#tela-cupom').style.display='none'
    }
    if (tela==4){ 
        document.querySelector('#tela-principal').style.display='none'
        document.querySelector('#tela-carrinho').style.display='none'
        document.querySelector('#tela-carteira').style.display='none'
        document.querySelector('#tela-login').style.display=''
        document.querySelector('#tela-cupom').style.display='none'
    }
    if (tela==5){ 
        document.querySelector('#tela-principal').style.display='none'
        document.querySelector('#tela-carrinho').style.display='none'
        document.querySelector('#tela-carteira').style.display='none'
        document.querySelector('#tela-login').style.display='none'
        document.querySelector('#tela-cupom').style.display=''
    }
    if (tela==6){ 
        document.querySelector('#tela-principal').style.display='none'
        document.querySelector('#tela-carrinho').style.display='none'
        document.querySelector('#tela-carteira').style.display=''
        document.querySelector('#tela-login').style.display='none'
        document.querySelector('#tela-cupom').style.display='none'
    }
    document.querySelector('tbody').innerHTML=''
    var content = ''
}
listar()