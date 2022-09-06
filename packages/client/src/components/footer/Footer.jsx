 import { Flex, Box, Center, Text, Link, Icon, } from '@chakra-ui/react'
import logo from '../../assets/imgs/logo2.png'
import bank_bca from "../../assets/metode_pemabayran/bank_bca.png"
import bank_mandiri from "../../assets/metode_pemabayran/bank_mandiri.png"
import bank_permata from "../../assets/metode_pemabayran/bank_permata.png"
import gopay from "../../assets/metode_pemabayran/gopay.png"
import ovo from "../../assets/metode_pemabayran/ovo.png"
import shopee from "../../assets/metode_pemabayran/shopee.png"
import Image from 'next/image';

import { MdEmail, MdWifiCalling3 } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <>


      <Flex flexWrap={'wrap'} bg='#f0f9fc' minH={'200px'} justifyContent={'center'} padding={'30px'} pt='20px' h="147px" w="1440px">
        {/* -------------------- Box 1 -------------------- */}
        <Box flexWrap='wrap' width='100px' m='5px' mt='15px'>
          <Image src={logo} alt="logo" width='180px' height='40px' />
          <Box display='flex' mt='5px'>
            <Flex align='center' h='45px' w='45px' justifyContent='center'><Icon boxSize='8' as={MdEmail} /></Flex>
            <Box>
              <Box><Text fontSize='sm' fontWeight='bold' color='#213360'>Email</Text></Box>
            </Box>
          </Box>
          <Box display='flex' mt='5px'>
            <Flex align='center' h='45px' w='45px' justifyContent='center'><Icon boxSize='8' as={RiWhatsappFill} /></Flex>
            <Box>
              <Box><Text fontSize='sm' fontWeight='bold' color='#213360'>Chat WhatsApp</Text></Box>
            </Box>
          </Box>
          <Box display='flex' mt='5px'>
            <Flex align='center' h='45px' w='45px' justifyContent='center'><Icon boxSize='8' as={MdWifiCalling3} /></Flex>
            <Box>
              <Box><Text fontSize='sm' fontWeight='bold' color='#213360'>Call Center</Text></Box>
            </Box>
          </Box>
        </Box>

        <Box flexWrap='wrap' width='310px' m='5px' mt='15px'>
          <Text fontWeight='bold' color='#213360'></Text>
          <Text mt='8px' fontSize='sm' fontWeight='semibold' color='#213360'><Link>Kebijakan Privasi</Link></Text>
          <Text mt='8px' fontSize='sm' fontWeight='semibold' color='#213360'><Link>Syarat & Ketentuan</Link></Text>
          <Text mt='8px' fontSize='sm' fontWeight='semibold' color='#213360'><Link>Cara Belanja</Link></Text>
          <Text mt='8px' fontSize='sm' fontWeight='semibold' color='#213360'><Link>Tentang kami</Link></Text>
          <Text mt='8px' fontSize='sm' fontWeight='semibold' color='#213360'><Link>FAQ</Link></Text>
          <Text mt='8px' fontSize='sm' fontWeight='semibold' color='#213360'><Link>Karir</Link></Text>
        </Box>

      
        <Box flexWrap='wrap' width='310px' m='5px' mt='15px'>
          <Text fontWeight='bold' color='#213360'>Metode Pembayaran</Text>
          <Box mt='10px' display='flex' flexWrap='wrap'>
            <Box mr='10px' pt='10px'>
              <Image src={bank_bca} alt="bank bca" width='70px' height='23px' />
            </Box>
            <Box mr='10px'>
              <Image src={bank_mandiri} alt="bank mandiri" width='100px' height='30px' />
            </Box>
            <Box mr='10px'>
              <Image src={bank_permata} alt="bank permata" width='110px' height='35px' />
            </Box>
            <Box mr='10px' pt='15px'>
              <Image src={gopay} alt="gopay" width='100px' height='25px' />
            </Box>
            <Box mr='10px' pt='10px'>
              <Image src={ovo} alt="ovo" width='50px' height='35px' />
            </Box>
            <Box pt='5px'>
              <Image src={shopee} alt="shopee" width='80px' height='50px' />
            </Box>

          </Box>
        </Box>
        {/* <Box display='flex' width='310px' mx='5px'></Box>
        <Box display='flex' width='310px' mx='5px'></Box>
        <Box display='flex' width='310px' mx='5px'></Box> */}
      </Flex>
     

   
    </>
  )
}