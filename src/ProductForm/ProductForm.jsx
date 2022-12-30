import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  // Ürün bilgilerini tutmak için state değişkenleri oluşturun
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const api = '/assets/db/db.json'
  // Ürün bilgilerini güncellemek için form giriş alanları oluşturun
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ürün Adı:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Açıklama:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Fiyat:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Resim:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <br />
      <button type="submit">Ekle</button>
    </form>
  );

  async function handleSubmit(event) {
    // Formun otomatik olarak yenilenmesini engeller
    event.preventDefault();

    // Ürün bilgilerini bir objeye dönüştür
    const flowers = { name, description, price, image };

    try {
      // Ürün bilgilerini JSON servisine gönderir
      const response = await axios.post(api, flowers);

      // Eğer ürün ekleme işlemi başarılıysa, bir mesaj gösterir
      alert('Ürün başarıyla eklendi!');
    } catch (error) {
      // Eğer ürün ekleme işlemi başarısızsa, bir hata mesajı gösterir
      alert('Ürün eklenirken hata oluştu.');
    }
  }
}

export default ProductForm;