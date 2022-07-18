import { Header } from './components/Header'
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';



function App() {
  return (
      <div>
        <Header />
        
        <div className={styles.wrapper}>
          <Sidebar />
          
          <main>
         
            <Post 
              author="Matheus Susko" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt ex est, quas quasi dolore non suscipit blanditiis odio quidem corrupti minus repellendus sint atque? Saepe accusantium dolorem qui doloribus."
            />
            <Post 
              author="Fulano de tal" 
              content="Novopost"
            />
          </main>
        </div>
      </div>
  )
}

export default App
