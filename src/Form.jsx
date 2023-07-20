import React, { useReducer } from "react";
import { useEffect } from "react";

const inputReducer = (state, action) => {
  if (action.type === "EMAIL") {
    return {
      ...state,
      email: action.value,
      isValidEmail: action.value.includes("@"),
    };
  }
  if (action.type === "NAME") {
    return {
      ...state,
      name: action.value,
      isValidName: action.value.length > 4,
    };
  }
  // if (action.type === "BUTTON") {
  //   return {
  //     ...state,
  //     btnStatus: state.isValidName && state.isValidEmail ? false : true
    
  //   };
  // }
  if(action.type === "BUTTON"){
    console.log(12345);
    return {
      ...state,
      btnStatus: false
    }
  }
  if(action.type === "BUTTON2"){
    return {
      ...state,
      btnStatus: true
    }
  }
  return state;
};

const Form = () => {
  // const [email, setEmail] = useState("")
  // const [name, setName] = useState("")
  // const [isValidEmail, setIsValidEmail] = useState(true)
  // const [isValidName, setIsValidName] = useState(true)

  const [input, dispatchInput] = useReducer(inputReducer, {
    email: "",
    name: "",
    isValidEmail: null,
    isValidName: null,
    btnStatus: true
  });
  console.log(input);

  const emailHandler = (e) => {
    dispatchInput({ type: "EMAIL", value: e.target.value });
    // dispatchInput({type: "BUTTON"})
    // setEmail(e.target.value)
    // setIsValidEmail(e.target.value.includes("@"))
  };

  const btnHandler = (e) => {
    // dispatchInput({ type: "BUTTON" });
    // dispatchInput({ type: "BUTTON2" });
  };

  const nameHandler = (e) => {
    dispatchInput({ type: "NAME", value: e.target.value });
    // dispatchInput({type: "BUTTON"})
    // setIsValidName(e.target.value.length > 5)
  };

  const color = () => {
    let color = "";
    if (input.isValidEmail === false) {
      color = "2px solid red";
    }
    if (input.isValidEmail === true) {
      color = "2px solid black";
    }
    console.log(color);
    return color;
  };

  const blurHandler = (e) => {
    // console.log(e.target.value);
    console.log("dir");
    dispatchInput({ type: "NAME", value: e.target.value });
    // dispatchInput({type: "BUTTON"})
  };

  useEffect(() => {
    console.log("use");
    console.log(input.isValidEmail && input.isValidName);
    if(input.isValidEmail && input.isValidName){
      dispatchInput({type: "BUTTON"})
    }else{
    dispatchInput({type: "BUTTON2"})
    }
  },[input.email, input.name]) 

  return (
    <form className="container-form">
      <input
        style={{ border: color() }}
        onChange={emailHandler}
        type="text"
        placeholder="email"
      />
      <input
        style={{
          border:
            input.isValidName === false ? "2px solid red" : "2px solid black",
        }}
        onChange={nameHandler}
        type="text"
        placeholder="name"
        onBlur={blurHandler}
      />
      <button disabled={input.btnStatus}>
        ADD
      </button>
    </form>
  );
};

export default Form;
