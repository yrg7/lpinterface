
export const setActive = (uArray, setArray, id, val) => {
    setArray(uArray.map(obj => {
        if (obj.id === id) {
            return { ...obj, active: val }
        } else {
            return obj
        }
    }))
}
export const getUrlParam = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    } else {
        return null;
    }
}

export const standartXmlParse = (res) => {

    let mainObj = {
        title: '',
        tabsArray: []
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(res, 'text/xml');
    const xmlParentContainer = xmlDoc.getElementsByTagName("ParentContainer");


    mainObj.title = xmlParentContainer[0].getAttribute("title")
    let xmlTabs = xmlDoc.getElementsByTagName("Tab");

    for (let index = 0; index < xmlTabs.length; index++) {
        // console.log(xmlTabs[index])

        let tab = {
            title: xmlTabs[index].getAttribute("title"),
            name: xmlTabs[index].getAttribute("name"),
            indicators: [],
            imgLink: ''
        }
        let xmlIndicators = xmlTabs[index].getElementsByTagName("indicator");
        for (let i = 0; i < xmlIndicators.length; i++) {
            let xmlSensors = xmlIndicators[i].getElementsByTagName("sensor");
            let indicator = {
                title: xmlIndicators[i].getAttribute("title"),
                id: xmlIndicators[i].getAttribute("id"),
                type: xmlIndicators[i].getAttribute("type"),
                row: xmlIndicators[i].getAttribute("Row"),
                column: xmlIndicators[i].getAttribute("Column"),

                sensType: xmlSensors[0].getAttribute("type"),
                dev: xmlSensors[0].getAttribute("dev"),
                no: xmlSensors[0].getAttribute("no"),
            }



            tab.indicators.push(indicator)

        }

        mainObj.tabsArray.push(tab)
    }
    return mainObj
}
