/**
 * @typedef {import("@prismicio/client").Content.LogoSelectorSlice} LogoSelectorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoSelectorSlice>} LogoSelectorProps
 * @param {LogoSelectorProps}
 */
const LogoSelector = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for logo_selector (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LogoSelector;
