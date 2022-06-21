const Spinner = ({ height = "30vh" }) => {
  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ height: height }}
    >
      <div
        className="spinner-border text-dark"
        role="status"
        style={{ width: "50px", height: "50px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
