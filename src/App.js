import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {Provider} from 'react-redux';
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainContent from './components/MainContent';
import WatchPage from './components/WatchPage';
import SearchResults from './components/SearchResults';


function App() {
  document.title="myTube"
  return (
    
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
    
  );
}

export const  appRouter = createBrowserRouter([{
  path:'/',
  element: <Body/>,
  children:[
    {
      path:'/',
      element:<MainContent/>
    },
    {
      path:'/watch',
      element:<WatchPage/>
    },
    {
      path:'/results',
      element:<SearchResults/>
    }
  ]
}])

export default App;
