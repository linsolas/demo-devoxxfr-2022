const unseen = [
  'Mémoire',
 'Application',
 'Android Remote debugging',
 'Animations',
 'Synchronisation de la configuration',
 'etc.'
];

export const EndPage = () => (
  <div className="p-5">
    <div className="container-fluid">
      <h5 className="row">Et bien d'autres choses encore...</h5>
      <div className="row g-3">
        {unseen.map((item: string, index: number) => (
          <div className="col-3" key={item}>
            <div className="p-3 border bg-white">
              <span className="text-danger fw-bold">{index + 1}</span>
              <span
                className="border-start border-2 ps-3 bg-white"
                style={{ marginLeft: '-3px'}}
              >
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
