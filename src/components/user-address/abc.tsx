import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { getCurrentUser } from "../../store/user/services";

const ProductList = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const id = currentUser.id;
  const dispatch = useAppDispatch();
  const address = currentUser.user_addresses;
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const [userAddressInfo, setUserAddressInfo]: any = useState({
    userId: id,
    name: "",
    mobile: "",
  });

  const handleEditClick = (product: any) => {
    setUserAddressInfo(product);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    // Get the updated values from the form inputs
    const updatedName = e.target.name.value;
    const updatedPrice = e.target.price.value;

    // Update the edited product in the products array
    const updatedProducts = address.map((product: any) => {
      if (product.id === userAddressInfo.id) {
        return { ...product, name: updatedName, price: updatedPrice };
      }
      return product;
    });

    // Update the state with the modified products array
    setUserAddressInfo(null);
    // Call a function or dispatch an action to handle the updated products array
    // For simplicity, we'll just console.log the updated products here
    console.log(updatedProducts);
  };

  return (
    <div style={{ paddingLeft: 330 }}>
      <h1>Product List</h1>
      <ul>
        {address.map((product: any) => (
          <li key={product.id}>
            <div>Name: {product.name}</div>
            <div>Price: {product.mobile}</div>
            <button onClick={() => handleEditClick(product)}>Edit</button>
          </li>
        ))}
        {userAddressInfo && (
          <form onSubmit={handleFormSubmit}>
            <h2>Edit Product</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                defaultValue={userAddressInfo.name}
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                name="price"
                defaultValue={userAddressInfo.mobile}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
