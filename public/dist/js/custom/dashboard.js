'use strict';
$.fn.isInViewport = function () {
    if (this.length == 0) {
        return false;
    }
    return this[0].getBoundingClientRect().top < $(window).height();
};

class AjaxRequest {
    // Fetch data from the url
    static async call(url, params = {}) {
        let options = Object.assign(
            {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            },
            params
        );

        let data = await fetch(url, options)
            .then((response) => response.json())
            .then((data) => data.response);
        return data;
    }
}

class Dashboard {
    element;
    fetched = false;
    links = [];
    params = {};

    static getObject() {
        // Returns the class object
        if (this.myself == null) {
            // If object is not already available then create a new one
            this.myself = new this();
        }
        return this.myself;
    }

    async update(url) {
        this.fetched = true;
        let data = await AjaxRequest.call(url, this.params);
        // Make api call to fetch data
        if (this.getStatus(data)) {
            // render 5 row in the table
            this.renderData(this.element, data);
        } else {
            throw new Error(this.getErrMessage(data));
        }
    }

    dataAlreadyFetched(url) {
        if (dashboardAjaxData[url] == undefined) {
            return false;
        }
        return true;
    }

    getFromFetchedData(url) {
        return dashboardAjaxData[url];
    }

    sliceData(data, count = 5) {
        return data.slice(0, count);
    }

    // Hide place holder and show the data
    switchView() {
        this.element.find(".placeholder-data").addClass("d-none");
        this.element.find(".original-data").removeClass("d-none");
    }

    sync(url) {
        if (!this.hasObject()) {
            return;
        }
        if (!this.fetched && this.element.isInViewport() && url) {
            this.update(url);
        }
    }

    hasObject() {
        if (this.element == undefined || this.element.length < 1) {
            return false;
        }
        return true;
    }

    renderData() {
        throw new Error("Must implement renderData() method.");
    }

    getStatus(data) {
        if (data.status && data.status.code && data.status.code == 200) {
            return true;
        }
        return false;
    }

    getErrMessage(data) {
        return data.status.message;
    }

    formatString(str, len = 20, ending = "...") {
        if (str.length > len - ending.length) {
            return str.substr(0, len) + ending;
        }
        return str;
    }

    formatUrl(url, param, key = null) {
        if (!key) {
            return url.replace("__id__", param);
        }
        return url.replace(key, param);
    }

    addLink(url, key) {
        this.links[key] = url;
        return this;
    }

    getLink(type, param, key = null) {
        if (this.links[type] == undefined) {
            return "#";
        }

        if (!key) {
            return this.links[type].replace("__id__", param);
        }
        return this.links[type].replace(key, param);
    }

    setParams(params) {
        this.params = params;
        return this;
    }
    resetFetch() {
        this.fetched = false;
        return this;
    }
}

class latestRegistration extends Dashboard {
    static myself = null;
    constructor() {
        super();
        super.element = $("#latest-registration");
    }

    // render table row from the data
    renderData(parent, data) {
        data = super.sliceData(data.records);
        let tr = "";
        let counter = 1;
        data.forEach((user) => {
            tr += '<tr class="unread">';
            tr +=
                '<td><h6 class="mb-0">' +
                user.name.substr(0, 20) +
                "</h6></td>";
            tr +=
                '<td><h6 class="mb-0">' +
                user.status +
                "</h6></td>";
            tr +=
                '<td class="text-center"> <h6 class="text-muted mb-0">' +
                user.created_at +
                "</h6></td>";
            tr +=
                '<td class="text-center"> <a target="_blank" href="' +
                user.view +
                '" class="label view-color-btn text-2c f-12">' +
                jsLang("View") +
                '</a>';
            tr += "</tr>";
        });

        if (data.length == 0) {
            parent.find(".original-data").siblings('thead').remove();
            tr = `<tr class="border-0"><td colspan="2" class="border-0">${jsLang('No data found.')}</td></tr>`
        }

        parent.find(".original-data").append(tr);
        super.switchView();
    }
}

class latestTransaction extends Dashboard {
    static myself = null;
    constructor() {
        super();
        super.element = $("#latest-transaction");
    }

    // render table row from the data
    renderData(parent, data) {
        data = super.sliceData(data.records);
        let tr = "";
        let counter = 1;
        data.forEach((user) => {
            var userName = user.user_name == null ? jsLang('Unknown') : user.user_name.substr(0, 20);
 
            tr += '<tr class="unread">';
            tr +=
                '<td><h6 class="mb-0 pt-1">' +
                userName +
                "</h6></td>";
            tr +=
                '<td><h6 class="mb-0">' +
                user.package_name +
                "</h6></td>";
            tr +=
                '<td><h6 class="mb-0">' +
                user.price +
                "</h6></td>";
            tr +=
                '<td><h6 class="mb-0">' +
                user.status +
                "</h6></td>";
            tr +=
                '<td class="text-center"> <h6 class="text-muted mb-0">' +
                user.date +
                "</h6></td>";

            tr += "</tr>";
        });

        if (data.length == 0) {
            parent.find(".original-data").siblings('thead').remove();
            tr = `<tr class="border-0"><td colspan="2" class="border-0">${jsLang('No data found.')}</td></tr>`
        }

        parent.find(".original-data").append(tr);
        super.switchView();
    }
}

var ctx = $('#chart-area-2');
ctx.height(335);
class salesOfTheMonth extends Dashboard {
    static myself = null;
    constructor() {
        super();
        super.element = $("#sale-of-this-month");
    }

    renderData(parent, data) {
        this.lineChart(parent, data);
        super.switchView();
    }

    lineChart = (parent, data) => {
        parent.find(".placeholder").addClass("d-none");
        let chartCanvas = parent.find("#chart-area-2");
        chartCanvas.removeClass("d-none");
        this.updateChart(chartCanvas[0], data.records);
    };

    dayMonth(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        const year = date.toLocaleString(localeString, { year: 'numeric' });

        if (monthNumber <= 0) {
            monthNumber += 12;
        }

        return date.toLocaleString(localeString, {
        month: 'short',
        }) + ' ' + year;
    }

    monthToColor(month) {
        var color;
        if (month % 3 == 0) {
            color = "rgba(252, 202, 25, 1)"
        } else if (month % 3 == 1) {
            color = "rgba(227, 147, 255, 1)"
        } else {
            color = "rgba(0, 223, 255, 1)"
        }

        return color
    }

    updateChart = (chartCanvas, data) => {
        var bar = chartCanvas.getContext("2d");
        var dataChart = [];

        for (const key in data.values) {
            var theme_color = bar.createLinearGradient(0, 0, 500, 0);
            theme_color.addColorStop(1, this.monthToColor(key));
            let obj = {
                label: this.dayMonth(key),
                data: data.values[key],
                borderWidth: 4,
                borderColor: theme_color,
                backgroundColor: theme_color,
                hoverborderColor: theme_color,
                hoverBackgroundColor: theme_color,
                tension: 0.1,
            }
            dataChart.push(obj);
        }

        var data1 = {
            labels: data.dates,
            datasets: dataChart
        };
        var myBarChart = new Chart(bar, {
            type: "line",
            data: data1,
            responsive: true,
            fill: true,
            options: {
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: jsLang('Sales'),
                        },
                    },
                },
            },
        });
    };
}

$(document).ready(function () {

    $('.dashboard-setting').on('click', function () {
        var $toggleIcon = $(this).find('.toggle-icon');
        var $collapseElement = $('#dashboardSetting');

        // Wait for the Bootstrap collapse animation to complete
        $collapseElement.on('shown.bs.collapse', function () {
            $toggleIcon.removeClass('icon-chevron-down').addClass('icon-chevron-up');
        });

        $collapseElement.on('hidden.bs.collapse', function () {
            $toggleIcon.removeClass('icon-chevron-up').addClass('icon-chevron-down');
        });
    });
    const checkStatus = () => {
        salesOfTheMonth.getObject().sync(saleOfThisMonth);
        latestTransaction.getObject().sync(latestTransactionUrl);
        if (typeof latestRegistrationUrl !== 'undefined') {
            latestRegistration.getObject()
            .addLink(latestRegistrationUrl, "edit")
            .sync(latestRegistrationUrl);
        }
    };

    $(document).on('scroll', () => {
        checkStatus();
    });

    function switchReload() {
        $(".placeholder-data-sta").removeClass("d-none");
        $(".original-data-sta").addClass("d-none");
        $(".original-data-sta").empty();
    }

    checkStatus();
});

$(function() {
    // Get default data from blade
    var defaultElement = {};
    $('.grid-stack-item').each((k, v) => {
        defaultElement[$(v).attr('data-gs-id')] = {
            x: $(v).attr('data-gs-x'),
            y: $(v).attr('data-gs-y'),
            width: $(v).attr('data-gs-width'),
            height: $(v).attr('data-gs-height'),
            html: $(v).html()
        }
    })
    
    var allOptions = {};
    
    $('.dashboard-option-checkbox').each((k, v) => {
        allOptions[$(v).attr('id')] = $(v).is(':checked');
    })
    
    allOptions = {
        ...allOptions,
        ...dashboardCacheWidgetOption
    };
    
    var gridElement =  {
        ...defaultElement,
        ...dashboardCacheWidgetElement
    }
    
    // Set element position
    $('.grid-stack-item').each((k, v) => {
        var id = $(v).attr('data-gs-id');
        $(v).attr('data-gs-x', gridElement[id].x)
        $(v).attr('data-gs-y', gridElement[id].y)
        $(v).attr('data-gs-width', gridElement[id].width)
        $(v).attr('data-gs-height', gridElement[id].height)
    })
    
    var grid = $('.grid-stack').gridstack(widgetOptions).data('gridstack');
    
    function removeElement(id) {
        defaultElement[id]['html'] = $(`.grid-stack-item[data-gs-id=${id}]`).html();
        grid.removeWidget($(`.grid-stack-item[data-gs-id=${id}]`));
    }
    
    function sendAjax(url, data) {
        $.ajax({
            url: SITE_URL + url,
            type: 'POST',
            data: {
                _token: token,
                data: data
            },
            success: function (data) {}
        });
    }
    
    // Set change data in the cache
    var dashboardGriddable = {};
    $('.grid-stack').on('change', function (event, items) {
        $(items).each((key, value) => {
           dashboardGriddable[value.id] = {
                x: value.x,
                y: value.y,
                width: value.width,
                height: value.height
            }
        })
        
        sendAjax('/dashboard/widget', JSON.stringify({...dashboardCacheWidgetElement, ...dashboardGriddable}))
    })
    
    $('.dashboard-option-checkbox').on('change', function() {
        var id = $(this).attr('id');
        if ($(this).is(':checked')) {
            grid.addWidget(`<div class='grid-stack-item' data-gs-id='${id}'>${defaultElement[id].html}</div>`, defaultElement[id].x, defaultElement[id].y, defaultElement[id].width, defaultElement[id].height);
        } else {
            removeElement(id);
        }
        
        $('.grid-stack').gridstack(widgetOptions).data('gridstack');
        
        allOptions[$(this).attr('id')] = $(this).is(':checked')
        
        sendAjax('/dashboard/widget/option', JSON.stringify(allOptions))
    })
    
    $('.dashboard-option-checkbox').each((k, v) => {
        var id = $(v).attr('id');
        $(v).prop('checked', allOptions[id]);
        if (!$(v).is(':checked')) {
            removeElement(id);
        }
    })
});
