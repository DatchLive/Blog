import { format } from "date-fns";

export const DateComponent = ({ dateString }) => {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "yyyy-MM-dd ")}
    </time>
  );
};
