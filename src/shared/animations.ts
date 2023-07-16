export const showContentWithOpacity = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    ease: 'easeIn',
    duration: 2,
  },
}

export const animationMovingLeftWithOpacity = {
  initial: { x: 0, opacity: 0.1 },
  animate: { x: -80, opacity: 1 },
  transition: {
    ease: 'easeOut',
    duration: 1,
  },
}

export const animationMovingRigthWithOpactity = {
  initial: { x: -80, opacity: 0.1 },
  animate: { x: 0, opacity: 1 },
  transition: {
    ease: 'easeOut',
    duration: 1,
  },
}

export const animationMovingDownWithOpactity = {
  initial: { y: -50, opacity: 0.1 },
  animate: { y: 0, opacity: 1 },
  transition: {
    ease: 'easeOut',
    duration: 1,
  },
}
