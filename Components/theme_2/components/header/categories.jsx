import Link from "next/link";

export const Categories = ({ categories }) => {
  return (
    <div className="ne-bg-primary/10 ne-py-2">
      <div className="container ne-font-medium">
        <ul className="ne-flex ne-items-center ne-justify-between max-md:ne-hidden">
          <li>
            <Link href={`/shop`} className="ne-font-medium ne-text-base">
              All Categories
            </Link>
          </li>
          {categories.map(({ name, id, shop_id }, index) => (
            <li key={id}>
              <Link
                href={`/shop?category=${name
                  .split(" ")
                  .join("-")}&shop=${shop_id}&id=${id}`}
                className="ne-font-medium ne-text-base"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
