import {useRef, useLayoutEffect} from 'react';
import anime from 'animejs';

export const useAnime = (props) => {
  const animateTargetRef = useRef();
  const animationRef = useRef();

  useLayoutEffect(() => { 
    if (!animateTargetRef.current) {
      console.warn('please bind the anime ref while useAnime');
      return;
    }
    animationRef.current = anime({
      targets: [animateTargetRef.current],
      ...props,
    });
  }, [props]);
  return { animateTargetRef, animationRef }
}
