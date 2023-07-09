const generateId = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let urlEndPoint: string= "";
    for (let i = 0; (i < 8); i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      urlEndPoint += chars.charAt(randomIndex);
    }
    return urlEndPoint;
  };
  
  export default generateId;