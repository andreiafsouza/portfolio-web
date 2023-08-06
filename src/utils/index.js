import { animateScroll } from 'react-scroll';

/* functions */
export const handleScrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 300,
    smooth: true,
    delay: 0
  });
};

/* constants */
export const mediumLayoutBreakPoint = '60em';
export const smallLayoutBreakPoint = '42em';
export const mobileBreakPointFont = '42em';

export const tabletSize = {
  width: 744,
  height: 1133
};

export const mobileSize = {
  width: 430,
  height: 932
};
