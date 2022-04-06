import { Container } from "@mui/material";
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productList } from "../ListProduts/datos";

const DetailProduct = () =>  {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})
    
    useEffect( () => {
        filterProductById(productList, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

    return(
        <Container className='container-general'>
            <div className='container-detail'>
            <div className='container-detail_img'>
                <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7885cf7b835b4187b4ceade101212682_9366/Tenis_NMD_R1_Blanco_GZ4712_01_standard.jpg' alt="zapato2" />
            </div>
            <div className='container-detail_info'>
                <h3 className='info_title'>{product.name}</h3>
                <p className='info_text'>{product.price}</p>
                <p className='info_subtitle'>Talla</p>
                <p className='info_text'>{product.size}</p>
                <p className='info_subtitle'>DETALLES</p>
                <p className='info_text detail_text'>{product.description}</p>
                <Button variant="contained">COMPRAR</Button>

            </div>
            </div>
        </Container>
    )
}
    export default DetailProduct