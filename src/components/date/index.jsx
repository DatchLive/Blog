import { format } from "date-fns";

export const DateComponent = ({ dateString }) => {
  return (
    <p className="px-3 pt-1 pb-3 text-sm text-gray-500">
      <time dateTime={dateString}>
        {format(new Date(dateString), "yyyy.MM.dd ")}
      </time>
    </p>
  );
};
