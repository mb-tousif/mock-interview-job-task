const generateId = (length:number) => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text: string= "";
    for (let i = 0; (i < length); i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      text += chars.charAt(randomIndex);
    }
    return text;
  };
  
  export default generateId;