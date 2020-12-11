class Product {
    constructor(product) {
    this.id = product._id;
    this.title = product.title;
    this.description = product.description;
    this.diameter = product.diameter;
    this.price = product.price + " UAH";
    this.pictureUrls = product.pictureUrls;
    }
    render() {
        
        const productItem = document.createElement('ul');
        const pictureLi = document.createElement('li');   
        const pictureUrls = document.createElement('img');
        pictureUrls.src =  this.pictureUrls[0];
        const productId = document.createElement('li');
        productId.textContent = this.id;
        const title = document.createElement('li');
        title.textContent = this.title;
        const price = document.createElement('li');
        price.textContent = this.price;
        const description = document.createElement('li');
        description.textContext = this.description;
        productItem.className = "products-list-head";
        productItem.appendChild(pictureLi);
        pictureLi.appendChild(pictureUrls);
        pictureUrls.className = "pizza-photo";
        productItem.appendChild(title);
        productItem.appendChild(productId);
        productItem.appendChild(price);
        productItem.appendChild(description);
        return productItem;
    }
}