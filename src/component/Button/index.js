import React from "react";
function Button ({children,className,type,...rest}){

    const buttonStyle =`bg-white text-slate-400 rounded-md p-1 hover:bg-slate-700 w-[100px] hover:text-white uppercase ${className ?? ""}`;
   
    return (
      <button className={buttonStyle} type={type} {...rest}>
        {children}
      </button>
    );
  }

export default Button;