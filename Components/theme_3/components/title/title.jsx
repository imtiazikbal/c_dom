/**
 * A basic title component.
 *
 * @function Title
 * @param {string} children The text content of the title.
 * @returns {ReactElement} The title component.
 */
export const Title = ({ children }) => {
  return (
    <div className="ne-relative ne-flex ne-items-center ne-justify-center">
      <div className="ne-absolute ne-inset-x-0 ne-border-t-2"></div>
      <div className="ne-relative ne-z-[1] ne-bg-[#f2f3f8] ne-px-4 ne-py-2 ne-border-yellow-600 ne-border">
        <h1 className="ne-text-lg ne-font-semibold ne-text-foreground">{children}</h1>
      </div>
    </div>
  );
};
