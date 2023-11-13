import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { codingProfiles } from "../constants";

const ProfileCard = ({ index, name, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{name}</p>

      <div className="mt-3 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <a className="mt-1 text-secondary text-[12px]" href={link}>
            Link : {link}
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const CodingProfile = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Coding Profiles</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {codingProfiles.map((codingProfile, index) => (
          <ProfileCard
            key={codingProfile.link}
            index={index}
            {...codingProfile}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(CodingProfile, "");
