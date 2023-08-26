import Billboard from '@/components/ui/billboard'
import getBillboard from '@/lib/actions/get-billboard'
import { Container } from '@/components/ui/container'
import ProductList from '@/components/product-list'

import getProducts from '@/lib/actions/get-products'

export const relative = 0

async function HomePage() {
  const billboards = await getBillboard('f1fcce1e-4c43-44f1-aa1e-2a6c66de05e4')
  const products = await getProducts({ isFeatured: true })

  console.log(products)

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboards} />
      </div>

      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title='Feature Products' items={products} />
      </div>
    </Container>
  )
}

export default HomePage
