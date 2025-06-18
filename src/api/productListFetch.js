export function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Failed to fetch products. Try again.");
      } else {
        resolve([
          {
            id: 1,
            name: "Classic T-Shirt",
            price: 25,
            image: "https://via.placeholder.com/150?text=Shirt",
          },
          {
            id: 2,
            name: "Running Shoes",
            price: 60,
            image: "https://via.placeholder.com/150?text=Shoes",
          },
          {
            id: 3,
            name: "Denim Jacket",
            price: 45,
            image: "https://via.placeholder.com/150?text=Jacket",
          },
        ]);
      }
    }, 1000);
  });
}
