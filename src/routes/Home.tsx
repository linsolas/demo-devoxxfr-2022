console.log('Home file');
export const HomePage = () => {
  console.log('HOMEPAGE Component');
  return (
  <>
    <div className="homepage d-flex align-items-center justify-content-center flex-column">
      <p className="p-2">
        DEVOX<span style={{marginLeft: '-.85rem'}}>X</span> FRANCE 2022
        <br />
        <span className="birthday text-secondary">
          Array(<span className="text-info">10</span>).fill().map(() =&gt; <span className="text-success">"🎂"</span>).join(<span className="text-success">""</span>);
        </span>
        <span className="title">LES DEVTOOLS</span>
        &mdash; ROMAIN LINSOLAS &mdash;
        <br />
        <i className="bi-twitter"/>@romaintaz
      </p>
      <div className="credits mt-5" style={{ fontSize: '75%' }}> 
        <a href="https://codepen.io/zitrusfrisch/pen/DbwjOR" className="text-secondary" target="_blank" rel="noopener noreferrer">
          Codepen
        </a>
        &nbsp;par Daniel Riemer
      </div>
    </div>
  </>
);
  };
  