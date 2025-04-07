/**
 * A basic title component.
 *
 * @function Title
 * @param {string} children The text content of the title.
 * @returns {ReactElement} The title component.
 */
export const Title = ({ children }) => {
  return (
    <h1 className="ne-text-3xl ne-text-center ne-font-semibold">
      <span className="_gradient_text">{children}</span>
    </h1>
  );
};
