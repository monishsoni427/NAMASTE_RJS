import React, { useEffect, useState } from 'react';

export const useOnlineStatus = () => {
  
    const [onlineStatus,setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
    },[]);

  //boolean Value 
  return onlineStatus;
}
export default useOnlineStatus;