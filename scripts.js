/*
1 Saber quando o usuário clicou no botão
2 Mudar o posicionamento do modal
3  Fazer a máscara ficar visível
4 quando clicar na máscara, fechar o modal
*/

const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")


function mostrarModal() {
    modal.style.left = "50%"
    mascara.style.visibility = "visible"

}

function esconderModal() {
    modal.style.left = "-30%"
    mascara.style.visibility = "hidden"
}

