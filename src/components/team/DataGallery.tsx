import i1 from "../../assets/gallery/1.jpg"
import i2 from "../../assets/gallery/2.jpg"
import i3 from "../../assets/gallery/3.jpg"
import i4 from "../../assets/gallery/4.jpg"
import i5 from "../../assets/gallery/5.jpg"


export interface GalleryImage {
    image: string;
}
const DataGallery: GalleryImage[] = [
    {
        image: i1,
    },
    {
        image: i2,
    },
    {
        image: i3,
    },
    {
        image: i4,
    },
    {
        image: i5,
    },
];

export default DataGallery;