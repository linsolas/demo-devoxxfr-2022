import { useEffect, useRef, useState } from "react";

export const ConsolePage = () => {
  const [random, setRandom] = useState<number>(0);
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const gogogo = () => setRandom(Math.floor(Math.random() * 100));
    if (btn && btn.current) {
      btn.current.addEventListener('click', gogogo);
    }
    return () => {
      btn?.current?.removeEventListener('click', gogogo);
    };
  }, [btn]);

  return (
    <div className="p-5">
      <h5 className="ms-3">La Console JavaScript</h5>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item"><code>$</code></li>
              <li className="list-group-item"><code>$$</code></li>
              <li className="list-group-item"><code>$0</code></li>
              <li className="list-group-item"><code>$_</code></li>
            </ul>
          </div>
          <div className="col">
            <button id="clickme" ref={btn} className="btn btn-primary">
              <i className={`me-3 bi-dice-${Math.ceil(Math.random() * 6)}`}/> Nouveau lancé
            </button>
            <div className="border mt-3 p-3 display-3 fw-bold text-center">
              {random}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
