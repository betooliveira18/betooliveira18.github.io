import { parseISO, format } from "date-fns";
import data from "../data.json";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {date.toLocaleDateString(data.locale.br, data.locale.dateOptions)}
    </time>
  );
}
