import { useRef, useEffect } from "react";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Component4 = () => {
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
          rotate: 360,
          x: 400,
        })
        .to(animBoxRef.current, {
          rotate: 720,
          x: -500,
        });
    }, "#comp4");

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="widget component4Wrap" id="comp4">
      <p>
        Component4 : Has Animation.. And GSAP logic get executed on mount only
      </p>
      <div className="comp4pin" ref={pinnedBoxRef}>
        <p>Pinned Container</p>
        <div className="comp4Anim" ref={animBoxRef}></div>
      </div>
    </div>
  );
};

export default Component4;
