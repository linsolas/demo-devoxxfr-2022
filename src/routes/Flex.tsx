const numbers = ['Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit'];

export const FlexPage = () => (
  <div className="d-flex m-5 container">
    <div className="row g-3">
      {
        numbers.map((number: string, index: number) => (
          <div className="col-3" key={number}>
            <div className="p-3 border bg-white display-4">
              <span className="text-danger fw-bold">{index + 1}</span>
              <span
                className="border-start border-2 ps-3 bg-white"
                style={{ marginLeft: '-12px'}}
              >
                {number}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);
