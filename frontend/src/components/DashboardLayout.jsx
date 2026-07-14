// function DashboardLayout({ children }) {
//   return (
//     <div
//       style={{
//         maxWidth: "1100px",
//         margin: "0 auto",
//         padding: "40px",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// export default DashboardLayout;

function DashboardLayout({ children }) {
  return (
    <div className="dashboard">

      <div className="dashboard-container">

        {children}

      </div>

    </div>
  );
}

export default DashboardLayout;