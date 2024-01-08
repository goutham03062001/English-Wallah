import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BACKEND_API_URL } from "../utils/Constants";
import { Alert } from "react-native";
export const AuthContext = createContext({
  signup: (mobile, id) => {},
  studentLogin: () => {},
  logout: () => {},
  authenticated: false,
  authenticateFun: () => {},
  removeAuthenticate: () => {},
  getDetails: (inputData) => {},
  loading: false,
  currentLoggedInStudent: {},
  currentLoggedInStatus: "",
  currentLoggedInId: "",
  updateCurrentStatus: (role) => {},
  getPersonalDetails: (id) => {},
  getAllQuizzes:()=>{},
  updateQuizAttempt:(userId,quizId)=>{},
  quizExamsArr : []
});

export default function AuthContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmissionFound, setIsAdmissionFound] = useState(false);
  const [currStudentDetails, setCurrStudentDetails] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [sentLetter, setSentLetter] = useState(false);
  const [homeWorksArr, setHomeWorksArr] = useState([{}]);
  const [currentLoggedInStatus, setCurrentLoggedInStatus] = useState("");
  const [currentLoggedInId, setCurrentLoggedInId] = useState("");
  const [currentLoggedInFaculty, setCurrentLoggedInFaculty] = useState({});
  const [currentLeaveLettersByClassName, setCurrentLeaveLettersByClassName] = useState([{}]);
  const [currentStudentMarks, setCurrentStudentMarks] = useState({});
  const [feeDetails, setFeeDetails] = useState([{}]);
  const [quizExamLink, setQuizExamLink] = useState([]);
  const [currentWeekExamsArr, setCurrentWeekExamsArr] = useState([]);
  const[quizExamsArr,setQuizExamsArr] = useState([])
  async function updateCurrentStatus(email,isAuthorized) {
 let curremail =  await AsyncStorage.getItem("email");
 let currmobile =  await AsyncStorage.getItem("mobile");
    setCurrentLoggedInStatus(curremail);
    setCurrentLoggedInId(currmobile);
  }

  async function setLocalItem(id,mobile,name,email,address,isAuthorized) {
    let isAuthorizedValue = "";
    if(isAuthorized===false){
      isAuthorizedValue="false";
    }else{
      isAuthorizedValue="true"
    }
    await AsyncStorage.setItem("userId",id);
    await AsyncStorage.setItem("isAuthenticated", "true");
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("email",email);
    await AsyncStorage.setItem("isAuthorized",isAuthorizedValue);
    await AsyncStorage.setItem("mobile",mobile);
    await AsyncStorage.setItem("address",address);
  }
  async function signup(name,email,password,address,mobile) {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { name,email,password,address,mobile };
    const response = await axios
      .post(BACKEND_API_URL + "/Auth/Signup", body, config)
      .then((data) => {
        console.log(data.data);
        setLoading(false)
        if (data.data === "Sorry! This Mobile is already in use") {
          setLoading(false);
          return Alert.alert("Registration failed", data.data);
        }
        if (data.data === "you don't have any access") {
          setLoading(false);
          return Alert.alert(
            "Registration Failed",
            "you don't have any access"
          );
        }
        if (data.data._id) {
          console.log("Authenticated user");
          //isAuthenticated -> isAuthorized
          setLocalItem(data.data._id,mobile,name,email,address,data.data.isAuthenticated);
          setAuthenticated(true);
          setLoading(false);

          return Alert.alert(
            "Registration Success",
            "You are now authenticated"
          );
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        return Alert.alert(
          "Registration Failed",
          "Error Occurred while signup. Check your internet connection and try again later."
        );
      });
  }
  async function studentLogin(mobile,password) {
    // await AsyncStorage.setItem("isAuthenticated","true");
    // setAuthenticated(true);
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { mobile, password };
    const response = await axios
      .post(BACKEND_API_URL + "/Auth/Login", body, config)
      .then((data) => {
        console.log(data.data);
        if (data.data === "Either mobile number or password is wrong") {
          setLoading(false);
          return Alert.alert("Login Failed", JSON.stringify(data.data));
        }
        if (
          data.data === "This mobile number is not yet registered!"
        ) {
          setLoading(false);
          return Alert.alert(
            "Login Failed",
          JSON.stringify(data.data)
          );
        }
        if (data.data._id) {
          let idx = 0;
          setLocalItem(data.data._id,mobile,data.data.name,data.data.email,data.data.address,data.data.isAuthenticated);
          setLoading(false);
          return Alert.alert("Login Success !", "You are now logged in");
        }
      })
      .catch((err) => {
        console.log("Error Occurred : " + err.message);
        setLoading(false);
      });
  }
  async function logout() {
    let allKeys = await AsyncStorage.getAllKeys();
    console.log("All stored keys : ", allKeys);
    await AsyncStorage.removeItem("isAuthenticated");
    await AsyncStorage.removeItem("userId");
    await AsyncStorage.removeItem("isAuthorized");

    return setAuthenticated(false);
  }
  function authenticateFun() {
    return setAuthenticated(true);
  }
  function removeAuthenticate() {
    return setAuthenticated(false);
  }
  async function getDetails(inputData) {
    setLoading(true);
    setCurrStudentDetails(inputData);
    console.log("Fee Details");
    console.log(inputData.className);
    setLoading(false);
  }

  async function facultySignup(mobile, password, role) {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { mobile, password };
    const response = await axios
      .post(BACKEND_API_URL + "/TeacherRoutes/auth/Signup", body, config)
      .then((data) => {
        console.log(data.data);
        if (data.data === "This mobile number is already registered") {
          setLoading(false);

          return Alert.alert(
            "warning",
            "This mobile number is already registered"
          );
        }
        if (data.data === "You don't have access") {
          setLoading(false);
          return Alert.alert("Warning", "You don't have any access");
        }
        if (data.data.mobile) {
          setLoading(false);
          let idx = 1;
          setLocalItem(role, mobile, idx);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  async function facultyLogin(mobile, password, role) {
    //faculty login
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { mobile, password };
    const response = await axios
      .post(BACKEND_API_URL + "/TeacherRoutes/auth/login", body, config)
      .then((data) => {
        console.log(data.data);
        if (data.data === "You are not registered") {
          setLoading(false);
          return Alert.alert("Login Failed", "You are not registered");
        }
        if (data.data === "Either password or mobile is wrong") {
          setLoading(false);
          return Alert.alert("Login Failed", data.data);
        }
        if (data.data.Name) {
          console.log("Name : " + data.data);
          console.log("Current Faculty Details ");
          console.log(data.data);
          setLoading(false);
          let idx = 1;
          setLocalItem(role, mobile, idx);
          setCurrentLoggedInFaculty(data.data);

          return Alert.alert("Login Success", "You are now logged in!");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);

      });
  }
  async function getPersonalDetails(mobileNumber) {
    setLoading(true);
    const response = await axios
      .get(BACKEND_API_URL + "/auth/getDetails/" + mobileNumber)
      .then((data) => {
        console.log("Loading current student details");
        console.log(data.data);
        setCurrStudentDetails(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error Occurred : " + err.message);
        setLoading(false);
      });
  }

  async function getAllQuizzes(){
    try {
      setLoading(true);
        console.log("Loading Quizzes")
        const response = await axios.get(BACKEND_API_URL+"/api/Quiz/upload/getQuizDetails");
        if(response.data){
            console.log("All quiz",response.data);
            setQuizExamsArr(response.data)
        setLoading(false);

        }
    } catch (error) {
        setLoading(false);
        return Alert.alert("Error Occurred!","Something went wrong");

    }
  }

  async function updateQuizAttempt(userId,quizId){
    try {
      setLoading(true);
      const response = await axios.put(BACKEND_API_URL+"/api/Quiz/upload/updateAttempts/"+userId+"/"+quizId);
      if(response.data){
        console.log("quiz attempt uploaded",response.data);
        }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return Alert.alert("Error Occurred!","Something went wrong");
 
    }
  }

  const values = {
    signup: signup,
    studentLogin: studentLogin,
    logout: logout,
    authenticated: authenticated,
    authenticateFun: authenticateFun,
    removeAuthenticate: removeAuthenticate,
    getDetails: getDetails,
    loading: loading,
    currentLoggedInStudent: currStudentDetails,
    sentLetter: sentLetter,
    homeWorksArr: homeWorksArr,
    facultySignup: facultySignup,
    facultyLogin: facultyLogin,
    currentLoggedInStatus: currentLoggedInStatus,
    currentLoggedInId: currentLoggedInId,
    updateCurrentStatus: updateCurrentStatus,
    getPersonalDetails: getPersonalDetails,
    currentLoggedInFaculty: currentLoggedInFaculty,
    currentLeaveLettersByClassName: currentLeaveLettersByClassName,
    currentStudentMarks: currentStudentMarks,
    feeDetails: feeDetails,
    quizExamLink: quizExamLink,
    currentWeekExamsArr: currentWeekExamsArr,
    getAllQuizzes:getAllQuizzes,
    quizExamsArr:quizExamsArr,
    updateQuizAttempt:updateQuizAttempt
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
