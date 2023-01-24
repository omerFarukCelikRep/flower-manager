# Flower Manager App

- [Flower Manager App](#flower-manager-app)
  - [About](#about)
  - [Technologies](#technologies)
  - [Json-Server](#json-server)
  - [Auth](#auth)
    - [Register](#register)
      - [Register Request](#register-request)
    - [Login](#login)
      - [Login Request](#login-request)

---

## About

Ürün olarak çiçeklerin yer aldığı kullanıcının uygulamaya giriş yapabildiği, çiçekleri listeleyebildiği, arama, filtreleme, ekleme, detay görüntüleme, güncelleme ve silme işlemlerini yapabildiği bir ürün yönetim ugulamasıdır.

---

## Technologies

- React JS
- Json Server
- Sass
- Axios
- React Router
- FontAwesome

---

## Json-Server

Json Server çalıştırmak için :

```console
json-server --watch src\assets\db\db.json --port 4732 --delay 1000
```

---

## Auth

### Register

```js
POST {{host}}/register
```

#### Register Request

```json
{
    "firstName":"Ömer Faruk",
    "lastName":"Çelik",   
    "dateofbirth":"01-01-1994",
    "email":"email@email.com",
    "username":"ofaruk",
    "password":"pass123",
    "confirmedPassword":"pass123",
}
```

### Login

```js
POST {{host}}/login
```

#### Login Request

```json
{
    "email":"email@email.com",
    "password":"pass123"
}
```
