

lateNotices = [
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    },
    {
        county: "Dekalb County",
        muni: "Test",
        dueDate: "July 31, 2019",
        daysToFirstNotice: 30,
        daysToLien: 60,
        details: "Wambugu Mercy"
    }
]

// create a function to map the array lateNoticers to the DOM element id latetable
function lateTable(lateNotices) { 
    var table = document.getElementById("latetable");
    table.innerHTML = lateNotices.map(function (lateNotices) {
        return `
                            <tr>
                                <td>${lateNotices.county}/${lateNotices.muni}</td>
                                <td>Due: ${lateNotices.dueDate}</td>
                                <td>${lateNotices.details}</td>
                                <td>
                                <a href="/reports.html" ><button type="button" class="btn btn-sm btn-primary">View</button></a>
                                </td>
                              </tr>
        `
    }).join("");
}

// call the function lateTable
lateTable(lateNotices);






