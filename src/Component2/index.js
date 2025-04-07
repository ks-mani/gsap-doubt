import { useRef, useEffect } from "react";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Component2 = () => {
  const pinnedBoxRef = useRef(null);
  const animBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "linear",
        },
      });

      ScrollTrigger.create({
        animation: timeline,
        trigger: animBoxRef.current,
        start: "top 5%",
        end: () => `+=${400}`,
        scrub: true,
        pin: false,
        markers: {
          startColor: "brown",
          endColor: "green",
          fontSize: "18px",
          fontWeight: "bold",
          indent: 20,
        },
      });

      ScrollTrigger.create({
        trigger: pinnedBoxRef.current,
        start: "top 20%",
        end: () => `+=${600}`,
        pin: true,
        pinSpacing: true,
        markers: { startColor: "blue", endColor: "orange" },
        anticipatePin: 1,
      });

      timeline
        .to(animBoxRef.current, {
          rotate: 180,
          x: 200,
          scale: 1.9,
        })
        .to(animBoxRef.current, {
          rotate: 720,
          x: -500,
          scale: 1,
        });
    }, "#comp2");

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="widget component2Wrap" id="comp2">
      <p>
        Component2 : Has Animation.. And GSAP logic get reexecuted on rerender
      </p>
      <div className="comp2pin" ref={pinnedBoxRef}>
        <p>Pinned Container</p>
        <div className="comp2Anim" ref={animBoxRef}></div>
      </div>
    </div>
  );
};

export default Component2;
