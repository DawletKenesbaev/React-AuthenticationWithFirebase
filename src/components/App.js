import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   <div className="w-100" style={{ maxWidth: "400px" }}>
    //       <AuthProvider>
    //         <Router>
    //           <Routes>
    //             <Route exact path="/" component={Dashboard} />
    //             <Route path="/update-profile" component={UpdateProfile} />
    //             <Route path="/signup" component={Signup} />
    //             <Route path="/login" component={Login} />
    //             <Route path="/forgot-password" component={ForgotPassword} />
    //           </Routes>
    //         </Router>
    //       </AuthProvider>
    //   </div>
    // </Container>
    <Signup />
  )
}

export default App
