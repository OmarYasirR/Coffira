import Hero from '../../components/home/Hero'
import ShopByCategory from '../../components/home/ShopByCategory'
import BestSellers from '../../components/home/BestSellers'
import TeaSection from '../../components/home/TeaSection'
import Newsletter from '../../components/home/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <BestSellers />
      <TeaSection />
      <Newsletter />
    </>
  )
}
