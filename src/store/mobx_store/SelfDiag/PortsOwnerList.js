import { makeAutoObservable, runInAction } from "mobx"
import { getFromLP } from "../../../services/ax_xml"

const PORTSOWNERLIST_PATH = '/apkdk-host/Application_data/gui/SelfDiag/PortsOwnerList.xml'

class PortsOwnerListStore {
    Ports=[]
    isLoading = false
    constructor() {
        makeAutoObservable(this)
    }
    getFromLP_Action = async (commonURL) => {
        try {
            this.isLoading = true
            const res = await getFromLP(commonURL + PORTSOWNERLIST_PATH)
            runInAction(() => {
                console.log(res)
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(res, 'text/xml');
                let xmlPorts=xmlDoc.getElementsByTagName("Port");
                for(let i=0;i<xmlPorts.length;i++){
                    
                    let port = {
                        name: xmlPorts[i].getAttribute('name'),
                        driver: xmlPorts[i].getAttribute('driver')
                    }
                    this.Ports.push(port)
                }
                this.isLoading=false
            })
        }catch(error){
            console.log('error', error)
            this.isLoading=false
        }
    }
}

export default new PortsOwnerListStore ()