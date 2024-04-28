const NewsDetailPage = ({ params }) => {
  const newId = params.id;
  return (
    <>
      <h1>News Detail Page</h1>
      <p>NewsId : {newId}</p>
    </>
  );
};

export default NewsDetailPage;
