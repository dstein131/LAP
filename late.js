

lateNotices = [
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy",
        noticed: true
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "John Smith",
        noticed: false
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Ally Johnson",
        noticed: true
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Jimmy Smith",
        noticed: true
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Allen Iverson",
        noticed: false
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Steve Branch",
        noticed: true
    }
]

// create a function to map the array lateNoticers to the DOM element id latetable
function lateTable(lateNotices) { 
    var table = document.getElementById("latetable");
    table.innerHTML = lateNotices.map(function (lateNotices) {
      if (lateNotices.noticed === true) {  
        return `
                            <tr>
                                <td>${lateNotices.county}/${lateNotices.muni}<span class="badge bg-success ms-1">Noticed</span>
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
                <td>${lateNotices.county}/${lateNotices.muni}<span class="badge bg-danger ms-1">Unnoticed</span></td>
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
`
        }
    }).join("");
}


// call the function lateTable
lateTable(lateNotices);






