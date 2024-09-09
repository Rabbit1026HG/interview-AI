export default function pricecheck(str) {
  if (str?.slice(0, 6) === "stripe") {
    switch (str.slice(-2)) {
      case "13":
        return 2;
      case "18":
        return 5;
      case "50":
        return 20;
      default:
        return 0;
    }
  }
  return 0;
}
