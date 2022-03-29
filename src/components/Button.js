import React from "react";

import "components/Button.scss";

export default function Button(props) {
   let buttonClass = "button";
   
   //when props.confirm is true the button--confirm class is added to the buttonClass
   if (props.confirm) {
     buttonClass += " button--confirm";
   }

   //when props.danger is true the button--danger class is added to the buttonClass
   if (props.danger) {
      buttonClass += " button--danger";
   }
 
   return <button className={buttonClass}>{props.children}</button>;
 }