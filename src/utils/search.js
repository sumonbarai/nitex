// searchProducts.js

export default function searchProducts(products, searchTerm) {
  if (!searchTerm) {
    // Return all products if the search term is empty
    return products;
  }

  const searchTermLower = searchTerm.toLowerCase().trim();
  
  const filteredProducts = products.filter((product) => {
    const productNameLower = product.title.toLowerCase();

    return productNameLower.includes(searchTermLower);
  });

  return filteredProducts;
}