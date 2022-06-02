import { collection, query, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { db, deletePost, auth } from '../lib/auth.js';

export const listPost = () => {
  const div = document.createElement('div');
  const q = query(collection(db, 'text'));

  onSnapshot(q, (querySnapshot) => {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    querySnapshot.forEach((doc) => {
      const divPost = document.createElement('section');
      divPost.className = 'divPost';

      const email = document.createElement('p');
      email.textContent = doc.data().email;

      const texto = document.createElement('p');
      texto.textContent = doc.data().text;

      const imgDelete = document.createElement('img');
      imgDelete.className = 'eliminate';
      imgDelete.src = './images/eliminar.png';

      const buttonDelete = document.createElement('button');
      buttonDelete.className = 'buttonDelete';
      buttonDelete.value = doc.id;
      buttonDelete.appendChild(imgDelete);
      divPost.append(email, texto);
      if (auth.currentUser.email === doc.data().email) {
        divPost.append(buttonDelete);
      }
      div.append(divPost);
    });
    const arrayDelete = document.querySelectorAll('.buttonDelete');
    arrayDelete.forEach((button) => {
      button.addEventListener('click', () => {
        deletePost(button.value);
      });
    });
  });
  return div;
};
