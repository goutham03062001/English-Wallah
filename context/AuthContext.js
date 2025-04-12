import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BACKEND_API_URL } from "../utils/Constants";
import { Alert } from "react-native";
import PersonalDetails from "../screens/PersonalDetails";
import RazorpayCheckout from 'react-native-razorpay';

export const AuthContext = createContext({
  signup: (mobile, id) => {},
  studentLogin: () => {},
  logout: () => {},
  authenticated: false,
  authenticateFun: () => {},
  removeAuthenticate: () => {},
  getDetails: (inputData) => {},
  loading: false,
  currentLoggedPerson: {},
  currentLoggedInStatus: "",
  currentLoggedInId: "",
  updateCurrentStatus: (role) => {},
  getPersonalDetails: (id) => {},
  getAllQuizzes:()=>{},
  updateQuizAttempt:(userId,quizId,score)=>{},
  updateModelPaperAttempt:(quizId,score)=>{},
  quizExamsArr : [],
  loadCurrentPersonDetails:()=>{},
  getAllModelPapersByType:()=>{},
  getAllBlankPapersByType : ()=>{},
  updateAuthorization:(paymentId,userEmail,userId,userMobile,data)=>{},
  sendEmailOTP:(userEmail)=>{},
  currentOTP:Number,
  resetPassword:(currentPassword)=>{},
  createOrder:()=>{},
  currentOrderId:null,
  getAllEnglishPedagogyQuiz : ()=>{},
  getEnglishPedagogyById : (quizId)=>{},
  getAllGeneralEnglishPapers:()=>{},
  getGeneralEnglishPaperById : (quizId)=>{},
  indexArr:[]
});

export default function AuthContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmissionFound, setIsAdmissionFound] = useState(false);
  const [currentLoggedInPerson, setCurrentLoggedInPerson] = useState({});
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
  const[currentOTP,setCurrentOTP] = useState(Number);
  const[currentOrderId,setCurrentOrderId] = useState(null);
  const[currentQuizIndexArr,setCurrentQuizIndexArr] = useState(null)
  async function updateCurrentStatus(email,isAuthorized) {
 let curremail =  await AsyncStorage.getItem("email");
 let currmobile =  await AsyncStorage.getItem("mobile");
    setCurrentLoggedInStatus(curremail);
    setCurrentLoggedInId(currmobile);
  }

  async function setLocalItem(id,mobile,name,email,address,isAuthorized) {
    var isAuthorizedValue = "";
    if(isAuthorized){
      isAuthorizedValue="true";
    }else{
      isAuthorizedValue="false"
    }
    await AsyncStorage.setItem("userId",id);
    await AsyncStorage.setItem("isAuthenticated", "true");
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("email",email);
    await AsyncStorage.setItem("isAuthorized",isAuthorizedValue);
    await AsyncStorage.setItem("mobile",mobile);
    await AsyncStorage.setItem("address",address);
  }
  async function signup(name,email,password,address,mobile,deviceInfo) {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { name,email,password,address,mobile, deviceInfo};
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
          setCurrentLoggedInPerson(data.data);
          console.log("signup person in data - ",data.data)

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
  async function studentLogin(mobile,password,deviceInfo) {
    // await AsyncStorage.setItem("isAuthenticated","true");
    // setAuthenticated(true);
    console.log("Inside Login Fun");
    console.log("Brand Name - "+deviceInfo.brand + " "+" Model Name - "+deviceInfo.modelName + " "+"Device Type - "+deviceInfo.deviceType)
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { mobile, password,deviceInfo };
    const response = await axios
      .post(BACKEND_API_URL + "/Auth/Login", body, config)
      .then((data) => {
        console.log(data.data);
        if (data.data === "Either mobile number or password is wrong") {
          setLoading(false);
          
          return Alert.alert("Login Failed", JSON.stringify(data.data));
        }
        if (data.data === "This mobile number is not yet registered!") {
          setLoading(false);
          return Alert.alert(
            "Login Failed",
          JSON.stringify(data.data)
          );
        }
        if(data.data === "Permission Denied"){
          setLoading(false)
          return Alert.alert("Permission Denied","You cannot access this account!");
        }
        if (data.data._id) {
          let idx = 0;
          setLocalItem(data.data._id,mobile,data.data.name,data.data.email,data.data.address,data.data.isAuthenticated);
          setLoading(false);
          setCurrentLoggedInPerson(data.data);
          // console.log("logged person in data - ",data.data);
          getAllQuizzes();
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
    // setCurrStudentDetails(inputData);
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
        // setCurrStudentDetails(data.data);
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
            // console.log("All quiz",response.data);
            setQuizExamsArr(response.data)
        setLoading(false);

        }
    } catch (error) {
        setLoading(false);
        return Alert.alert("Error Occurred!","Something went wrong",error.message);

    }
  }

  async function updateQuizAttempt(quizId,score){
    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }
    const body = {score};
    console.log("Quiz Score - ",body.score);
    try {
      let userId = await AsyncStorage.getItem("userId");
      console.log("userId - "+userId+" quizId - "+quizId)
      setLoading(true);
      const response = await axios.put(BACKEND_API_URL+"/api/Quiz/upload/updateAttempts/user/"+userId+"/quiz/"+quizId,body,config);
      if(response.data){
        console.log("quiz attempt uploaded",response.data);
        }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error Occurred : "+error)
      return Alert.alert("Error Occurred!","Something went wrong"+error);
 
    }
  }
  async function loadCurrentPersonDetails(){
    const userId = await AsyncStorage.getItem("userId");
    try {
      setLoading(true);
      const data = await axios.get(BACKEND_API_URL+"/Auth/currentPerson/"+userId);
      if(data.data._id){
        setLoading(false);
        return setCurrentLoggedInPerson(data.data);
      }else{
        setLoading(false);
        return Alert.alert("No user found with current id");
      }
    } catch (error) {
      setLoading(false);
      console.log("Error Occurred : "+error)
      return Alert.alert("Error Occurred!","Something went wrong"+error);
    }
  }
  async function getAllModelPapersByType(ModelPaperType){
    try {
      setLoading(true);
      console.log("Loading Model Papers")
      const response = await axios.get(BACKEND_API_URL+'/api/Quiz/upload/modelPaper/getAllModelPapers/'+ModelPaperType);
      if(response.data){
        // setQuiz
        setQuizExamsArr(response.data);
        setLoading(false);
        // console.log("Model papers by type "+ModelPaperType);
        // console.log(response.data)
      }
    } catch (error) {
      setLoading(false);
      console.log("Error Occurred : "+error)
      return Alert.alert("Error Occurred!","Something went wrong"+error);
    }
  }

// create order api


  async function updateModelPaperAttempt(ModelPaperId,score){
      setLoading(true);
      const body = {score}
      const config = {
        headers:{
          "Content-Type":"application/json"
        }
      }
    try {
      let userId = await AsyncStorage.getItem("userId");
      console.log("Updating model paper with id - ",ModelPaperId)
        const response = await axios.put(BACKEND_API_URL+"/api/Quiz/upload/modelPaper/updateModelPaper/id/"+ModelPaperId+"/user/"+userId,body);
        if(response.data){
          setLoading(false);
          // setQuizExamsArr(response.data);
          console.log("Model Paper Updated");
        }
    } catch (error) {
      setLoading(false);
      console.log("Error Occurred : "+error)
      return Alert.alert("Error Occurred! while updating the model paper attempt","Something went wrong"+error);
    }
  }
  async function getAllBlankPapersByType(BlankPaperType){
    setLoading(true)
    try {
      const response = await axios.get(BACKEND_API_URL+"/api/blanks/allBlanks/"+BlankPaperType);
      if(response.data){
        setLoading(false);
        setQuizExamsArr(response.data);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error Occurred !"+error.message);
      return Alert.alert("Error Occurred!","Something went wrong "+error.message)
    }
  }
// data.razorpay_payment_id,userEmail,userId,userMobile,data,userName
// data.razorpay_payment_id,userEmail,userId,userMobile,data,userName,response.data.id,data.razorpay_order_id
  async function updateAuthorization(paymentId,userEmail,userId,userMobile,successData,userName,orderId,razorPayOrderId,subscriptionAmount){
    setLoading(true);
    const body = {paymentId,userEmail,userMobile,successData,userId,userName,orderId,razorPayOrderId,subscriptionAmount};
   const config = {
   headers :{
      "Content-Type":"application/json"
    }
   }
    try {
      Alert.alert("Working On Update Auth","currently working on update authorization function")
      await AsyncStorage.removeItem("isAuthorized");

      const response = await axios.put(BACKEND_API_URL+"/api/razorpay/getData",body,config);
      if(response.data==="Payment Successful"){
        setLoading(false);
        Alert.alert("Payment Success","you have successfully activated your subscription.");
         function delayFunction(){
          async function execute(){
            // await AsyncStorage.setItem("isAuthorized","true");
          //get personal status and update the value
          try {
            const userId = await AsyncStorage.getItem("userId");
            const response = await axios.get(BACKEND_API_URL+"/Auth/getInfo/"+userId);
            if(response.data){
              if(response.data.isAuthenticated){
            await AsyncStorage.setItem("isAuthorized","true");

              }else{
                console.log("Failed to set the value for authorization");
                return Alert.alert("Please, kindly close the app and refresh")
              }
            }else{
              return Alert.alert("Error Occurred","Failed to fetch your subscription details")
            }
          } catch (error) {
            return Alert.alert("Error Occurred","Error Occurred while getting your Subscription Status")
          }
          }
          setTimeout(()=>{
            execute();
          },5000)
        }
        delayFunction();
        function setTimeOutFunction(){
          setTimeout(()=>{
            setLoading(true);
          },2000)
          setLoading(false)
        }
        setTimeOutFunction();
        
        return;
      }else{
        setLoading(false);
        Alert.alert("Not Verified","Something went happen! While Processing your payment");
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log("Error Occurred !"+error.message);
      return Alert.alert("Error Occurred!","Something went wrong "+error.message)
    }
  }

  async function sendEmailOTP(userEmail){
    try {
      setLoading(true);
      const config = {
        headers:{
          "Content-Type":"application/json"
        }
      }
      const body = {userEmail}
      const response = await axios.post(BACKEND_API_URL+"/Auth/forgotPassword",body,config);
      if(response.data.message==="OTP Sent Successfully"){
      setLoading(false);

        setCurrentOTP(response.data.OTP);
        return Alert.alert("OTP Sent","An Email Containing OTP to reset your password sent to your email")
      }
    } catch (error) {
      setLoading(false);
      console.log("Error Occurred !"+error.message);
      return Alert.alert("Error Occurred!","Something went wrong "+error.message)
    }
  }
  async function resetPassword(currentPassword){
    try {
      setLoading(true);
      const config = {
        headers:{
          "Content-Type":"application/json"
        }
      }
      const currentEmail = await AsyncStorage.getItem("email");
      const body = {currentPassword,currentEmail}
      const response = await axios.post(BACKEND_API_URL+"/Auth/resetPassword",body,config);
      if(response.data==="Password has updated"){
        setLoading(false);
        return Alert.alert("Password has been Updated","Please login with new password");
      }else{
        setLoading(false);
        return Alert.alert("Something went happen",response.data)
      }
    } catch (error) {
      setLoading(false);
      console.log("Error Occurred !"+error.message);
      return Alert.alert("Error Occurred!","Something went wrong "+error.message)
    }
  }
  async function createOrder(userName,userEmail,userMobile,userAddress,userId,subscriptionAmount){
  // const body = {receiptName:}
  const currentUserName = await AsyncStorage.getItem("name");
  const body = {receiptName : currentUserName};
  const config ={
    headers:{
      "Content-Type":"application/json"
    }
  }
    try {
    setLoading(true);
    const response = await axios.post(BACKEND_API_URL+"/api/razorpay/makeNewPayment",body,config);
    if(response.data){
      setLoading(false);
      async function setTimeOutFunction(){
        setTimeout(()=>{
        
          return setCurrentOrderId(response.data.id)
        },2000);
        await AsyncStorage.setItem("currentOrderId",response.data.id);
        await AsyncStorage.setItem("currentOrderId1",currentOrderId);
      }
        setTimeOutFunction();
        var options = {
          description: 'English Wallah App Subscription',
          image: require("../assets/icon.png"),
          currency: 'INR',
          key: 'rzp_live_J89zrEvhSQ2i1m',
          amount: subscriptionAmount*100,
          name: 'English Wallah | Xenicx',
          order_id: response.data.id,//Replace this with an order_id created using Orders API.
          prefill: {
            email:userEmail,
            contact: userMobile,
            name: userName,
            address : userAddress
          },
          theme: {color: '#53a20e'}
        }
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
         alert(`Order: ${data.razorpay_order_id}`);
          setTimeout(()=>{
          updateAuthorization(data.razorpay_payment_id,userEmail,userId,userMobile,data,userName,response.data.id,data.razorpay_order_id,subscriptionAmount)
      
          },2000);
          
        }).catch((error) => {
          setLoading(false);
          Alert.alert("Error ",error.description)
      
        });
    }
    else{
      return Alert.alert("Error Occurred","Error occurred while creating payment order");
    }
    } catch (error) {
      return Alert.alert("Error Occurred",error.message)
    }

  }

  async function getAllEnglishPedagogyQuiz(){
    setLoading(true);
    try {
      const response = await axios.get(BACKEND_API_URL+"/api/Quiz/upload/getAllEnglishPedagogy");
      if(response.data){
        setLoading(false)
        return setQuizExamsArr(response.data);
      }else{
        setLoading(false)
        console.log("no data found")
      }
    } catch (error) {
      setLoading(false)
      return Alert.alert("Error Occurred",error.message)

    }
  }

  async function getEnglishPedagogyById(id){
    setLoading(true);
    try {
      const response = await axios.get(BACKEND_API_URL+"/api/Quiz/upload/getEnglishPedagogyPaperById/"+id);
      if(response.data){
        setLoading(false);
        return setQuizExamsArr(response.data);
      }
    } catch (error) {
      setLoading(false)
      return Alert.alert("Error Occurred",error.message)
    }
  }

  async function getAllGeneralEnglishPapers(){
    setLoading(true);
    try {
      const response = await axios.get(BACKEND_API_URL+"/api/Quiz/upload/getAllGeneralEnglishPapers");
      if(response.data){
        setLoading(false);
        setCurrentQuizIndexArr(response.data); //to calculat the index of quiz
        return setQuizExamsArr(response.data);
      }
    } catch (error) {
      setLoading(false)
      return Alert.alert("Error Occurred",error.message)
    }

  }

  async function getGeneralEnglishPaperById(id){
    setLoading(true);

    try {
      console.log("Entered into general english paper function")
      const response = await axios.get(BACKEND_API_URL+"/api/Quiz/upload/getGeneralEnglishPaperById/"+id);
      if(response.data){
        setLoading(false);
        
        return setQuizExamsArr(response.data);
      }
    } catch (error) {
      setLoading(false)
      return Alert.alert("Error Occurred",error.message)
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
    currentLoggedPerson: currentLoggedInPerson,
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
    updateQuizAttempt:updateQuizAttempt,
    loadCurrentPersonDetails:loadCurrentPersonDetails,
    getAllModelPapersByType:getAllModelPapersByType,
    updateModelPaperAttempt:updateModelPaperAttempt,
    getAllBlankPapersByType:getAllBlankPapersByType,
    updateAuthorization:updateAuthorization,
    sendEmailOTP:sendEmailOTP,
    currentOTP:currentOTP,
    resetPassword:resetPassword,
    createOrder:createOrder,
    currentOrderId:currentOrderId,
    getAllEnglishPedagogyQuiz:getAllEnglishPedagogyQuiz,
    getEnglishPedagogyById:getEnglishPedagogyById,
    getAllGeneralEnglishPapers:getAllGeneralEnglishPapers,
    getGeneralEnglishPaperById:getGeneralEnglishPaperById,
    indexArr : currentQuizIndexArr
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
