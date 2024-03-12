import { makeAutoObservable, runInAction } from "mobx"
import { getFromLP } from "../../../services/ax_xml"
import { standartXmlParse } from "../../../utils/utils"

const APKDKCONTROLLERS_PATH = '/apkdk-host/Application_data/gui/SelfDiag/ApkDkControllers.xml'

class ApkDkControllersStore {
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
      const res = await getFromLP(commonURL + APKDKCONTROLLERS_PATH)
      runInAction(() => {

        this.mainObj = standartXmlParse(res)
    
        this.isLoading = false
        this.isFirst =true

      })

    } catch (error) {
      console.log('error',error)

    }

  }
}

export default new ApkDkControllersStore()
