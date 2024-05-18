

export default function RateCard() {
  return (
    <section className="pb-120 pt-120 position-relative z-0"
    >
       
      <div className="container">
        <div className="row justify-content-center">
        <table className="table table-bordered table-striped-columns">
  <thead className="table-dark">
    <tr>
      <th scope="col">Currency</th>
      <th scope="col">Buy Rates</th>
      <th scope="col">Sell Rates</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      <p>*Currency and TC's are subject to availability</p>
        </div>
       
      </div>
    </section>
  );
}
