export const navBar = (container) =>{
    container.innerHTML = `
    <nav class="navbar">
    <a href="../index.html">
        <img src="../img/Logo-AG-2021.png" alt="">
    </a>
    <div class="right-bar">
        <a href="./carBuy.html">productos</a>
    <a href="./pay.html"> <i class="fa-solid fa-cart-shopping fa-2x"></i><p class="cantidad"></p></a>
    </div>
</nav> `;
}