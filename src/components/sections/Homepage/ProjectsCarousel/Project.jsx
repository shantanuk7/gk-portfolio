import { motion } from 'framer-motion';

export default function Project({
  type,
  title,
  feature,
  description,
  foregroundImg,
  backImg,
  primaryColour,
  secondaryColour,
  textBgColour,
  textColour,
}) {
  const colorVariants = {
    'bg-lightOrange': "bg-[#EDE3D680]",
    'bg-darkOrange': "bg-[#907859]",
    'text-bg-orange': "bg-[#EDE3D6]",
    'text-orange': "text-[#907859]",
  };

  return (
    <div
      className={`w-[60rem] mx-auto ${colorVariants[primaryColour]} rounded-3xl flex`}
    >
      <div className="m-5 bg-gray-50 rounded-3xl flex p-8">
        {/* Image Section */}
        <div className="w-96 h-96 relative overflow-visible rounded-3xl flex-shrink-0">
          {/* Bevel Effect with Pseudo Element */}
          <div
              className="absolute inset-0 rounded-3xl border border-black"
              style={{
                boxShadow: `
                    inset 4px 4px 8px rgba(0, 0, 0, 0.5),    /* Darker shadow for bottom-right */
                    inset -4px -4px 8px rgba(255, 255, 255, 0.3), /* Lighter highlight for top-left */
                    inset -4px 4px 8px rgba(255, 255, 255, 0.5),  /* Subtle highlight on bottom-left */
                    inset 4px -4px 8px rgba(0, 0, 0, 0.5)   /* Subtle shadow on top-right */
                `,
                }}
            ></div>
                {/* Background Image */}
          <motion.div
            className="absolute inset-0 rounded-3xl overflow-hidden before:absolute before:inset-0 before:rounded-3xl before:z-10"
            style={{
                backgroundImage: `url(${backImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(4px) brightness(0.7)', // Darkens and blurs the image
            }}
            >
            </motion.div>

          {/* Foreground Image */}
          <motion.img
            src={foregroundImg}
            alt={title}
            className="absolute left-4 top-4 z-20 w-full h-full object-contain"
            
            initial={{ scale: 1, rotate:15 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
        </div>

        {/* Information Section */}
        <div className="flex flex-col justify-between flex-grow">
          <div className='flex flex-col gap-3 px-6'>

            <h4 className={`${colorVariants[textColour]} text-xl font-normal`}>
              {type}
            </h4>
            <h3 className={`${colorVariants[textColour]} text-3xl font-medium`}>
              {title}
            </h3>
            <div className={`rounded-full ${colorVariants[textBgColour]} p-[0.34rem] text-center`}>
              <h3 className={`${colorVariants[textColour]} font-medium text-lg px-1`}>
                {feature}
              </h3>
            </div>
            <p className="text-sm font-light text-gray-600">{description}</p>
          </div>
          <div className='px-7'>
            <button
              className={`mt-4 px-4 py-2 text-lg font-semibold text-white rounded-full w-fit ${colorVariants[secondaryColour]} flex items-center gap-2`}
              >
              View Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
