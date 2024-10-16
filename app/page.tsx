// 第一次上課教材未修改前的練習
// import styles from './page.module.css'
// import MyName from './myname'
// import MyButton from './mybutton'
// export default function Home() {
//   return (<div className={styles.page}>
//     <h1>Hello</h1>
//     <MyName/>
//     <MyButton/>
//     </div>)
// }



// 第一次作業
// 'use client';
// import {useState} from 'react';
// import styles from './page.module.css'
// export default function Home() {
//   const [nums, setNums] = useState<number[]>([]);
//   function handleClick() {
//     let num = Math.floor(Math.random() * 11);
//     setNums(nums => [...nums, num]);
//   }
//   return (
//   <div className={styles.page}>
//     <h1>Hello</h1>
//     {nums.map((value)=>value+",")}
//     <button onClick={handleClick}>Click Me</button>
//   </div>)
// }



// 元件教材中目前運作失敗的東西
// 'use client';
// import Click from './click';
// import styles from './page.module.css'

// export default function Home() {

//   return (
//   <div className={styles.page}>
//     <Click/>
//   </div>)
// }

// 運作失敗的東西的前一個範例碼
// 'use client';
// import {useState} from 'react';
// import styles from './page.module.css'
// function Click(){
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count+1);
//     alert(count);
//   }
//   return (    
//     <div>
//       {count}
//       <button onClick={handleClick}>Click Me</button>
//     </div>)

// }
// export default function Home() {

//   return (
//   <div className={styles.page}>
//     <h1>Hello</h1>
//     <Click/>
//   </div>)
// }



// import styles from './page.module.css'
// import MyName from './myname'
// import MyButton from './mybutton'
// import Click from './click'
// import ProductList from './product/productList'
// export default function Home() {
//   return (<div className={styles.main}>
//     <h1>Hello</h1>
//     <MyName />
//     <MyButton />
//     <MyButton />
//     <Click />
//     <ProductList />
//   </div>)
// }

import styles from './page.module.css'
import ProductList from './product/productList'
export default function Home() {
  return (<div className={styles.main}>
    <h1>Product</h1>
    <ProductList />
  </div>)
}



// 這是最原始的畫面
// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>app/page.tsx</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
