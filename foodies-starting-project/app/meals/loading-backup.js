import classes from "./loading.module.css";

// loading will automatically be injected into the page when page and its children are loaded
export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching Meals...</p>;
}
