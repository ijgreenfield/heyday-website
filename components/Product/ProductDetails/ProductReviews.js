import Review from "../../organisms/ProductReviews/Review";
import Container from "../../atoms/Container";

export default function ProductReviews({ reviews }) {
  return (
    <div>
        <Container>
          {reviews?.reviews.map(review => {
            const { user } = review;
            return (
              <Review review={review} user={user} key={review.id} />
            )
          })}
        </Container>
    </div>
  )
}
