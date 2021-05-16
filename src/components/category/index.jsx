export const CategoryBtn = ({ categoryTitle }) => {
  return (
    <span className="text-gray-500 bg-gray-200 text-xs px-3 py-1 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-500 duration-300">
      {categoryTitle}
    </span>
  );
};
