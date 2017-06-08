   /* .go {
   **   animation: turn 3s ease-in-out forwards;
   **  }
   */

    function go (rotate) {
      let rule = `@keyframes turn {
                    0% {
                      transform: rotate(0);
                    }
                    100% {
                      transform: rotate(${rotate}deg)
                    }
                  }`
      let style = document.createElement('style')
      style.type = 'text/css'
      style.innerHTML = rule
      document.getElementsByTagName('head')[0].appendChild(style)
    }