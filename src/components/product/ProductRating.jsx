import Rating from '../common/Rating'

export default function ProductRating({ rating, reviews }) {
  return <Rating value={rating} count={reviews} />
}
