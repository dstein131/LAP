

lateNotices = [
    {
        county: "Dekalb County",
        muni: "Test Municipality",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy",
        interestedparty: true
    },
    {
        county: "Dekalb County",
        muni: "Test Municipality",
        dueDate: "July 31, 2020",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "John Smith",
        interestedparty: false
    },
    {
        county: "Dekalb County",
        muni: "Test Municipality",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Ally Johnson",
        interestedparty: true
    },
    {
        county: "Dekalb County",
        muni: "Test Municipality",
        dueDate: "July 31, 2020",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Jimmy Smith",
        interestedparty: true
    },
    {
        county: "Dekalb County",
        muni: "Test Municipality",
        dueDate: "July 31, 2020",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Allen Iverson",
        interestedparty: false
    },
    {
        county: "Dekalb County",
        muni: "Test Municipality",
        dueDate: "July 31, 2021",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Steve Branch",
        interestedparty: true
    }
]

// create a function to map the array lateNoticers to the DOM element id latetable
function lateTable(lateNotices) { 
    
    var table = document.getElementById("latetable");
    table.innerHTML = lateNotices.map(function (lateNotices) {
      if (lateNotices.interestedparty === false) {  
        return `
                            <tr>
                                <td>${lateNotices.county}/${lateNotices.muni}<span class="badge bg-secondary ms-1">Delinquent</span>
                                <td>Due: ${lateNotices.dueDate}</td>
                                <td>${lateNotices.details}</td>
                                <td>
                               
<div class="btn-group">
  <button type="button" class="btn btn-sm btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Notices
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Notice ${lateNotices.details}</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Notice All Unnoticed</a></li>
  </ul>
</div>
                                <a href="/reports.html" ><button type="button" class="btn btn-sm btn-primary">View</button></a>
                                </td>
                              </tr>
        `} else {
            return `
            <tr>
                <td>${lateNotices.county}/${lateNotices.muni}<span class="badge ms-1" style="background-color: #BF4D34">Interested Party</span></td>
                <td>Due: ${lateNotices.dueDate}</td>
                <td>${lateNotices.details}</td>
                <td>
               
<div class="btn-group">
<button type="button" class="btn btn-sm btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Notices
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Notice ${lateNotices.details}</a></li>
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="#">Notice All Interested Parties</a></li>
</ul>
</div>
                <a href="/reports.html" ><button type="button" class="btn btn-sm btn-primary">View</button></a>
                </td>
              </tr>
`
        }
    }).join("");
}

// add the number of late notices where noticed is false to the DOM element id noticenumber
function noticeNumber(lateNotices) {
    var noticeNumber = document.getElementById("noticenumber");
    noticeNumber.innerHTML = lateNotices.filter(function (lateNotices) {
        return lateNotices.interestedparty === false;
    }).length;
}

function ipNumber(lateNotices) {
    var noticeNumber = document.getElementById("ipnumber");
    noticeNumber.innerHTML = lateNotices.filter(function (lateNotices) {
        return lateNotices.interestedparty === true;
    }).length;
}

// create a function that sorts the array by the due date then details into 
function sortDueDate(lateNotices) {
    return lateNotices.sort(function (a, b) {
        if (a.dueDate < b.dueDate) {
            return -1;
        } else if (a.dueDate > b.dueDate) {
            return 1;
        } else {
            if (a.details < b.details) {
                return -1;
            } else if (a.details > b.details) {
                return 1;
            } else {
                return 0;
            }
        }
    });
}





// call the function lateTable
// lateTable(sortDueDate(lateNotices));

// noticeNumber(lateNotices);

// ipNumber(lateNotices);


// take the lateNotices array and group it by due date
var lateNoticesByDueDate = lateNotices.reduce(function (r, a) {
    r[a.dueDate] = r[a.dueDate] || [];
    r[a.dueDate].push(a);
    return r;
}
    , Object.create(null));

console.log(lateNoticesByDueDate);



// create a function that will create a new table for each due date and populate it with the lateNoticesByDueDate object and map to the DOM element secondtable
function secondTable(lateNoticesByDueDate) {
    var table = document.getElementById("secondtable");
    table.innerHTML = Object.keys(lateNoticesByDueDate).map(function (key) {
        return `
        <div class="card mb-2">
        <div class="card-header d-flex align-items-center justify-content-between">

         
          <div><b>${key}</b></div>
          <div>${lateNoticesByDueDate[key][0].muni}</div>
          <div>${lateNoticesByDueDate[key][0].county}</div>
          
            <button type="button" class="btn btn-sm btn-success">Send Group Notices</button>
        </div>
        <div class="card-body">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                       
                        <th scope="col" style="width:33%">Details</th>
                        <th scope="col" style="width:33%">Actions</th>
                    </tr>
                </thead>
                <tbody>
                ${lateNoticesByDueDate[key].map(function (lateNoticesByDueDate) {
            if (lateNoticesByDueDate.interestedparty === false) {
                return `
                <tr>
                  
                    <td>${lateNoticesByDueDate.details}</td>
                    <td>

<div class="btn-group">
<button type="button" class="btn btn-sm btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Notices
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Notice ${lateNoticesByDueDate.details}</a></li>
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="#">Notice All Due on ${key}</a></li>
</ul>
</div>

<div class="btn-group">
<button type="button" class="btn btn-sm btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Verifications
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Verify ${lateNoticesByDueDate.details} Notice</a></li>
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="#">Verify all ${key} Notices</a></li>
</ul>
</div>
                    <a href="/reports.html" ><button type="button" class="btn btn-sm btn-primary">View</button></a>
                    </td>
                    </tr>
            `} else {
                return `
                <tr>
                    
                    <td>${lateNoticesByDueDate.details}</td>
                    <td>

<div class="btn-group">
<button type="button" class="btn btn-sm btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Notices
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Notice ${lateNoticesByDueDate.details}</a></li>
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="#">Notice All Due on ${key}</a></li>
</ul>
</div>

<div class="btn-group">
<button type="button" class="btn btn-sm btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Verifications
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Verify ${lateNoticesByDueDate.details} Notice</a></li>
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="#">Verify all ${key} Notices</a></li>
</ul>
</div>
                    <a href="/reports.html" ><button type="button" class="btn btn-sm btn-primary">View</button></a>
                    </td>
                    </tr>
            `
            }
        }).join("")}
                </tbody>
            </table>
        </div>
    </div>
        `
    }).join("");
}

secondTable(lateNoticesByDueDate);













                                
