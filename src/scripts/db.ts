import { getFirestore, collection, getDocs, DocumentData, addDoc, doc, QuerySnapshot } from 'firebase/firestore'
import { getStorage, getDownloadURL, ref, getBlob, StorageReference, uploadBytes, listAll } from 'firebase/storage'
import { app } from '@/main'
import $ from 'jquery'
// Initialize Firebase
const db = getFirestore(app)

// Fetching data
export async function fetchData (toDoc: string) {
  const querySnapshot = await getDocs(collection(db, toDoc))
  return querySnapshot
}

// Send data to Firestore
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

// Save image to firestore
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
  }
  return imageNames
}

// Returning picture URL
export const picUrl = (name: any, id: string, index: number) => {
  console.log('LOADED --> ' + loadedImages)
  console.log('SOURCES --> ' + loadedImgSources)
  const storage = getStorage()
  getDownloadURL(ref(storage, 'portfolioImages/' + name))
    .then((path) => {
      // define our image element
      const imageElement = document.getElementById(id) as HTMLElement
      // check if path in loaded images
      const imgIndex = loadedImgSources.indexOf(path)
      // if it is, assign it to image already stored in cache
      // if not, assign it to new download url
      if (imgIndex !== -1) {
        document.getElementById(id)?.setAttribute('style', `background-image: url(${loadedImages[imgIndex].src})`)
        console.log('image found in list!')
      } else {
        document.getElementById(id)?.setAttribute('style', `background-image: url(${path})`)
      }
      if (index === 0) {
        imageElement.style.display = 'block'
      }
    })
  return 'none'
}

const loadedImages: HTMLImageElement[] = []
const loadedImgSources: string[] = []
// Load all images
export async function loadImages () {
  const storage = getStorage()
  const listRef = ref(storage, 'portfolioImages/')
  listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        listAll(folderRef)
          .then((response) => {
            response.items.forEach((itemRef) => {
              getDownloadURL(itemRef)
                .then((path) => {
                  const img = new Image()
                  img.src = path
                  console.log(path)
                  loadedImages.push(img)
                  loadedImgSources.push(img.src)
                })
            })
          })
      })
    })
}

// Figure out why the images are loading twice!
