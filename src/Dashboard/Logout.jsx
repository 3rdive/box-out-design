import React, { useState } from 'react';

const Logout = () => {
  const [content, setContent] = useState(null);

  const handleButton1Click = () => {
         setContent(1);
       };

       const handleButton2Click = () => {
             setContent(2);
           };
  return (
    <div>
        <button onClick={handleButton1Click}>Button 1</button>
          <button onClick={handleButton2Click}>Button 2</button>
           {content === 1 && <div>Content 1</div>}
           {content === 2 && <div>Content 2</div>}
         </div>
  )
}

// import React, { useState } from 'react';

// function App() {
//   const [content, setContent] = useState(null);

//   const handleButton1Click = () => {
//     setContent(1);
//   };

//   const handleButton2Click = () => {
//     setContent(2);
//   };

//   return (
//     <div>
//       <button onClick={handleButton1Click}>Button 1</button>
//       <button onClick={handleButton2Click}>Button 2</button>
//       {content === 1 && <div>Content 1</div>}
//       {content === 2 && <div>Content 2</div>}
//     </div>
//   );
// }

// export default App;


export default Logout