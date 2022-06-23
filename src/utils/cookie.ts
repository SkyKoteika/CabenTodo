

const setCookie = (cname: string, cvalue: any, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = `${cname}=${cvalue};${expires};path=/;secure;samesite`;
  }

  const getCookie = (cname: string) : string | null => {
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
    return null;
  }

  const checkCookie = (cookieName: string) => {
    let token = getCookie(cookieName);
    if (token !== null) {
      return token;
    } else {
      return undefined;
    }
  }

  const deleteCookie = (cookieName: string) => {
    setCookie(cookieName, "", -1);
  }

  export {setCookie, getCookie , checkCookie, deleteCookie}