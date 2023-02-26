import React from 'react';
import Users from "../component/Users";

const users =  [
  {
    id: 1,
    name: 'Madina',
    textStatus: 'Всем мира и добра',
    avatar: 'https://imagename.ru/imgbig/6574.jpg',
    networkStatus: true
  },

  {
    id: 2,
    name: 'Elmira',
    textStatus: 'Вот бы мне кто-нибудь сказал, чего я хочу',
    avatar: 'https://logos.flamingtext.com/City-Logos/Elmira-Water-Logo.png',
    networkStatus: true
  },

  {
    id: 3,
    name: 'Anara',
    textStatus: 'Я не могу запомнить, что тебя забыл',
    avatar: 'https://i.ytimg.com/vi/SIA_L_zsN3c/maxresdefault.jpg',
    networkStatus: false
  },

  {
    id: 4,
    name: 'Aslan',
    textStatus: 'Никто не может быть в точности похож на меня. Даже мне это не всегда удаётся',
    avatar: 'https://logos.flamingtext.com/Name-Logos/Aslan-design-amped-name.png',
    networkStatus: false
  },

  {
    id: 5,
    name: 'Daniyar',
    textStatus: 'Есть два вида людей: я и остальные',
    avatar: 'https://cdn.100sp.ru/pictures/168170431',
    networkStatus: true
  },

  {
    id: 6,
    name: 'Iliyas',
    textStatus: 'Я не люблю сражаться, я люблю побеждать',
    avatar: 'https://www.casahardy.de/images/product_images/original_images/198554_Product.png',
    networkStatus: false
  },

  {
    id: 7,
    name: 'Gleb',
    textStatus: 'С собой всегда можно договориться',
    avatar: 'https://logos.textgiraffe.com/logos/logo-name/Gleb-designstyle-jungle-m.png',
    networkStatus: false
  }
]


const App = () => {
  return (
    <div className="dis">
      {users.map( item => <Users key={item.id} {...item}/>)}
    </div>
  );
}

export default App;
