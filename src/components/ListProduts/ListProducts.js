import Card from "../Card";

const ListProducts = ({children}) => {
    return(
        <div className="container-cards">
            <h2> {children} </h2>

            <Card title='Zapatos 1' talle='11' price={200}/>
            <Card title='Zapatos 2' talle='9' price={170}/>
            <Card title='Zapatos 3' talle='7' price={140}/>
            <Card title='Zapatos 4' talle='10' price={190}/>
            <Card title='Zapatos 5' talle='6' price={130}/>
            <Card title='Zapatos 6' talle='12' price={210}/>
        </div>
    )
}

export default ListProducts;