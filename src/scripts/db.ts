import { getFirestore, collection, getDocs, DocumentData, addDoc, doc } from 'firebase/firestore'
import { getStorage, getDownloadURL, ref, getBlob, StorageReference, uploadBytes } from 'firebase/storage'
import { app } from '@/main'
import $ from 'jquery'
// Initialize Firebase
const db = getFirestore(app)

export async function fetchData (toDoc: string) {
  const querySnapshot = await getDocs(collection(db, toDoc))
  return querySnapshot
}

export async function postData (toDoc:string, title:string, titleLink: string, desc: string, year: BigInteger, skills: Array<string>, imageNames: Array<string>) {
  const docData = {
    title: title,
    link: titleLink,
    description: desc,
    year: year,
    skills: skills,
    imageNames: imageNames
  }
  const docRef = await addDoc(collection(db, toDoc), docData)
  console.log('Document written with ID: ', docRef.id)
}

// GENERATE random hex
function dec2hex (dec: { toString: (arg0: number) => string }) {
  return dec.toString(16).padStart(2, '0')
}
function generateId (len: any) {
  const arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}
export const picUrl = (name: any, id: string, index: number) => {
  const storage = getStorage()
  getDownloadURL(ref(storage, 'portfolioImages/' + name))
    .then((path) => {
      // Promise.resolve(path)
      document.getElementById(id)?.setAttribute('style', `background-image: url(${path})`)
      const image = new Image()
      image.src = path
      const imageElement = document.getElementById(id) as HTMLElement
      imageElement.style.backgroundImage = `background-image: url(${image.src})`
      if (index === 0) {
        imageElement.style.display = 'block'
      }
    })
  return 'none'
}

export function saveImages (data:FileList, toDoc: string) {
  const imageNames: string[] = []
  const storage = getStorage()
  for (let i = 0; i < data.length; i++) {
    // get random hex name
    const imageHexName = generateId(20)
    // get save path
    const imageSavePath = toDoc + '-img/' + imageHexName + '.' + data[i].name.split('.').pop()
    const blob = data[i].slice(0, data[i].size, data[i].type)
    const imgFile = new File([blob], imageSavePath)
    uploadBytes(ref(storage, 'portfolioImages/' + imageSavePath), imgFile)
      .then((snapshot) => {
        console.log('uploaded the file!')
        console.log(snapshot)
      })
    imageNames.push(imageSavePath)
    // // format image and name for ajax POST
    // const imageData = new FormData()
    // imageData.append('file', data[i])
    // imageData.append('imagePath', imageSavePath)
    // // get path and POST
    // const path = '/postimage'
    // $.ajax({
    //   async: false,
    //   url: path,
    //   type: 'POST',
    //   data: imageData,
    //   cache: false,
    //   contentType: false,
    //   processData: false
    // })
    //   .done(function (data) {
    //     // if successful, include image name in database
    //     alert(data + 'success')
    //     imageNames.push(imageSavePath)
    //     console.log('added!')
    //   })
    //   .fail(function (errorMsg) {
    //     // if unsuccessful, do not include name to avoid bugs later
    //     alert(errorMsg + 'error')
    //   })
    // console.log(imageNames)
  }
  return imageNames
}
