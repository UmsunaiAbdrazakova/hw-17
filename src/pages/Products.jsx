import React from "react";
import { useNavigate } from "react-router-dom";

export const IPHONE_PRODUCTS = [
  {
    id: "1",
    image:
      "https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2022/09/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907-geo_inline.jpg.large_.jpg",
    title: "IPhone 14 Pro",
    price: 1320,
    discription:
      "iPhone 14 Pro работает на платформе Apple A16 Bionic, производимой по техпроцессу 4 нм. По количеству ядер здесь все аналогично A15: это 6 ядер CPU и 5 GPU. Объем оперативной памяти — по-прежнему 6 ГБ (Geekbench определяет его как 5,51 ГБ)",
  },
  {
    id: "2",
    image:
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.slideshow-large_2x.jpg",
    title: "IPhone 13 Pro",
    price: 1120,
    discription:
      "Технические характеристики iPhone 13 Pro: Процессор: 6-ядерный Apple A15 Bionic. Память: 6 ГБ ОЗУ, 128/256/512 ГБ или 1 ТБ ПЗУ Камеры: 12 Мп, f/1,5 (широкоугольная) + 12 Мп, f/1,8 (сверхширокоугольная) + 12 Мп, f/2,8 (телеобъектив); 12 Мп, f/2,2 (фронтальная) ОС: iOS 15.2",
  },
  {
    id: "3",
    image:
      "https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/1/2/12_pro_grp1_1_.jpg",
    title: "IPhone 12 Pro",
    price: 650,
    discription:
      "Iphone 12 Pro Характеристики экрана: Iphone 12 Pro оснащен новым шестиядерным процессором Apple A14 Bionic с шестиядерным процессором. Смартфон оснащен 6,1-дюймовым емкостным сенсорным экраном Super Retina XDR OLED с разрешением 1170 x 2532 пикселей и дисплеем HDR10, истинным тоном и широкой цветовой гаммой.",
  },
];
export const Products = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const productHandler = (id) => {
    navigate(`/product/${id}/details`);
  };
  const Product = ({ id, image, title, price }) => {
    return (
      <div className="product" onClick={() => productHandler(id)}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>
          <b>${price}</b>
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className="product-list">
        {IPHONE_PRODUCTS.map((product) => (
          <div>
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
