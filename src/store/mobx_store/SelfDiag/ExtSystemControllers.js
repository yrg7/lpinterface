import { makeAutoObservable, runInAction } from "mobx"
import { getFromLP } from "../../../services/ax_xml"
import { standartXmlParse } from "../../../utils/utils"

const EXTSYSTEMCONTROLLERS_PATH = '/apkdk-host/Application_data/gui/SelfDiag/ExtSystemControllers.xml'

class ExtSystemControllersStore {
  mainObj = {
    title: '',
    tabsArray: []
  }
  isLoading = false
  isFirst = false
  constructor() {
    makeAutoObservable(this)
  }
  getFromLP_Action = async (commonURL) => {
    try {
      this.isLoading = true
      const res = await getFromLP(commonURL + EXTSYSTEMCONTROLLERS_PATH)
      runInAction(() => {

        this.mainObj = standartXmlParse(res)
    
        this.isLoading = false
        this.isFirst =true

      })

    } catch (error) {
      console.log('error',error)
      this.isLoading = false

    }

  }
}

export default new ExtSystemControllersStore()