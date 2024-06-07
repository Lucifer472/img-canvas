import { CategoryCombobox } from "../etc/combobox-category";
import { BlogCardMain } from "./blog-card";

export const BlogList = ({
  title,
  data,
  isCat,
}: {
  title: string;
  data: any;
  isCat?: boolean;
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-1 w-full py-4">
        <h1 className="text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap capitalize">
          {title}
        </h1>
        <div className="w-full border-b-4 border-sky-300" />
        {isCat && <CategoryCombobox />}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* {data.map((b: any) => (
          <BlogCardMain
            key={b.id}
            img={b.img}
            link={`/blog/${b.url}`}
            updatedAt={b.updatedAt}
            title={b.title}
          />
        ))} */}
      </div>
    </div>
  );
};
