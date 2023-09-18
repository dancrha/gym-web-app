import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus eros sit amet erat hendrerit, non ullamcorper tortor luctus. Praesent at est in mauris ornare sollicitudin.",
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus eros sit amet erat hendrerit, non ullamcorper tortor luctus. Praesent at est in mauris ornare sollicitudin.",
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus eros sit amet erat hendrerit, non ullamcorper tortor luctus. Praesent at est in mauris ornare sollicitudin.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='md:my-5 md:w-3/5'
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className='md:flex items-center justify-between gap-8 mt-5'
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* GRAPHIC */}
          <img
            className='mx-auto'
            src={BenefitsPageGraphic}
            alt='benefits-page-graphic'
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {""}
                    <span className='text-primary-500'>FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className='my-5'>
                Fusce varius nunc turpis, sed sodales tellus dictum non. Nam ut
                interdum tellus. Maecenas eleifend augue in pulvinar congue.
                Suspendisse pulvinar consequat nisi nec lobortis. Suspendisse
                potenti. Donec aliquam tempus neque, sed consectetur eros
                sollicitudin eu. Nullam vitae mollis nisl, at vestibulum enim.
                Praesent mollis posuere facilisis.
              </p>
              <p className='mb-5'>
                Nunc id bibendum ante. Mauris placerat nisl justo, et
                sollicitudin erat gravida vel. Pellentesque quis mauris posuere,
                euismod arcu quis, pellentesque tellus. Aenean ut blandit arcu,
                et bibendum elit. Aenean efficitur lectus ac iaculis faucibus.
                Vestibulum laoreet a lacus quis feugiat. Cras ultrices mollis
                lorem ut suscipit. Pellentesque pretium metus elit, sed faucibus
                est molestie in. Nullam consectetur volutpat odio, id faucibus
                metus eleifend vel.
              </p>
            </motion.div>
            {/* Button */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <a
                  className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
                  onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
