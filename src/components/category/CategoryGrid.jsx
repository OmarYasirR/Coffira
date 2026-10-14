import CategoryCard from './CategoryCard'

export default function CategoryGrid({ categories }) {
  return (
    <div className="grid grid-cols-3 gap-6 sm:grid-cols-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}
