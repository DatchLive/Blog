import { format } from "date-fns";

export const DateComponent = ({ dateString }) => {
  return (
    <p className="text-sm text-gray-500 px-3 pt-1 pb-3">
      <time dateTime={dateString}>
        {format(new Date(dateString), "yyyy.MM.dd ")}
      </time>
    </p>
  );
};
