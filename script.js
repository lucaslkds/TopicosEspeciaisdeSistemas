function umadez() {

    if (i<=10)

    {
            let para = document.createElement('p');
            para.textContent = i++;
            document.body.appendChild(para);
          }
      }
          const buttons = document.querySelectorAll('button');

  for(var i = 0; i < 10 ; i++) {
    buttons[i].addEventListener('click', umadez);
  }
