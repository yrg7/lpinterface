import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { useDispatch } from 'react-redux';
import { changeSensorAction, changeSensorsAction, createSensorsAction, changeSensorsUnkAction } from "../store/sensorReducer";
import { UrlContext } from "../App";
export const AppWs = () => {
    const [isPaused, setIsPaused] = useState(false);
  
    const [data, setData] = useState(null);

    // const [isOkData,setIsOkData]=useState(false);
    // const [dataCnt,setDataCnt]=useState(0);
    // const [timerId, setTimerId]=useState(0)
    // const [aVal, setAVal] = useState(0);
    const [status, setStatus] = useState("");
    const ws = useRef(null);
    const intervalRef = useRef();



    const dispatch = useDispatch()
    const mUrl = useContext(UrlContext);
    // const sensors = useSelector(state => state.sensorsObj.sensorsObj)

    useEffect(() => {
        if (!isPaused) {
        
            // console.log('))))'+mUrl.distIP)
            // ws.current = new WebSocket("ws://192.168.1.23:8825/"); // создаем ws соединение
            if(mUrl){
                if(mUrl.ws){
                    // console.log(mUrl.distIP+"+++ "+mUrl.distPort+" "+mUrl.endPointIP)
                    // if(mUrl.endPointIP) ws.current = new WebSocket("ws://"+mUrl.distIP+":"+mUrl.distPort+"/"+mUrl.endPointIP+"/x"); // создаем ws соединение
                    // else ws.current = new WebSocket("ws://"+mUrl.distIP+":"+mUrl.distPort+"/"); // создаем ws соединение
                    ws.current=new WebSocket(mUrl.ws+"/x")
                    ws.current.binaryType = "arraybuffer"
                    ws.current.onopen = () => {
                        setStatus("Соединение открыто");  // callback на ивент открытия соединения
                        sensConf()
                    }
                    ws.current.onclose = () => {
                        resetConn()
                    }
                    createSensors();
                    gettingData();
                    intervalRef.current=0
                }
            }
        }

        return () =>{
            if(ws.current) ws.current.close(); // кода меняется isPaused - соединение закрывается
        } 
    }, [ws, isPaused, mUrl]);

    const mConnect = ()=> {
        setIsPaused(false)
        console.log("mConnect ")
    }
    const resetConn = () =>{
        setStatus("Соединение закрыто"); // callback на ивент закрытия соединения
        console.log("Соединение закрыто")
        setIsPaused(true)
        sensorsUnk()
        clearTimeout( intervalRef.current)
       
        setTimeout(mConnect, 2000);
    }


 



    const gettingData = useCallback(() => {
        if (!ws.current) return;

        ws.current.onmessage = e => {                //подписка на получение данных по вебсокету
            // console.log('--------------')
            // console.log('onmessage')
            if (isPaused) return;
            let buffer = new ArrayBuffer(6);
            let view = new DataView(buffer);
            // const message = JSON.parse(e.data);
            // setData(message);
            let bitArray = new Uint8Array(e.data);

            view.setUint8(0, bitArray[0]);
            let TypeDev = view.getUint8(0);
            
            if(intervalRef.current !=0){
                clearTimeout(intervalRef.current)
         
                
            }
            intervalRef.current=setTimeout(resetConn,10000)
           
            // console.log('setTimeout '+intervalRef.current)

            if (TypeDev == 128) {//подтверждение приема
                console.log("Rec 0x80  ");
                //if(ArAllDev.length >0) complette_and_send(ArAllDev.pop(),ArAllSens.pop());
                return;
            }
            let NumDev = 0;
            //---------------------
            if (TypeDev == 129) {//необходимо перезапросить
                console.log("Rec 129  ");
                
                resetConn() 
                // sensConf()
                //if(ArAllDev.length >0) complette_and_send(ArAllDev.pop(),ArAllSens.pop());
                return;
            }
            //-----------------------------

            
            let NumSens;
            let Val;

            if (TypeDev == 0x22 || TypeDev == 0x21) {
                //номер устройства
                view.setUint8(0, bitArray[1]);
                view.setUint8(1, bitArray[2]);
                //разбор значений датчиков
                NumDev = view.getInt16(0);
            }

            if (TypeDev == 0x22) {//аналоги

                let ofs = 3;
                for (let i = 3; i < bitArray.length; i += 6) {

                    view.setUint8(0, bitArray[ofs + 0]);
                    view.setUint8(1, bitArray[ofs + 1]);
                    NumSens = view.getInt16(0);
                    view.setUint8(0, bitArray[ofs + 2]);
                    view.setUint8(1, bitArray[ofs + 3]);
                    view.setUint8(2, bitArray[ofs + 4]);
                    view.setUint8(3, bitArray[ofs + 5]);
                    Val = view.getFloat32(0);
                    ofs += 6;
                    if(isNaN(Val))changeSensor(NumDev,NumSens,'???')
                    else {
                        changeSensor(NumDev,NumSens,Math.round(Val))
                    }

                }
            }
            if (TypeDev == 0x21) {//дискреты
                for (let i = 3; i < bitArray.length; i += 3) {
                    view.setUint8(0, bitArray[3 * i + 0]);
                    view.setUint8(1, bitArray[3 * i + 1]);
                    NumSens = view.getInt16(0);
                    view.setUint8(2, bitArray[6 * i + 2]);
                    Val = view.getInt8(0);
                }
            }
         
        };
    }, [isPaused]);

    const changeSensor = (devId,sensId, val) => {

        dispatch(changeSensorAction(devId,sensId, val))
    }
    const changeSensors = (mArray) => {

        dispatch(changeSensorsAction(mArray))
    }
    const createSensors = () => {
        let mArray = []
        for (let i = 0; i < 105; i++) {
            mArray.push({devId: 989, sensId: i, val: '???'})
        }

        dispatch(createSensorsAction(mArray))
    }
    const sensorsUnk = () => {
        dispatch(changeSensorsUnkAction())
    }

    const sensConf = () => {

        let ar = new Uint8Array(17);
        // let dev = Number.parseInt(Dev);
        // let sens1 = Number.parseInt(Sens);
        // let sens2 = Number.parseInt(Sens);
        let dev = 989
        let sens1 = 0
        let sens2 = 104
        let Code = 1;
        ar[0] = Code & 0xFF;
        ar[1] = (Code >> 8) & 0xFF;
        ar[2] = (Code >> 16) & 0xFF;
        ar[3] = (Code >> 24) & 0xFF;

        ar[4] = dev & 0xFF;
        ar[5] = (dev >> 8) & 0xFF;
        ar[6] = (dev >> 16) & 0xFF;
        ar[7] = (dev >> 24) & 0xFF;

        ar[8] = sens1 & 0xFF;
        ar[9] = (sens1 >> 8) & 0xFF;
        ar[10] = (sens1 >> 16) & 0xFF;
        ar[11] = (sens1 >> 24) & 0xFF;

        ar[12] = sens2 & 0xFF;
        ar[13] = (sens2 >> 8) & 0xFF;
        ar[14] = (sens2 >> 16) & 0xFF;
        ar[15] = (sens2 >> 24) & 0xFF;

        ar[16] = 1;
        console.log('send ' + dev + ' ' + sens1 + ' ' + sens2);
        // webSocket.send(ar);


        ws.current.send(ar);
    }





    return (
        <>
       
        </>
    )
}




 

