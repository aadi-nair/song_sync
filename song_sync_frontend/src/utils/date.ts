export function formatDate(timestamp?: string): string {
    if (!timestamp) return "";
  
    const date = new Date(timestamp);
    let formatter;
  
    if (date.getFullYear() === new Date().getFullYear()) {
      formatter = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
      });
    } else {
      formatter = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
    }
  
    return formatter.format(date);
  }
  