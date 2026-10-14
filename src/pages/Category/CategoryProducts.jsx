import { useParams } from 'react-router-dom'
import ProductGrid from '../../components/product/ProductGrid'
import { getProductsByCategory } from '../../data/mockProducts'
import { allCategories } from '../../data/categories'
import { useLanguage } from '../../context/LanguageContext'

export default function CategoryProducts() {
  const { categoryId } = useParams()
  const { t } = useLanguage()
  const products = getProductsByCategory(categoryId)
  const category = allCategories.find((c) => c.id === categoryId)

  return (
    <div className="container-app py-8">
      <h1 className="mb-2 font-serif text-2xl font-bold text-brand-dark">
        {category ? t(category.nameKey) : 'Category'}
      </h1>
      <p className="mb-6 text-sm text-brand-muted">{products.length} products</p>
      <ProductGrid products={products} />
    </div>
  )
}
