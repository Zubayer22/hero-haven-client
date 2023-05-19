import React, { useEffect, useState } from 'react';

const Gallerys = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://hero-haven-server-nu.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
    return (
        <div className='container mx-auto py-10'>
           <h1 className="text-4xl font-bold text-center mb-8">Our Toy Gallery</h1>
            <div className='grid grid-cols-2 md:grid-cols-4'>
                {
                    products.map(product => <div key={product._id} className='shadow drop-shadow-xl m-4'><img className='w-full h-40 md:h-80 rounded' src={product.picture_url} alt="" /></div>
                    )
                }
            </div>
        </div>

    );
};

export default Gallerys;

// import React, { useEffect, useState } from 'react';
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./images";
// import ('./Gallery.css')

// const Gallerys = () => {
//     const [currentImage, setCurrentImage] = useState(0);
//     const [viewerIsOpen, setViewerIsOpen] = useState(false);
//     const [productImages, setProductImages] = useState([]);

//     useEffect(() => {
//         fetch('https://hero-haven-server-nu.vercel.app/products')
//             .then(res => res.json())
//             .then(data => {
//                 setProductImages(data.map(product => ({
//                     src: product.picture_url,
//                     width: 1,
//                     height: 1
//                 })));
//             });
//     }, []);

//     const openLightbox = (event, { index }) => {
//         setCurrentImage(index);
//         setViewerIsOpen(true);
//     };

//     const closeLightbox = () => {
//         setCurrentImage(0);
//         setViewerIsOpen(false);
//     };

//     return (
//         <div className='container mx-auto'>
//             <h1 className="text-4xl font-bold text-center">Gallery</h1>
//             <Gallery photos={photos} onClick={openLightbox} />
//             <ModalGateway>
//                 {viewerIsOpen && (
//                     <Modal onClose={closeLightbox}>
//                         <Carousel
//                             currentIndex={currentImage}
//                             views={productImages}
//                         />
//                     </Modal>
//                 )}
//             </ModalGateway>
//         </div>
//     );
// };

// export default Gallerys;