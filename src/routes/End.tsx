const unseen = [
  'Mémoire',
  'Application',
  'Debug',
  'Android debugging',
  'Animations',
  'Network',
  'Configuration synchronisée',
  'etc.'
];

export const EndPage = () => (
  <div className="p-5">
    <div className="container-fluid">
      <div className="row g-3">
        {unseen.map((item: string, index: number) => (
          <div className="col-3" key={item}>
            <div className="p-3 border bg-white" style={{fontSize: '1.5rem'}}>
              <span className="text-danger fw-bold">{index + 1}</span>
              <span
                className="border-start border-2 ps-2 bg-white"
                style={{ marginLeft: '-3px'}}
              >
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="row my-5">
        <div className="col-12">
          <div className="p-3 border border-bottom-0 bg-white" style={{fontSize: '1.5rem'}}>
            <span className="text-danger fw-bold">DOC</span>
            <a
              className="border-start border-2 ps-2 bg-white"
              style={{ marginLeft: '-3px'}}
              href="https://developer.chrome.com/docs/devtools/"
              target="_blank"
            >
              https://developer.chrome.com/docs/devtools/
            </a>
          </div>
        </div>
        <div className="col-12">
          <div className="p-3 border bg-white" style={{fontSize: '1.5rem'}}>
            <span className="text-danger fw-bold">BLOG</span>
            <a
              className="border-start border-2 ps-2 bg-white"
              style={{ marginLeft: '-3px'}}
              href="https://developer.chrome.com/blog/"
              target="_blank"
            >
              https://developer.chrome.com/blog/
            </a>
          </div>
        </div>
      </div>

      <div
        className="homepage d-flex align-items-center justify-content-center p-5"
        style={{ height: 'auto', marginLeft: '-100px', marginRight: '-100px'}}
      >
        <p className="p-2">
          <span className="title">❤️ MERCI ❤️</span>
        </p>
      </div>

      <div className="d-none text-center display-1 border-top p-3 mt-3">
        ❤️ MERCI ❤️ 
      </div>
    </div>
  </div>
);
