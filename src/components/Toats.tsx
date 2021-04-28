// import React, { useEffect, useState } from "react";

// import styles from "../styles/components/Toats.module.css";

// interface Props {
//   type?: "info" | "success" | "danger" | "warning";
//   title?: string;
//   content?: string;
// }

// const Toats: React.FC<Props> = (props) => {
//   const [teste, setTeste] = useState(false);

//   useEffect(() => {
//     setTeste(true);
//     setTimeout(() => {
//       setTeste(false);
//     }, 2000);
//   }, []);

//   return (
//     <>
//       {teste && (
//         <div
//           key={props.type}
//           className={`${styles.container} ${styles[props.type]}`}
//         >
//           {props.type === "info" ? (
//             <img src="/icons/icon-info.svg" alt="Icone" />
//           ) : props.type === "success" ? (
//             <img src="/icons/icon-sucess.svg" alt="Icone" />
//           ) : props.type === "danger" ? (
//             <img src="/icons/icon-danger.svg" alt="Icone" />
//           ) : (
//             <img src="/icons/icon-warning.svg" alt="Icone" />
//           )}
//           <section>
//             <h4>{props.title}</h4>
//             <span>{props.content}</span>
//           </section>
//           <section>
//             <img
//               src="/icons/closed-black.svg"
//               alt="Sair"
//               onClick={() => setTeste(false)}
//             />
//           </section>
//         </div>
//       )}
//     </>
//   );
// };

// export default Toats;
