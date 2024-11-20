import ProductCard from '@/components/ProductCard';
import { getSearchedProducts } from '@/lib/actions/actions';

const SearchPage = async ({ params }: { params: { query: string }}) => {
  const decodedQuery = decodeURIComponent(params.query);
  let searchedProducts;

  try {
    searchedProducts = await getSearchedProducts(decodedQuery);
  } catch (error) {
    console.error('Error fetching searched products:', error);
    searchedProducts = []; // Đặt lại thành mảng rỗng nếu có lỗi
  }

  return (
    <div className='px-10 py-5'>
      <p className='text-heading3-bold my-10'>Search results for "{decodedQuery}"</p>
      {(!searchedProducts || searchedProducts.length === 0) && (
        <p className='text-body-bold my-5'>No result found</p>
      )}
      <div className='flex flex-wrap justify-between gap-16'>
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";

export default SearchPage;
