import Breadcrumb from '../layer/Breadcrumb';
import Container from '../layer/Container';
import ProductFilter from '../layer/ProductFilter';
import ProductItem from '../layer/ProductItem';
import ProductPageTop from "../layer/ProductPageTop";


const Product = () => {

  return (
    <div>
      <Container>
        <div className="header py-32 ">
          <h2 className="font-bold font-DM text-[49px]">Products</h2>
          <Breadcrumb />
        </div>
        <div className="main flex justify-between">
          <div className="sidebar w-[370px] bg-slate-100">
            <ProductFilter catTitle="Shop by Category" />
            <ProductFilter catTitle="Shop by Color" />
          </div>

          <div className="products w-[1190px] bg-slate-200 flex flex-wrap gap-x-10 gap-y-12">
            <ProductPageTop />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <div className='w-full flex justify-between'>
              <p></p>
              <p>Products from 1 to 12 of 80</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product