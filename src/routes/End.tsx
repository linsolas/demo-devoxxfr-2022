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
    <h5>Et bien d'autres choses encore...</h5>
    <div className="">
      {unseen.map((item: string) => (
        <span className="badge badge-lg bg-primary me-3" key={item}>{item}</span>
      ))}
    </div>
  </div>
);
