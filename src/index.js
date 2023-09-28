import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import FriendsList from './components/LeftSideLinkComponents/FriendsList';
import GroupList from './components/LeftSideLinkComponents/GroupList';
import CenterPage from './components/CenterPage';
import MarketItems from './components/MarketItems/MarketItems';
import VideosItems from './components/VideosItems/VideosItems';
import NewsShaltter from './components/NewsShaltter/NewsShaltter';
import UserDetails from './components/UserInfo/UserDetails';
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
      path:"/",
        element:<CenterPage />
        },
      {
        path:"friends",
        element:<FriendsList/>
      },
      {
        path : "groups",
        element : <GroupList/>
      },
      {
        path : 'home',
        element : <App/>
      },
      {
        path : "marketPlace",
        element : <MarketItems/>
      },
      {
        path : "videos",
        element : <VideosItems/>
      },
      {
        path : "newsShaltter",
        element : <NewsShaltter/>
      }
    ]
  },
  {
    path : "UserProfile",
    element : <UserDetails/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

