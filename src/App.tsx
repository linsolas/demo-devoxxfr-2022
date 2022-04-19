import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './common/Header';
import { HomePage } from './routes/Home';
import { FormPage } from './routes/Form';
import { FlexPage } from './routes/Flex';
import { EndPage } from './routes/End';
import { ConsolePage } from './routes/Console';

// export const App = () => (
//   <BrowserRouter>
//     <Header/>
//     <Routes>
//       <Route path="/form" element={<FormPage/>}/>
//       <Route path="/flex" element={<FlexPage/>}/>
//       <Route path="/console" element={<ConsolePage/>}/>
//       <Route path="/end" element={<EndPage/>}/>
//       <Route path="*" element={<HomePage/>}/>
//     </Routes>
//   </BrowserRouter>
// );

export const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header/>
    <Routes>
      <Route path="/form" element={<FormPage/>}/>
      <Route path="/flex" element={<FlexPage/>}/>
      <Route path="/console" element={<ConsolePage/>}/>
      <Route path="/end" element={<EndPage/>}/>
      <Route path="*" element={<HomePage/>}/>
      <Route path={process.env.PUBLIC_URL} element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
);
