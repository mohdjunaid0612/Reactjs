import React from "react";

const Map = () => {
  const productList = [
    {
      id: 1,
      name: "Apple iPhone 15 (128 GB) - Black",
      price: "₹59,700",
      disPrice: "₹69,900",
      deliverTime: "FREE delivery Tue, 27 May",
      img: "https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg",
    },
    {
      id: 2,
      name: "Apple iPhone 13 (128GB) - Blue",
      price: "₹43,900",
      disPrice: "59,900",
      deliverTime: "FREE delivery Wed, 28 May, 9 am - 5 pm",
      img: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    },
    {
      id: 3,
      name: "iPhone 16 128 GB: 5G ",
      price: "₹73,500",
      disPrice: "89,900",
      deliverTime: "FREE delivery Tue, 27 May",
      img: "https://m.media-amazon.com/images/I/61eYPkT2zZL._SL1500_.jpg",
    },
  ];

  return (
    <div>
      <div className="flex">
        {productList.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <h5>
              {product.price}{" "}
              <span style={{ color: "#999" }}>{product.disPrice}</span>
            </h5>
            <h5>{product.deliverTime}</h5>
            <button className="addCart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
