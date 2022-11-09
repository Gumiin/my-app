import React from 'react';
import {FC} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";

import {Home} from "./Components/Routes/Home/home";
import {Posts} from "./Components/Routes/Posts/posts";
import {GlobalStyle} from './styleHelpers/global';
import {Layout} from './Components/Common/Layout';

export const App: FC = () => {
  return (
    < >
      <GlobalStyle />
        <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path="posts" element={<Posts/>}/>
                  <Route index element={<Home/>} />
              </Routes>
          </Layout>
        </BrowserRouter>
    </>
  );
};