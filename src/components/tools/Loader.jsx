export default function Loader({ loading }) {
  if (loading) {
    return (
      <>
        <div className="spinner-border" data-cy="loading">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading...</p>
      </>
    );
  }

  return null;
}
