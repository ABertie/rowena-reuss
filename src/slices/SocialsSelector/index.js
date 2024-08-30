/**
 * @typedef {import("@prismicio/client").Content.SocialsSelectorSlice} SocialsSelectorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SocialsSelectorSlice>} SocialsSelectorProps
 * @param {SocialsSelectorProps}
 */
const SocialsSelector = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for socials_selector (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SocialsSelector;
