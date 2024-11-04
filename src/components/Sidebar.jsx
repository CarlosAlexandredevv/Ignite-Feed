import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://classic.exame.com/wp-content/uploads/2024/05/GokuDay.jpg?quality=70&strip=info&w=1200"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/143346006?v=4" />
        <strong>Carlos Alexandre</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
