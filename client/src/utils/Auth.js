const checkLogin = async()=>{
    const user =JSON.parse(localStorage.getItem("user"))|| null;

    if(!user){
        alert('please Login First');
        window.location.href= "/Login";
    }
}

export default checkLogin