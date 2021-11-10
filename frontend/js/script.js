notification()

function notification() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        //   let notification = new Notification("Les notification sont déjà activée 👍");
        let notifStatue = true
        return notifStatue
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                let notification = new Notification("Les notification sont activée 👍");
            }
        });
    }
}

fetch("http://217.160.9.42:3000/api/info").then(response => {
    if (response.ok) {
        return response.json()
    } else {
        console.error('API connection failed');
    }
}).then(responseData => {
    responseData.forEach(elm => {
        if (elm.from == "admin") {
            document.getElementById("admin-info1").innerHTML = elm.infoText1
            document.getElementById("admin-info2").innerHTML = elm.infoText2
        } else {
            document.getElementById("bde-info1").innerHTML = elm.infoText1
            document.getElementById("bde-info2").innerHTML = elm.infoText2
        }
    });
}).catch(error => {
    console.log(error);
})