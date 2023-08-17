import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove, query, orderByKey, equalTo } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  /********** 개인 인증키 입력 **********/
  // 구글 firebase에서 개인인증키 복사

  apiKey: "AIzaSyBpobpJH8xMx4Anb3FHJL0tg0x7gw44tgA",
  authDomain: "project-e9ee0.firebaseapp.com",
  databaseURL: "https://project-e9ee0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-e9ee0",
  storageBucket: "project-e9ee0.appspot.com",
  messagingSenderId: "155741959176",
  appId: "1:155741959176:web:bb1f14e40c2f5f2df28dbd",
  measurementId: "G-9NLZKHPGPB" 


};
console.log('firebaseConfig ', firebaseConfig)
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);



export function login() { // 로그인창 실행함수 
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() { // 로그아웃 실행함수 
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) { // 로그인 로그아웃 상태관리 함수  (로그인 로그아웃을 바꿔주는 함수)
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) { // 관리자여부조회 함수 
  return get(ref(database, 'admins')) 
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}


// 상품관리 실시간 데이터 베이스



export async function getProducts() { // 데이터 베이스에 등록된 상품 로드 하는 함수 
  return get(ref(database, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}


export async function getProductDetail(productId) { // 특정 id 와 같은 상품 찾아주는 함수 ( 상품상세페이지 )
  return get(
    query(ref(database, "products"), orderByKey("id"), equalTo(productId))
  ).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val())[0];
    } else {
      console.log("Product not found");
      return null;
    }
  });
}

