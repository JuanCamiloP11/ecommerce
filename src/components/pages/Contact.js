import { Container } from "@mui/material";

const ContactPage = () => {
    return(
        <Container classname='container-general'>
            <h1 >Contacto</h1>
            <form>
                <input type="text" placeholder='Tu Nombre'/>
                <input type="text" placeholder='Tu apellido'/>
                <input type="mail" placeholder='Tu Correo'/>
                <button type="submit">Enviar</button>
            </form>
        </Container>
    )
}

export default ContactPage;