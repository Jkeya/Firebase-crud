var firebaseConfig = {
    apiKey: "AIzaSyDP-SDIK5ATkkMEEL6_-bJpsXAfqYnm7hU",
    authDomain: "crud-3c5e1.firebaseapp.com",
    databaseURL: "https://crud-3c5e1.firebaseio.com",
    projectId: "crud-3c5e1",
    storageBucket: "crud-3c5e1.appspot.com",
    messagingSenderId: "1053589622718",
    appId: "1:1053589622718:web:e6dd1cf145bb8dd17d33ef",
    measurementId: "G-E8Z5B8ZQFL"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);   
}
function Registration(which) {       
    if (which == "ac_land") {        
        const rootRef = firebase.database().ref("resources/");        
        rootRef.push({
            plot_no: localStorage.getItem("plot_no"),
            city_jorip_no: localStorage.getItem("jorip_no"),
            mouja_no: localStorage.getItem("mouja_no"),
            owner_name: "",
            owner_nid: "",            
            email: "",
            prev_owner_name: "",
            prev_owner_nid: "",
            prev_owner_email: "",
            reg_date: "",
            mutation_no: "",
            mutation_date: ""
        });    
        // alert("hmm");
    } else {
       
    }
    localStorage.setItem("registration", 0);
    localStorage.setItem("which", "");
}
// function searchByPlot(Plot) {
    
// }
if (localStorage.getItem("registration") == 1) {
    Registration(localStorage.getItem("which"));
}  
// if (localStorage.getItem("check_plot") == 1) {
//     searchByPlot(localStorage.getItem("check_plot_no"))    
// }