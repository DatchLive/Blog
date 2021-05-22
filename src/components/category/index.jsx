export const CategoryBtn = ({ categoryTitle }) => {
  return (
    <span className="px-3 py-1 text-xs text-gray-500 duration-300 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-500">
      {categoryTitle}
    </span>
  );
};
