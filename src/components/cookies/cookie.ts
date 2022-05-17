

const setCookie = (cname: string, cvalue: any, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";secure";
  }

  const getCookie = (cname: string) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // const checkCookie = (callback: any) => {
  //   let user = getCookie("token");
  //   if (user != "") {
  //    alert("Welcome again " + user);
  //   } else {
  //     user = prompt("Please enter your name:", "");
  //     if (user != "" && user != null) {
  //       setCookie("username", user, 365);
  //     }
  //   }
  // }

  export {setCookie, getCookie}