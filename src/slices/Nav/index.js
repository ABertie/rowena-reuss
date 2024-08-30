/**
 * @typedef {import("@prismicio/client").Content.NavSlice} NavSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavSlice>} NavProps
 * @param {NavProps}
 */
const Nav = ({ slice }) => {
  console.log(slice);
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav (variation: {slice.variation}) Slices
    </section>
  );
};

export default Nav;
