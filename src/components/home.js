export const home = () =>{ //Esto es un función que retorna homeDiv que es un nuevo nodo
    const homeDiv = document.createElement('div');
    const buttonRegister = document.createElement('button');

    buttonRegister.textContent = 'Registrate';
    homeDiv.appendChild(buttonRegister);
    return homeDiv;
}
