let hour = document.querySelector("#hh");
        let minut = document.querySelector("#mm");
        let second = document.querySelector("#ss");
        setInterval(() => {
            let time = new Date();
            let hr = time.getHours()*30;
            let min = time.getMinutes()*6;
            let sec = time.getSeconds()*6;
            hour.style.transform = `rotateZ(${hr+(min/12)}deg)`;
            minut.style.transform = `rotateZ(${min}deg)`;
            second.style.transform = `rotateZ(${sec}deg)`;
        })
