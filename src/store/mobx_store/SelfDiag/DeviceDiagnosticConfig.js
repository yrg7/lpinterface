import { makeAutoObservable, runInAction } from "mobx"
import { getFromLP } from "../../../services/ax_xml"

const DEVICEDIAGNOSTICCONFIG_PATH = '/apkdk-host/Application_data/gui/SelfDiag/DeviceDiagnosticConfig.xml'

class DeviceDiagnosticConfigStore {

    Host=''
    CtrlAndSysGroupBox = {
        title: '',
        indicatorsArray: []
    }
    ControllersGeneralGroupBox = {
        title: '',
        indicatorsArray: []
    }
    ExtControllersGeneralGroupBox = {
        title: '',
        indicatorsArray: []
    }
    ExtSystemsGeneralGroupBox = {
        title: '',
        indicatorsArray: []
    }

    isLoading = false
    isFirst = false
    constructor() {
        makeAutoObservable(this)
    }
    getFromLP_Action = async (commonURL) => {
        try {
            this.isLoading = true
            const res = await getFromLP(commonURL + DEVICEDIAGNOSTICCONFIG_PATH)
            runInAction(() => {

                // this.mainObj = { ...fXmlParse1(res) }
                //this.mainObj=fXmlParse1(res)
                // console.log('getFromLP_Action')

                // console.log(res)
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(res, 'text/xml');
                let xmlHost=xmlDoc.getElementsByTagName("Host");
                this.Host = xmlHost[0].getAttribute('name') 

                // let mainObj = {
                //   title: '',
                //   tabsArray: []
                // }
                //this.mainObj.title = xmlHost[0].getAttribute("name")
                let xmlContainers = xmlDoc.getElementsByTagName("Container");

                for (let index = 0; index < xmlContainers.length; index++) {
                    // console.log(xmlTabs[index])

                    let name = xmlContainers[index].getAttribute('name')

                    let container
                    if (name === 'CtrlAndSysGroupBox') {
                        container = this.CtrlAndSysGroupBox
                    } else if (name === 'ControllersGeneralGroupBox') {
                        container = this.ControllersGeneralGroupBox
                    } else if (name === 'ExtControllersGeneralGroupBox') {
                        container = this.ExtControllersGeneralGroupBox
                    } else {
                        container = this.ExtSystemsGeneralGroupBox
                    }
                    container.name=name
                    container.title=xmlContainers[index].getAttribute('title')
                    let xmlIndicators = xmlContainers[index].getElementsByTagName("indicator");
                    for (let i = 0; i < xmlIndicators.length; i++) {

                        let indicator = {
                            id: xmlIndicators[i].getAttribute('id'),
                            type: xmlIndicators[i].getAttribute('type'),
                            title: xmlIndicators[i].getAttribute('title'),
                            linkTo: xmlIndicators[i].getAttribute('linkTo'),
                            dobleClickLink: xmlIndicators[i].getAttribute('dobleClickLink'),
                            image: xmlIndicators[i].getAttribute('image'),
                            Row: xmlIndicators[i].getAttribute('Row'),
                            Column: xmlIndicators[i].getAttribute('Column'),
                            sensArray: []

                        }
                        let xmlSensors = xmlIndicators[i].getElementsByTagName("sensor");
                        for (let j = 0; j < xmlSensors.length; j++) {
                            let sensor ={
                                type: xmlSensors[j].getAttribute("type"),
                                dev: xmlSensors[j].getAttribute("dev"),
                                no: xmlSensors[j].getAttribute("no")
                            }
                            indicator.sensArray.push(sensor)
                        }
                        container.indicatorsArray.push(indicator)
                    }



                

                }


                // this.store = res
                this.isLoading = false
                this.isFirst = true

            })

        } catch (error) {
            console.log('error', error)
            this.isLoading = false

        }

    }
}
export default new DeviceDiagnosticConfigStore ()
