export function formateDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {
        month:"short",
        day: "numeric",
        year:"numeric",
    });
}