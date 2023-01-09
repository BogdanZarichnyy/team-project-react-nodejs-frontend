// import React from 'react';
// import { motion } from 'framer-motion';

// const containerStyle = {
//   position: 'absolute',
//   width: '3rem',
//   height: '3rem',
//   boxSizing: 'border-box',
//   right: '50%',
//   bottom: '50%',
//   transform: 'translate(50%, -50%)',
// };

// const circleStyle = {
//   display: 'block',
//   width: '3rem',
//   height: '3rem',
//   border: '0.5rem solid #e9e9e9',
//   borderTop: '0.5rem solid #e8950f',
//   borderRadius: '50%',
//   position: 'absolute',
//   boxSizing: 'border-box',
//   top: 0,
//   left: 0,
// };

// const spinTransition = {
//   repeat: Infinity,
//   ease: 'linear',
//   duration: 1,
// };

// export default function CircleLoader() {
//   return (
//     <div style={containerStyle}>
//       <motion.span
//         style={circleStyle}
//         animate={{ rotate: 360 }}
//         transition={spinTransition}
//       />
//     </div>
//   );
// }
import { motion } from 'framer-motion';

const LoadingDot = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  backgroundColor: '#f59256',
  borderRadius: '50%',
};

const LoadingContainer = {
  width: '10rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'space-around',
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
};

const DotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
};

export default function ThreeDotsWave() {
  return (
    <div
      style={{
        paddingTop: '5rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
