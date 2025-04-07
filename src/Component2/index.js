import "./index.css";

const Component2 = () => {
  return (
    <div className="widget component2Wrap">
      <p>
        Component2 : Has Animation.. And GSAP logic get reexecuted on rerender
      </p>
      <div className="comp2pin">
        <p>Pinned Container</p>
        <div className="comp2Anim"></div>
      </div>
    </div>
  );
};

export default Component2;
