export default function MealDetailsPage({ params }) {
  return (
    <>
      <h1>Meal Detail</h1>
      <p>Slug: {params.mealSlug}</p>
    </>
  );
}
