const productsApi = {
    API_URL: "https://jungle-courses-api.herokuapp.com",
    async getProducts() {
      const response = await fetch(`${this.API_URL}/api/ng/products`);
      const json = await response.json();
      return json;
    },
  
    async createProduct(product) {
      const response = await fetch(`${this.API_URL}/api/ng/products/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
  
      const data = await response.json();
  
      return data;
    },
  async updateProduct(product){
    const response = await fetch(`${this.API_URL}/api/ng/products/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
  
      const data = await response.json();
  
      return data;
  },

    async deleteProduct(id) {
      const response = await fetch(`${this.API_URL}/api/ng/products/${id}`);
      const json = await response.json();
  
      return json;
    },
  };
  
  
  
  productsApi.deleteProduct("5fe3779b5246c2001718b44d");
  
  productsApi.getProducts().then(results => {
    productsApi.deleteProduct(results[0]._id)
  });
  
  productsApi.createProduct({
    title: "Diablo",
    description: "dsfsdfsdf",
    price: 150,
    pictureUrls: ["https://celentano-pizza.com/image/cache/catalog/pizza/G_9861-256x256.png"],
    diameter: 35,
  });
