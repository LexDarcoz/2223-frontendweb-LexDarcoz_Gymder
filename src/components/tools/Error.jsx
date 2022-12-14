export default function Error({ error }) {
  if (error) {
    return (
      <div className="alert alert-danger" data-cy="transactions_error">
        <h4 className="alert-heading">An error occured</h4>
        {error.message || JSON.stringify(error)}
      </div>
    );
  }

  return null;
}
