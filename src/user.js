const userState = {
  "userId": "usr_92f7a3b1d8",
  "personalInfo": {
    "firstName": "Jack",
    "lastName": "Walton",
    "email": "jackiwl@gamil.com",
    "phone": "+339 334 159 3024",
    "address": {
      "street": "124 Maple Grove Avenue",
      "city": "Riverton",
      "zipcode": "90211"
    }
  },
  "preferences": {
    "language": "en",
    "theme": "dark"
  },
  "pizzaInCart" : [4,5],
  "likedPizzasId": [1, 3],
  "lastOrdered":{
      "pizzaId" : 1,
      "quantity" : 4,
      "totalPrice" : 45,
      "orderState" : "delivered"
    }
}

localStorage.setItem("userState", JSON.stringify(userState));
