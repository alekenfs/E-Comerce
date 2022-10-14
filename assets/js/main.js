const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

//Elementos del HTML
const btnMenu = document.querySelector("#nav-menu");
const menu = document.querySelector(".contenedor-menu");
const iconosBarra= document.querySelector("#IconoMenu");
const iconoDark = document.querySelector("#IconoDark");
const btnDarkMode = document.querySelector("#nav-Darkmode")
const btnCart = document.querySelector("#nav-cart")

//Aparecer Menu
btnMenu.addEventListener("click", () =>{
  menu.classList.toggle("active");

if(iconosBarra.classList.contains("fa-bars")){
  iconosBarra.classList.replace("fa-bars", "fa-x" )
}else{
  iconosBarra.classList.replace("fa-x", "fa-bars" )
}
});

//Funcionalidad DarkMode
btnDarkMode.addEventListener("click", () =>{
  document.body.classList.toggle("dark");

  if(iconoDark.classList.contains("fa-moon")){
    iconoDark.classList.replace("fa-moon", "fa-sun" )
  }else{
    iconoDark.classList.replace("fa-sun", "fa-moon" )
  }


})
