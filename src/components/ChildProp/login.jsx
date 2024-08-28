import React from "react";

const LoginComponent = ({ isAdmin = false }) => {
//   if (isAdmin) {
//     return <h3>Welcome Admin</h3>;
//   }else{
//     return <h3>Welcome User</h3>
//   }

    return <h3>Welcome {isAdmin?"Admin":"User"}</h3>

};

export default LoginComponent;
