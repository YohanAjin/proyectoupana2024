class Product{
    constructor(name,unit){
        this.name= name;
        this.unit = unit;
    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
          <div class="card-body">
           <strong> Nombre del producto </strong>: ${product.name} 
           <strong> Cantidad de unidades </strong>: ${product.unit} 
           <a href="#" class="btn btn-danger" name="delete">Borrar</a>
          </div>
        </div>
        `;
        productList.appendChild(element);
        this.RForm();
    }
    RForm(){
        document.getElementById('product-form').reset();   
    }

    deleteProduct(element){
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto Eliminado :(','danger');
        }
    }

    showMessage(messeage, cssClass){
        const div = document.createElement('div');
        div.className = 'alert alert-${cssClass} mt-3';
        div.appendChild(document.createTextNode(messeage));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
}
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const unit = document.getElementById('unit').value;
    const product = new Product(name, unit);
    const ui = new UI();
    if(name==='0'||unit===''){
       return ui.showMessage('COMPLETE LOS DATOS, POR FAVOR :)','danger');
    }
    ui.addProduct(product);
    ui.showMessage('Producto Añadido!','success');
});

document.getElementById('product-list').addEventListener('click', function(event) {
    const ui = new UI();
    ui.deleteProduct(event.target);
});