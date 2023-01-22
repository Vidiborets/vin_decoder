import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Customers } from 'pages/Customers/Customers';
import { Toaster } from 'react-hot-toast';
import { Variables } from 'pages/Variables/Variables';
import { VariableDetails } from 'pages/VariablesDetails/VariablesDeatails';
import { Contact } from 'pages/Contact/Contact';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Customers />} />
          <Route path="variables" element={<Variables />} />
          <Route path="variables/:variablesId" element={<VariableDetails />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
