# Flower Manager App

- [Flower Manager App](#flower-manager-app)
  - [About](#about)
  - [Technogies](#technogies)
  - [Json-Server](#json-server)
  - [Auth](#auth)
    - [Register](#register)
      - [Register Request](#register-request)
      - [Register Response](#register-response)
    - [Login](#login)
      - [Login Request](#login-request)
      - [Login Response](#login-response)

---

## About

Ürün olarak çiçeklerin yer aldığı kullanıcının uygulamaya giriş yapabildiği, çiçekleri listeleyebildiği, arama, filtreleme, ekleme, detay görüntüleme, güncelleme ve silme işlemlerini yapabildiği bir ürün yönetim ugulamasıdır.

---

## Technogies

- React JS
- Json Server
- Sass
- Axios
- React Router

---

## Json-Server

Json Server çalıştırmak için :

```console
json-server --watch src\assets\db\db.json --port 4732 
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

#### Register Response

```js
200 OK
```

```json
{
    "id":"0ce92098-6459-4304-9134-cdd390bc0a76",
   "firstName":"Ömer Faruk",
    "lastName":"Çelik",
    "email":"email@email.com",
    "username":"ofaruk"
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

#### Login Response

```js
200 OK
```

```json
{
    "id":"0ce92098-6459-4304-9134-cdd390bc0a76",
     "firstName":"Ömer Faruk",
    "lastName":"Çelik",
    "email":"email@email.com",
    "username":"ofaruk",
}
```
