/**
 * @typedef {import("@prismicio/client").Content.TestSlice} TestSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestSlice>} TestProps
 * @param {TestProps}
 */
const Test = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test (variation: {slice.variation}) Slices
    </section>
  );
};

export default Test;
