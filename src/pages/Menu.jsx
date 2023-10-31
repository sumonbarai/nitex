import ProductList from "../components/Menu/ProductList";

function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="menu-page">
        <h1 className="text-4xl font-bold text-center my-6">Our Menu</h1>
        <ProductList />
      </div>
    </div>
  );
}

export default MenuPage;
