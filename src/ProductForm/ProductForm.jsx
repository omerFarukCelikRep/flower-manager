// import React, { useState } from 'react';
// import axios from 'axios';

// function ProductForm() {
//   // Ürün bilgilerini tutmak için state değişkenleri oluşturun
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState(0);
//   const [image, setImage] = useState(null);

//   const api = '/assets/db/db.json'
//   // Ürün bilgilerini güncellemek için form giriş alanları oluşturun
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Ürün Adı:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Açıklama:
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Fiyat:
//         <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Resim:
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//       </label>
//       <br />
//       <button type="submit">Ekle</button>
//     </form>
//   );

//   async function handleSubmit(event) {
//     // Formun otomatik olarak yenilenmesini engeller
//     event.preventDefault();

//     // Ürün bilgilerini bir objeye dönüştür
//     const flowers = { name, description, price, image };

//     try {
//       // Ürün bilgilerini JSON servisine gönderir
//       const response = await axios.post(api, flowers);

//       // Eğer ürün ekleme işlemi başarılıysa, bir mesaj gösterir
//       alert('Ürün başarıyla eklendi!');
//     } catch (error) {
//       // Eğer ürün ekleme işlemi başarısızsa, bir hata mesajı gösterir
//       alert('Ürün eklenirken hata oluştu.');
//     }
//   }
// }

// export default ProductForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthProductService from "./../services/AuthProductService";
// import  ProductService   from "./../services/ProductService";

const CreateProduct = () => {
  const [addProduct, setAddProduct] = useState({
    flowerName: "",
    description: "",
    price: "",
    stockCount: "",
    image: "",
  });

  const [isProductValid, setIsProductValid] = useState({
    flowerName: true,
    description: true,
    price: true,
    stockCount: true,
    image: true,
  });

  const [productError, setProductError] = useState("");
  const [productSuccess, setProductSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsProductValid({ ...addProduct });
    if (!Object.values(addProduct).every((val) => val)) {
      return;
    }

    const productResult = AuthProductService.products(addProduct);
    if (productResult) {
      setAddProduct({
        flowerName: "",
        description: "",
        price: "",
        stockCount: "",
        image: "",
      });
      setProductSuccess(true);
      return;
    }
    setProductError("Hata Mesajı");
  };
  return (
    <>
      {productSuccess ? (
        <section>
          <h2>Create Product Successfully!</h2>
          <p>
            <Link to="/Products">
              <span>Products</span>
            </Link>
          </p>
        </section>
      ) : (
        <section>
          <h2>Create Product</h2>
          <form
            id="product-form"
            className="product-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="flowerName">Flower Name</label>
              <input
                type="text"
                id="flowerName"
                value={addProduct.flowerName}
                onChange={(event) =>
                  setAddProduct((prevProduct) => ({
                    ...prevProduct,
                    flowerName: event.target.value.trim(),
                  }))
                }
              />
              {!isProductValid.flowerName && (
                <span className="validation">Flower Name is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                value={addProduct.description}
                onChange={(event) =>
                  setAddProduct((prevProduct) => ({
                    ...prevProduct,
                    description: event.target.value.trim(),
                  }))
                }
              />
              {!isProductValid.description && (
                <span className="validation">Description is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">Price</label>
              <input
                type="number"
                id="description"
                value={addProduct.price}
                onChange={(event) =>
                  setAddProduct((prevProduct) => ({
                    ...prevProduct,
                    price: event.target.value.trim(),
                  }))
                }
              />
              {!isProductValid.price && (
                <span className="validation">Price is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">StockCount</label>
              <input
                type="number"
                id="description"
                value={addProduct.stockCount}
                onChange={(event) =>
                  setAddProduct((prevProduct) => ({
                    ...prevProduct,
                    stockCount: event.target.value.trim(),
                  }))
                }
              />
              {!isProductValid.stockCount && (
                <span className="validation">StockCount is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">Image</label>
              <input
                type="file"
                id="description"
                value={addProduct.image}
                onChange={(event) =>
                  setAddProduct((prevProduct) => ({
                    ...prevProduct,
                    image: event.target.value,
                  }))
                }
              />
              {!isProductValid.image && (
                <span className="validation">Image is not valid</span>
              )}
            </div>
            <div className="form-group">
              <button type="submit">Create Product</button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default CreateProduct;
