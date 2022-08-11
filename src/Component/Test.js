import React, { useState, useEffect } from "react";

function Test() {
  const [menus, setMenus] = useState(); // use For Displaying Menu  GET/READ
  const [foods, setFoods] = useState(); // use For Displaying Food GET/READ

  //   const [category, setCategory] = useState(); // use for Adding to the Menu POST/CREATE
  //   const [addMenu, onAddMenu] = useState(); //use for holding menu Data POST/CREATE

  //   const [addFood, onAddFood] = useState(); // use for holding food Data POST/CREATE
  //   const [food, setFood] = useState(); // use for Adding to the food POST/CREATE
  //   const [price, setPrice] = useState(); // use for Adding to the price POST/CREATE
  //   const [category_id, setCategoryId] = useState(); //use for Adding to the categoryID POST/CREATE

  //   const [updateFood, onUpdateFood] = useState(); // use for holding food Data
  //   const [foodUpdate, setFoodUpdate] = useState(); // use for updating the Food PATCH/UPDATE
  //   const [priceUpdate, setPriceUpdate] = useState(); // use for updating the Price PATCH/UPDATE
  //   const [categoryIdUpdate, setCategoryIdUpdate] = useState(); // use for updating the CategoryId PATCH/UPDATE

  //   const [menuUpdate,onUpdateMenu] = useState() //use for holding menu Data
  //   const [categoryUpdate, setCategoryUpdate] = useState(); // use for Updating category PATCH/UPDATE

  /* GET/READ */
  useEffect(() => {
    fetch("http://localhost:9292/menu")
      .then((r) => r.json())
      .then((data) => setMenus(data));
  }, []);

  /* GET/READ */
  useEffect(() => {
    fetch("http://localhost:9292/menu/food")
      .then((r) => r.json())
      .then((data) => setFoods(data));
  }, []);
console.log(menus,foods)
  //   /* POST/CREATE */
  //   handleFoodPost = () => {
  //     fetch("http://localhost:9292/menu/food", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         item_name: food,
  //         price: price,
  //         category_id: category_id,
  //       })
  //         .then((r) => r.json())
  //         .then((newData) => {
  //           onAddFood(newData);
  //           setFood("/");
  //           setPrice("/");
  //           setCategoryId("/");
  //         }),
  //     });
  //   };
  //   /* POST/CREATE */
  //   handleMenuPost = () => {
  //     fetch("http://localhost:9292/menu", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         category: category,
  //       })
  //         .then((r) => r.json())
  //         .then((data) => {
  //           onAddMenu(data);
  //           setCategory("/");
  //         }),
  //     });
  //   };
  //   /* PATCH/UPDATE */
  //   handleMenuPatch = () => {
      // fetch(`http://localhost:9292/menu/${menus.id}`, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify({
      //     category: categoryUpdate,
      //   })
      //     .then((r) => r.json())
      //     .then((data) => {
  //           onUpdateMenu(data);
  //           setCategoryUpdate("");
  //         }),
  //     });
  //   };
  //   /* PATCH/UPDATE */
  //   handleFoodPatch = () => {
  //     fetch(`http://localhost:9292/menu/food/${foods.id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         item_name: foodUpdate,
  //         price: priceUpdate,
  //         category_id: categoryIdUpdate,
  //       })
  //         .then((r) => r.json())
  //         .then((data) => {
  //           onUpdateFood(data);
  //           setFoodUpdate("");
  //           setPriceUpdate("");
  //           setCategoryIdUpdate("");
  //         }),
  //     });
  //   };
  //   /* DELETE */
  //   handleMenuDelete = () => {
  //     fetch(`http://localhost:9292/menu/${menus.id}`, {
  //       method: "DELETE",
  //     });
  //   };
  //   /* DELETE */
  //   handleFoodDelete = () => {
  //     fetch(`http://localhost:9292/menu/${foods.id}`, {
  //       method: "DELETE"
  //     });
  //   };

  return <div>test test!</div>;
}

export default Test;
