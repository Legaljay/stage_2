import { Previous } from "iconsax-react";
import { marked } from "marked";

const joinWith = (array, separator = "and") => {
  if (array.length === 0) {
    return "";
  }

  if (array.length === 1) {
    return array[0];
  }

  if (array.length === 2) {
    return `${array[0]} ${separator} ${array[1]}`;
  }

  const [lastElement, ...otherElements] = array.slice().reverse();
  const joinedElements = otherElements.reverse().join(", ");

  return `${joinedElements}, ${separator} ${lastElement}`;
};

const formatToNaira = (value) => {
  const floatValue = parseFloat(String(value));

  if (isNaN(floatValue)) {
    return "₦0.00";
  }
  const nairaFormatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(floatValue);

  return nairaFormatted;
};

const getBatteryEfficiencyColor = (batteryLevel) => {
  if (batteryLevel >= 80) {
    return "#59D238";
  } else if (batteryLevel >= 40) {
    return "#FBBC55";
  } else {
    return "#F34141";
  }
};

const extractDate = (date) => {
  return new Date(date).toISOString().split('T')[0];
};

const customDateFormatter = (dateString) => {
  const date = new Date(dateString);
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  });
  // Format the date parts individually
  const day = dateFormatter?.formatToParts(date).find(part => part.type === 'day')?.value;
  const month = dateFormatter?.formatToParts(date).find(part => part.type === 'month')?.value;
  const year = dateFormatter?.formatToParts(date).find(part => part.type === 'year')?.value;

  // Construct the date string in the desired order
  const formattedTime = timeFormatter.format(date);
  return `${formattedTime}, ${day} ${month} ${year}`;
};

let previousValue = 0;
const sequenceGenerator = (start, index) => {
  if (index === 0) {
    previousValue = start;
    return start
  } else {
    const newValue = previousValue + 1;
    previousValue = newValue;
    return newValue
  }
};

const renderMarkdown = (text) => {
  const markdown = text;
  const __html = marked(markdown, { sanitize: true, gfm: true });
  return { __html };
};

const helperUtil = {
  getBatteryEfficiencyColor,
  formatToNaira,
  joinWith,
  extractDate,
  customDateFormatter,
  renderMarkdown,
  sequenceGenerator,
};

export default helperUtil;
