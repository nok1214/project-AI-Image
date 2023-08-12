import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

const Home = () => {
  // Capture the current state using Valtio's snapshot feature
  const { intro } = useSnapshot(state);

  return (
    // AnimatePresence is used to handle animations for components entering or leaving the DOM
    <AnimatePresence>
      {intro && (
        // The main section of the homepage, sliding in from the left
        <motion.section className="home" {...slideAnimation('left')}>
          {/* Header containing the logo, slides down on load */}
          <motion.header {...slideAnimation('down')}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          {/* The main content container for the homepage */}
          <motion.div className="home-content" {...headContainerAnimation}>
            {/* The animated heading */}
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET &apos; S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            {/* Description and call-to-action button */}
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool.
                <strong> Unleash your imagination</strong> and define your own
                style.
              </p>
              {/* Button to initiate the customization process */}
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
