    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }

    const backgroundColor = getRandomHexColor();

    const bodyEl = document.querySelector('body')
    const btnStart = document.querySelector('[data-start]');
    const btnStop = document.querySelector('[data-stop]');


    btnStart.addEventListener('click', startChangeBodyColor);
    btnStop.addEventListener('click', stopChangeBodyColor);


    btnStop.disabled = true;
    let idClear = null;

    function startChangeBodyColor() {

        const id = setInterval(() => {
            bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
        }, 1000);

        btnStart.disabled = true;
        btnStop.disabled = false;
        return idClear = id;
    }


    function stopChangeBodyColor() {
        clearInterval(idClear);
        btnStart.disabled = false;
        btnStop.disabled = true;

    }