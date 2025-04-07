import { categories } from '@/theme_3/constant';
import Link from 'next/link';

export const Categories = () => {
  return (
    <div className="ne-bg-primary/10 ne-py-2">
      <div className="container ne-font-medium">
        <ul className="ne-flex ne-items-center ne-justify-between max-md:ne-hidden">
          {categories.map((category, index) => (
            <li key={index}>
              <>
                <span>{category.title}</span>
                {category.submenu && (
                  <ul className="ne-ml-4 ne-mt-2 ne-flex ne-flex-col ne-gap-2">
                    {category.submenu.map((item, subIndex) => (
                      <li key={subIndex}>
                        <Link href="#">{item}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
