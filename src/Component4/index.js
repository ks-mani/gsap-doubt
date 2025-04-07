import "./index.css";

const Component4 = () => {
  return (
    <div className="widget component4Wrap">
      <p>
        Component4 : Has Animation.. And GSAP logic get executed on mount only
      </p>
      <div className="comp4pin">
        <p>Pinned Container</p>
        <div className="comp4Anim"></div>
      </div>
    </div>
  );
};

export default Component4;
