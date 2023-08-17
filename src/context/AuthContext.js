
import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase"; // firebase.js 파일 연동 

const AuthContext = createContext();

export function AuthContextProvider({ children }) {//로그인 로그아웃은 모든페이지에서 작동해야하기때문에 context파일로.. 새로고침해도 유지댐

  const [user, setUser] = useState(); // 사용자 로그인 상태관리 

  useEffect(() => { // firebase.js 파일내에서 로그인/로그아웃 상태 관리 함수 실행 
    onUserStateChange((user) => setUser(user));
  }, []);
  
  //console.log(user)

  return (
    // Provider 안에 children에 다 적용하겠다는뜻
    <AuthContext.Provider  // 로그인/로그아웃 환경을 제공하는 Provider 설정 
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
