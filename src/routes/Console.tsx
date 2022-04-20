import { useEffect, useRef, useState } from "react";
const romanize = (num: number) => {
  const lookup: { [key: string]: number } = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
  };
  let roman = '';
  for (let i in lookup) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

export const ConsolePage = () => {
  const [random, setRandom] = useState<string>('?');
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const ᱹᱹಠ_ಠᱹᱹ = () => setRandom(romanize(Math.floor(Math.random() * 100)));
    if (btn && btn.current) {
      btn.current.addEventListener('click', ᱹᱹಠ_ಠᱹᱹ);
    }
    return () => {
      btn?.current?.removeEventListener('click', ᱹᱹಠ_ಠᱹᱹ);
    };
  }, [btn]);


  return (
    <div className="p-3">
      <h5 className="ms-3">La Console JavaScript</h5>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-6  mb-3">
            <table className="table table-striped table-bordered bg-white">
              <thead>
                <tr>
                  <th>Fonction</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td><code>$</code></td>
                  <td><code>document.querySelector()</code></td>
                </tr>
                <tr>
                  <td><code>$$</code></td>
                  <td><code>document.querySelectorAll()</code></td>
                </tr>
                <tr>
                  <td><code>$_</code></td>
                  <td>Dernière évaluation</td>
                </tr>
                <tr>
                  <td><code>$0</code>, <code>$1</code>...</td>
                  <td>Derniers éléments inspectés</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>L</kbd></td>
                  <td>Vider la console</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-12 col-lg-6">
            <button id="clickme" ref={btn} className="btn btn-primary">
              <i className={`me-3 bi-dice-${Math.ceil(Math.random() * 6)}`}/> Nouveau lancé
            </button>
            <div className="border mt-3 p-3 display-3 fw-bold text-center bg-white">
              {random}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
