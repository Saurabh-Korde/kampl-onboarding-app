export const formatDate = (date:any) => {
    if (!date) return '';
    
    const d = new Date(date);
    const year = d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return [day, month, year].join('-');
  };
  

 export function getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
  
    // Get the day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
  
    // Return the formatted date string
    return `${day}-${month}-${year}`;
  }