function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg5.jpg"
          className="card-img"
          alt="Background"
          height="600px"
        />

        <div className="card-img-overlay d-flex flex-column  justify-content-center">
          <div className="containe">
            <h5 className="card-title display-3 fw-border mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
