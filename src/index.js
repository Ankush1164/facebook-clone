import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import FriendsList from './components/LeftSideLinkComponents/FriendsList';
import GroupList from './components/LeftSideLinkComponents/GroupList';
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
        path:"friends",
        element:<FriendsList/>
      },
      {
        path : "groups",
        element : <GroupList/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

