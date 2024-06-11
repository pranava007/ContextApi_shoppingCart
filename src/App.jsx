import { createContext, useState } from 'react'
import './App.css'
import Cart from './Components/Cart'


export const Mycontext = createContext('')

function App() {

  let data = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
         "https://cdn.pricebaba.com/prod/images/product/mobile/59168/apple-iphone-9-raw-1665199.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
           "https://m.media-amazon.com/images/I/618ZI2Xyw+L._AC_UF894,1000_QL80_.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
"https://images.mobiledekho.com/upload/samsung-galaxy-note-9/samsung-galaxy-note-9.jpg"     
   ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
          "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/beta-f19/navigation/F19-navigation-blue-v2.png"
          
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
          "https://www.smartcellular.ie/media/catalog/product/cache/cfaa1692031f009488d1cfea5ce7e1ee/p/3/p30_1.jpg"
          
        ]
    }
]



const [product,setProduct] = useState(data)
  return (
    <>
      
    <Mycontext.Provider value={[product,setProduct]}>
     <Cart />
    </Mycontext.Provider>
        
    </>
  )
}

export default App
