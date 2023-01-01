import  ProductService   from "./../services/ProductService";
const { addAsync } = ProductService;


const products = async (flower) => {
    const addedFlower = await addAsync(flower);
    return addedFlower ? true : false;
}
const AuthProductService = {
    products
  };

  export default AuthProductService;