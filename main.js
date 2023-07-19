
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.style.setProperty('--mainTextColor', '#fff');
        document.documentElement.style.setProperty('--secondaryTextColor', '#adb0b1');
        document.documentElement.style.setProperty('--mainLinkColor', 'rgb(30, 190,214)');
        document.documentElement.style.setProperty('--mainBorderColor', '#2b3031');
        document.documentElement.style.setProperty('--mainBgColor', '#131415');
        document.getElementById("sun").classList.add("disabled_icon")
        document.getElementById("sun").classList.remove("enabled_icon")
        document.getElementById("moon").classList.add("enabled_icon")
        document.getElementById("moon").classList.remove("disabled_icon")
    }
    else {
        document.documentElement.style.setProperty('--mainTextColor', '#000');
        document.documentElement.style.setProperty('--secondaryTextColor', 'rgb(51 51 51)');
        document.documentElement.style.setProperty('--mainLinkColor', '#0da2b8');
        document.documentElement.style.setProperty('--mainBorderColor', 'rgb(218, 218, 218)');
        document.documentElement.style.setProperty('--mainBgColor', 'rgb(249, 250,251)');
        document.getElementById("sun").classList.add("enabled_icon")
        document.getElementById("sun").classList.remove("disabled_icon")
        document.getElementById("moon").classList.add("disabled_icon")
        document.getElementById("moon").classList.remove("enabled_icon")
    }
}


window.onload = function () {
    const toggleSwitch = document.getElementById('darkmode-toggle');
    toggleSwitch.checked = true; // starts checked
    switchTheme({ target: toggleSwitch });
    document.getElementById("sun").style.transition = "all 0.02s";
    document.getElementById("moon").style.transition = "all 0.02s";
    console.log("hello")
    toggleSwitch.addEventListener('change', switchTheme, false);
}
