import './App.css';
import Sidebar from './sidebar/sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';


function App() {
  return (
   <div className='App'>
      <ProSidebarProvider>
        <Sidebar/>
      </ProSidebarProvider>;
   </div>
  );
}

export default App;