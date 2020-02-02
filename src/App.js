import React from 'react'
import './App.css';
import Good from './components/Good'


export default function App() {
  
  const products = [

    {id:1, imgUrl:"https://avatars.mds.yandex.net/get-mpic/1861069/img_id2811433203166761085.jpeg/x166_trim", price:245, productName:"L`Oreal Paris Exellence", productLink: "https://market.yandex.ru/product--l-oreal-paris-excellence-stoikaia-krem-kraska-dlia-volos/212361648"},
    {id:2,imgUrl:"https://avatars.mds.yandex.net/get-mpic/1901647/img_id8435863409791922538.jpeg/x166_trim", price:143, productName:"Head & Shoulders", productLink: "https://market.yandex.ru/product--head-shoulders-shampun-tsitrusovaia-svezhest/1825853771"},
    {id:3,imgUrl:"https://avatars.mds.yandex.net/get-mpic/331398/img_id8606275073732889790.jpeg/x166_trim", price:70, productName:"Bref", productLink: "https://market.yandex.ru/product--bref-tualetnyi-blok-sila-aktiv-limonnaia-svezhest/1730991705"},
    {id:4,imgUrl:"https://avatars.mds.yandex.net/get-mpic/1525215/img_id2795445143072269737.png/x166_trim", price:3051, productName:"Протеин Optimum Nutretion", productLink: "https://market.yandex.ru/product--protein-optimum-nutrition-100-whey-gold-standard-2-225-2-353-kg/1711138831"},

  ];

  return (
    <div>

  <div className = "container"><h1>Приглядитесь к этим предложениям</h1></div>
    <div className="Block">
      <Good  imgUrl = { products[0].imgUrl } price = {products[0].price}  productName ={products[0].productName} productLink = {products[0].productLink} />
      <Good  imgUrl = { products[1].imgUrl } price = {products[1].price}  productName ={products[1].productName} productLink = {products[1].productLink} />
      <Good  imgUrl = { products[2].imgUrl } price = {products[2].price}  productName ={products[2].productName} productLink = {products[2].productLink} />
      <Good  imgUrl = { products[3].imgUrl } price = {products[3].price}  productName ={products[3].productName} productLink = {products[3].productLink} />
    </div>
  </div>
    
  )
}
