

lateNotices = [
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy",
        interestedparty: true
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "John Smith",
        interestedparty: false
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Ally Johnson",
        interestedparty: true
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Jimmy Smith",
        interestedparty: true
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Allen Iverson",
        interestedparty: false
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
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



// call the function lateTable
lateTable(lateNotices);

noticeNumber(lateNotices);

ipNumber(lateNotices);






