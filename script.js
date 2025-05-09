document.addEventListener('DOMContentLoaded', () => {
    const restrictArray = ["51.x.x.x", "154.x.x.x"]; 
    const url = "https://api.ipify.org?format=json";

    async function getIp() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(Response status: ${response.status});
        }

        const json = await response.json();
        if(json){
          restrictArray.forEach((data)=>{
            if(data === json.ip){
              document.body.innerHTML = '<div> <pre><b>Access Denied</b><br>Your device has been blocked and will no longer be served by this server. If you believe this is an error, please <a href="#">contact us</a>.</pre> </div>'
            }
          })
        }

      } catch (error) {
        console.error(error.message);
      }
    }

    getIp();
  });
