import React from "react";
import { useInView } from "react-intersection-observer";

export function withInViewAnimation<T extends React.ComponentType<any>>(
  WrappedComponent: T
) {
  return function InViewAnimationWrapper(
    props: React.ComponentProps<T>
  ) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`
          transition-all duration-500 ease-out
          ${inView ? "animate-slideUp" : "opacity-0 translate-y-5"}
        `}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}
