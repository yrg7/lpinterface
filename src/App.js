import './App.css';
import Main from './components/Diag/Main';
import { AppWs } from './services/ws';
import { createContext, useContext, useEffect, useState } from 'react';
import { getUrlParam } from './utils/utils';
import ApkDkControllersStore from './store/mobx_store/SelfDiag/ApkDkControllers'
import DeviceDiagnosticConfigStore from './store/mobx_store/SelfDiag/DeviceDiagnosticConfig'
import PortsOwnerListStore from './store/mobx_store/SelfDiag/PortsOwnerList';
import ExtDeviceControllersStore from './store/mobx_store/SelfDiag/ExtDeviceControllers'
import ExtSystemControllersStore from './store/mobx_store/SelfDiag/ExtSystemControllers'
export const UrlContext = createContext(null);


function App() {

  // const [urlData, setUrlData] = useState({ distIP: '', distPort: '', endPointIP: '' });
  const [urlComplette, setUrlComplette] = useState({ ht: '', ws: '' });

  useEffect(() => {
    const distance = getUrlParam('distIP')
    const port = getUrlParam('distPort')
    const endPointIP = getUrlParam('endPointIP')

    // setUrlData({ ...urlData, distIP: distance, distPort: port, endPointIP: endPointIP })
    if (distance) {
      let urlHT=''
      let urlWS=''
      console.log('111 ' + distance)
      if (endPointIP) {
        urlHT='http://' + distance + ':' + port + '/' + endPointIP
        urlWS="ws://" + distance + ":" + port + "/" + endPointIP
        setUrlComplette({ ...urlComplette, ht: urlHT, ws: urlWS })
      }
      else {
        urlHT= 'http://' + distance + ':' + port
        urlWS = "ws://" + distance + ":" + port 
        setUrlComplette({ ...urlComplette, ht: urlHT, ws: urlWS})
      }

      // if (endPointIP) urlComplette='http://' + distance + ':' + port + '/' + endPointIP
      // else urlComplette='http://' + distance + ':' + port

      ApkDkControllersStore.getFromLP_Action(urlHT)
      DeviceDiagnosticConfigStore.getFromLP_Action(urlHT)
      PortsOwnerListStore.getFromLP_Action(urlHT)
      ExtDeviceControllersStore.getFromLP_Action(urlHT)
      ExtSystemControllersStore.getFromLP_Action(urlHT)
      console.log(urlComplette.ht)


    }
    console.log('--' + urlComplette)
  }, [])

  return (
    <div>
      {urlComplette &&
        <UrlContext.Provider value={urlComplette}>
          {console.log('++' + urlComplette)}
          <div className="App">

            <AppWs />
            <Main />
          </div>
        </UrlContext.Provider>
      }
    </div>


  );
}

export default App;
