import iconv from 'iconv-lite'
import axios from 'axios';
import { Buffer } from 'buffer';

export const getXmlFromFile=(url)=>{
let a_m
if (url) {
    axios.get(
        url,
      {
        responseType: 'arraybuffer',
        responseEncoding: 'binary'
      }).then(resp => {
        a_m = iconv.decode(Buffer.from(resp.data), 'cp866')
        // cbSet(a_m);
        // console.log('+++++ ',a_m)
       
      });
  }
  return a_m
}

export const getFromLP= async (url)=>{
    let a_m
    if (url) {
        await axios.get(
            url,
          {
            responseType: 'arraybuffer',
            responseEncoding: 'binary'
          }).then(resp => {
            a_m = iconv.decode(Buffer.from(resp.data), 'cp866')
       
           
          });
      }
      return a_m
    }
