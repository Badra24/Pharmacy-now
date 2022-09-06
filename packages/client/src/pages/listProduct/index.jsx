import { Flex } from '@chakra-ui/react';
import Footer from '../../components/footer/Footer';
import NavBar from "../../components/navbar/NavBar"
import NavBarSignIn from "../../components/navbar/NavBarSignIn"
import ListProduct from '../../components/productList/ProductList';
import { useSelector } from 'react-redux';
export default function productlist() {
    const userSelector = useSelector((state)=> state.auth);
 return (
  <>

  { userSelector.id ? <NavBarSignIn /> : <NavBar/>}
   <Flex flexWrap={'wrap'} minH={'80vh'} justifyContent={'center'} py='20px' bgGradient='linear(to-tr, #ffffff 50%, #ddf1f9 )'>
    <ListProduct />
   </Flex>
   <Footer />
  </>
 )
}