import { split } from "lodash";
import moment from "moment";

export const getTime = (value?: Date | string, zoneOff?: boolean): string => {
  const format = localStorage.getItem("timeFormat");
  return zoneOff
    ? moment(value).format(format === "2" ? "kk:mm" : "hh:mm A")
    : moment(value)
        .parseZone()
        .format(format === "2" ? "kk:mm" : "hh:mm A");
};

export const formatedDate = (value?: Date | string): string => {
  return moment(value).parseZone().format("DD.MM.YYYY");
};

export const dateWithTime = (date?: string, time?: string) => {
  if (date && time) {
    return new Date(
      new Date(date).setUTCHours(+split(time, ":")[0], +split(time, ":")[1])
    ).toJSON();
  }
  return date;
};

export const ageDiff = (date: string | Date) => moment().diff(date, "years");

export const combineDates = (firstDate?: Date | string, secondDate?: Date | string) => {
  const res = moment(firstDate)
    .hours(moment(secondDate).hours())
    .minutes(moment(secondDate).minutes());
  return moment(res).format("YYYY-MM-DDTHH:mm:ss") + "." + moment(res).utcOffset() + "Z";
};

export const dateFormat = (date: Date | string) => {
  return moment(date).format("YYYY-MM-DD");
};

export const timeAgo = (date: Date | string) => {
  const years = moment().diff(date, "years");
  const month = moment().diff(date, "month");
  const day = moment().diff(date, "day");
  const hours = moment().diff(date, "hours");
  const minutes = moment().diff(date, "minute");
  const seconds = moment().diff(date, "seconds");
  const milliseconds = moment().diff(date, "milliseconds");

  switch (true) {
    case !!years:
      return `${years}y ago`;
    case !!month:
      return `${month}mo ago`;
    case !!day:
      return `${day}d ago`;
    case !!hours:
      return `${hours}h ago`;
    case !!minutes:
      return `${minutes}m ago`;
    case !!seconds:
      return `${seconds}s ago`;
    case !!milliseconds:
      return "now";
    default:
      return "Invalid date";
  }
};
