export default function pricecheck(str) {
  if (str?.slice(0, 6) === "stripe") {
    switch (str.slice(-2)) {
      case "10":
        return 1;
      case "20":
        return 5;
      case "50":
        return 20;
      default:
        return 0;
    }
  }
  return 0;
}
