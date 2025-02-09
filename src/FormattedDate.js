export default function FormattedDate(props) {
  console.log(props.data);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.data.getDay()];
  let date = props.data.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.data.getMonth()];
  let hours = props.data.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.data.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${date} ${month}, ${hours}:${minutes}`;
}
