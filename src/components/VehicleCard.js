import React, { useState } from 'react';

function VehicleCard({ vehicle }) {
    const [images, setImages] = useState([
        `https://source.unsplash.com/600x400/?car,${vehicle.make}${vehicle.model}`,
        `https://source.unsplash.com/600x400/?car,${vehicle.make}`,
        `https://source.unsplash.com/600x400/?car,auto`
    ]);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectImage = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={selectedImage} alt={vehicle.model} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg">{vehicle.make} {vehicle.model}</h3>
                <p className="text-gray-700">Año: {vehicle.year}</p>
                <p className="text-gray-700">Precio: ${vehicle.price}</p>
                <div className="flex mt-2">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index}`}
                            className="w-12 h-12 object-cover rounded-full border-2 border-white mr-2 cursor-pointer"
                            onClick={() => selectImage(img)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VehicleCard;
