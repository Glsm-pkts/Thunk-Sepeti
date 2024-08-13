
import Container from "../components/Container"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from "../components/Loader";
import Error from "../components/Error";
import CardItem from "../components/CardItem";

const Card = () => {
  const card = useSelector((store) => store.card)
  
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">Sepet</h1>
      <div>
        {
          card.isLoading ? (
            <Loader/>
          ) : card.error ? (<Error/>) : card.data.length === 0 ? (
            <p className="flex flex-col items-center gap-3">Sepette herhangi bir ürün yok
              <Link className="border p-2 shadow rounded hover:bg-gray-100" to={"/"}>

              Ürün Ekle
              </Link>
             
            </p>
          ) : (
            card.data.map((item) => <CardItem key={item.id} item={item}/>)
          )
        }
      </div>
    </Container>
  );
}

export default Card;
