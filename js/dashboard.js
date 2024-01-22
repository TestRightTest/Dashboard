let jsonData =[];
function updateDataForm(data) {
    // const jsonData = [
    //     {
    //         "company": "ABC Dairy",
    //         "mcc_bmc": "123",
    //         "testing_location": "Location A",
    //         "route": "Route 1",
    //         "mpp": "MPP1",
    //         "farmer": "John Doe",
    //         "sample_details": "Details 1",
    //         "milk_type": "Type A",
    //         "chemist": "Chemist A",
    //         "remarks": "Good",
    //         "data": "Some Data",
    //         "start_time": "8:00 AM",
    //         "end_time": "5:00 PM",
    //         "decolor_time": "2 hours",
    //         "avg_temp": "25°C",
    //         "min_temp": "20°C",
    //         "max_temp": "30°C"
    //     },
    //     {
    //         "company": "XYZ Farms",
    //         "mcc_bmc": "456",
    //         "testing_location": "Location B",
    //         "route": "Route 2",
    //         "mpp": "MPP2",
    //         "farmer": "Jane Doe",
    //         "sample_details": "Details 2",
    //         "milk_type": "Type B",
    //         "chemist": "Chemist B",
    //         "remarks": "Excellent",
    //         "data": "More Data",
    //         "start_time": "9:00 AM",
    //         "end_time": "6:00 PM",
    //         "decolor_time": "3 hours",
    //         "avg_temp": "28°C",
    //         "min_temp": "22°C",
    //         "max_temp": "32°C"
    //     },
    //     // Add more rows
    //     {
    //         // Row 3
    //         "company": "MNO Milk Co.",
    //         "mcc_bmc": "789",
    //         "testing_location": "Location C",
    //         "route": "Route 3",
    //         "mpp": "MPP3",
    //         "farmer": "Alice",
    //         "sample_details": "Details 3",
    //         "milk_type": "Type C",
    //         "chemist": "Chemist C",
    //         "remarks": "Satisfactory",
    //         "data": "Some More Data",
    //         "start_time": "10:00 AM",
    //         "end_time": "7:00 PM",
    //         "decolor_time": "4 hours",
    //         "avg_temp": "30°C",
    //         "min_temp": "25°C",
    //         "max_temp": "35°C"
    //     },
    //     {
    //         // Row 4
    //         "company": "PQR Farms",
    //         "mcc_bmc": "101",
    //         "testing_location": "Location D",
    //         "route": "Route 4",
    //         "mpp": "MPP4",
    //         "farmer": "Bob",
    //         "sample_details": "Details 4",
    //         "milk_type": "Type D",
    //         "chemist": "Chemist D",
    //         "remarks": "Average",
    //         "data": "Even More Data",
    //         "start_time": "11:00 AM",
    //         "end_time": "8:00 PM",
    //         "decolor_time": "5 hours",
    //         "avg_temp": "22°C",
    //         "min_temp": "18°C",
    //         "max_temp": "26°C"
    //     },
    //     {
    //         // Row 5
    //         "company": "LMN Dairy",
    //         "mcc_bmc": "202",
    //         "testing_location": "Location E",
    //         "route": "Route 5",
    //         "mpp": "MPP5",
    //         "farmer": "Charlie",
    //         "sample_details": "Details 5",
    //         "milk_type": "Type E",
    //         "chemist": "Chemist E",
    //         "remarks": "Poor",
    //         "data": "Data Again",
    //         "start_time": "12:00 PM",
    //         "end_time": "9:00 PM",
    //         "decolor_time": "6 hours",
    //         "avg_temp": "26°C",
    //         "min_temp": "21°C",
    //         "max_temp": "28°C"
    //     },
    //     {
    //         // Row 6
    //         "company": "JKL Milk Co.",
    //         "mcc_bmc": "303",
    //         "testing_location": "Location F",
    //         "route": "Route 6",
    //         "mpp": "MPP6",
    //         "farmer": "David",
    //         "sample_details": "Details 6",
    //         "milk_type": "Type F",
    //         "chemist": "Chemist F",
    //         "remarks": "Very Good",
    //         "data": "More and More Data",
    //         "start_time": "1:00 PM",
    //         "end_time": "10:00 PM",
    //         "decolor_time": "7 hours",
    //         "avg_temp": "29°C",
    //         "min_temp": "24°C",
    //         "max_temp": "31°C"
    //     },
    //     {
    //         // Row 7
    //         "company": "XYZ Farms",
    //         "mcc_bmc": "404",
    //         "testing_location": "Location G",
    //         "route": "Route 7",
    //         "mpp": "MPP7",
    //         "farmer": "Emma",
    //         "sample_details": "Details 7",
    //         "milk_type": "Type G",
    //         "chemist": "Chemist G",
    //         "remarks": "Excellent",
    //         "data": "Super Data",
    //         "start_time": "2:00 PM",
    //         "end_time": "11:00 PM",
    //         "decolor_time": "8 hours",
    //         "avg_temp": "27°C",
    //         "min_temp": "23°C",
    //         "max_temp": "29°C"
    //     },
    //     {
    //         // Row 8
    //         "company": "ABC Dairy",
    //         "mcc_bmc": "505",
    //         "testing_location": "Location H",
    //         "route": "Route 8",
    //         "mpp": "MPP8",
    //         "farmer": "Frank",
    //         "sample_details": "Details 8",
    //         "milk_type": "Type H",
    //         "chemist": "Chemist H",
    //         "remarks": "Good",
    //         "data": "Ultra Data",
    //         "start_time": "3:00 PM",
    //         "end_time": "12:00 AM",
    //         "decolor_time": "9 hours",
    //         "avg_temp": "24°C",
    //         "min_temp": "19°C",
    //         "max_temp": "25°C"
    //     },
    //     {
    //         // Row 9
    //         "company": "MNO Milk Co.",
    //         "mcc_bmc": "606",
    //         "testing_location": "Location I",
    //         "route": "Route 9",
    //         "mpp": "MPP9",
    //         "farmer": "Grace",
    //         "sample_details": "Details 9",
    //         "milk_type": "Type I",
    //         "chemist": "Chemist I",
    //         "remarks": "Satisfactory",
    //         "data": "Mega Data",
    //         "start_time": "4:00 PM",
    //         "end_time": "1:00 AM",
    //         "decolor_time": "10 hours",
    //         "avg_temp": "31°C",
    //         "min_temp": "26°C",
    //         "max_temp": "32°C"
    //     },
    //     {
    //         // Row 10
    //         "company": "PQR Farms",
    //         "mcc_bmc": "707",
    //         "testing_location": "Location J",
    //         "route": "Route 10",
    //         "mpp": "MPP10",
    //         "farmer": "Helen",
    //         "sample_details": "Details 10",
    //         "milk_type": "Type J",
    //         "chemist": "Chemist J",
    //         "remarks": "Average",
    //         "data": "Hyper Data",
    //         "start_time": "5:00 PM",
    //         "end_time": "2:00 AM",
    //         "decolor_time": "11 hours",
    //         "avg_temp": "28°C",
    //         "min_temp": "22°C",
    //         "max_temp": "30°C"
    //     },
    //     // Add more rows as needed
    // ];

    // Populate table with data
    // const tableBody = document.getElementById("tableBody");
    // jsonData.forEach(rowData => {
    //     const row = document.createElement("tr");
    //     row.classList.add("w-full");
    //     Object.values(rowData).forEach(value => {
    //         const cell = document.createElement("td");
    //         cell.textContent = value;
    //         row.appendChild(cell);
    //     });
    //     tableBody.appendChild(row);
    // });

    var channelsArray = [];
    // Clear the existing array
    console.log("Data change")

    
    // for (var rootnode in data) {
    //     if (data.hasOwnProperty(rootnode) && rootnode!=="progress" ) {
    //         var root =data[rootnode]
    //         for (var channelNumber in root) {
    //             if(root.hasOwnProperty(channelNumber) ){
    //                 const numbervalue = (channelNumber.match(/Channel Number (\d+)/) || [])[1] || null;
    //                 root[channelNumber].channelName="Channel " + numbervalue
    //                 channelsArray.push(root[channelNumber]);
    //             }
    //         }
    //     }
    // }
    
    for (var channelNumber in data) {
        if (data.hasOwnProperty(channelNumber)) {
            const numbervalue = (channelNumber.match(/Channel Number (\d+)/) || [])[1] || null;
            data[channelNumber].channelName = "Channel " + numbervalue;
            channelsArray.push(data[channelNumber]);
        }
    }

        jsonData = [];
        channelsArray.forEach(rowData => {
            let row = {};
            
        
            row.company = rowData.ChannelNo || '-';
            row.sample_details = rowData.Name || '-';

            row.start_time = rowData.startTime || '-';
            row.end_time = rowData.stopTime || '-';
            row.decolor_time = rowData.totalTime || '-';
            jsonData.push(row);

        });
        
    
        const tableBody = document.getElementById("tableBody");
        tableBody.innerHTML = "";
        jsonData.forEach(rowData => {


            const row = document.createElement("tr");
            row.classList.add("w-full");
            Object.values(rowData).forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
   
}

function toggleSideNavWithAnimation() {
    const sideNav = document.getElementById('sideNavContainer');

    // Toggle the 'hidden' class
    sideNav.classList.toggle('hidden');
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in
        var userId = user.uid;
        var email = user.email;

        // Perform actions based on the user information
        console.log('User ID:', userId);
        console.log('Email:', email);

        setDetails(userId, email);
    } else {

    }
});


function setDetails() {
    
    // Get the page name (title) and print it
    var pageName = document.title;
    console.log('Page name: ' + pageName);

    if (pageName === "Dashboard") {
        getCurrentUserId();
    }
}



function getCurrentUserId() {
    var auth = firebase.auth();
    const user = auth.currentUser;

    if (user) {
        const uid = user.uid;
        
        fetchDataFromDatabase(uid);
    } else {
        console.log("No user is currently signed in.");
        // Redirect to the login page or handle the case when no user is signed in
    }
}

var db = firebase.database();
const dataRef = db.ref('users/');
dataRef.on("value", snapshot => {
    getCurrentUserId();
    console.log("Data chaning" )
})


function fetchDataFromDatabase(uid) {
    var db = firebase.database();
    const dataRef = db.ref('users/' + uid);

    dataRef.once("value")
        .then(snapshot => {
            const data = snapshot.val();
            processFetchedData(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function processFetchedData(data) {
    
    console.log("Processed data:", data);
    

    var companyNameElement = document.getElementById('companyName');
    companyNameElement.textContent = data.companyName;
    updateDataForm(data.SampleDetails);

}

function signOut() {
    firebase.auth().signOut().then(() => {

        redirectToLogin();
    }).catch((error) => {
        console.error("Sign out error:", error);
    });
}

function redirectToLogin() {
    window.location.replace("login.html"); // Replace with your login page URL
}



function exportToExcel() {

    const ws = XLSX.utils.json_to_sheet(jsonData);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const wbData = XLSX.write(wb, { bookType: 'xlsx', type: 'base64' });

    const blob = new Blob([s2ab(atob(wbData))], { type: 'application/octet-stream' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'exported_data.xlsx';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}

function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

function downloadData(){
    exportToExcel(jsonData)
}