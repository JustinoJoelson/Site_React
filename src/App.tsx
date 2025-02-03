

import { Header, ItenHeader, TextHeader, OptionsProductsApple, ItemOptions} from './AppStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faBriefcase } from '@fortawesome/free-solid-svg-icons'

import iMac from './assets/images/iMac.svg'
/*import MacAcessories from './assets/images/macAcessories.svg'
import MacCompare from './assets/images/macCompare.svg'
import MacDisplays from './assets/images/macDisplays.svg'*/
import Macmini from './assets/images/macMini.svg'
//import MacOs from './assets/images/macOs.svg'
import Macpro from './assets/images/macPro.svg'
import Macsop from './assets/images/macShop.svg'
import MacStudio from './assets/images/macStudio.svg'
import MacbookAir from './assets/images/macbookAir.svg'
/*import MacboojPro from './assets/images/macbookPro.svg'
import MacProJpeg from './assets/images/macpro.jpeg'
import icoMacM1 from './assets/images/icon-mac-m1.png'
import icoMacm2 from './assets/images/icon-mac-m2.png'
import ImageBhblr6 from './assets/images/image_bhnlr6.png'
import macBookImage from './assets/images/macBookImage.png'
import MacbookJpeg from './assets/images/macbook.jpeg'*/




function App() {

  return (
    <>
      <Header>
        <ItenHeader>
          <FontAwesomeIcon style={{ color: 'rgb(29, 29, 31)', fontSize: '20px', cursor: 'pointer' }} icon={faApple} />
        </ItenHeader>

        <ItenHeader>
          <TextHeader>Loja</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <TextHeader>Mac</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <TextHeader>Ipad</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <TextHeader>iPhone</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <TextHeader>Watch</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <TextHeader>AirPods</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <TextHeader>TV e Casa</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <TextHeader>So na Apple</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <TextHeader>Acessorios</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <TextHeader>Suporte</TextHeader>
        </ItenHeader>

        <ItenHeader>
          <FontAwesomeIcon style={{ color: 'rgb(29, 29, 31)', fontSize: '15px', opacity: '.7', cursor: 'pointer' }} icon={faMagnifyingGlass} />

        </ItenHeader>

        <ItenHeader>
          <FontAwesomeIcon style={{ color: 'rgb(29, 29, 31)', fontSize: '20px', opacity: '.7', cursor: 'pointer' }} icon={faBriefcase} />
        </ItenHeader>

      </Header>

      <OptionsProductsApple>
        <ItemOptions>
          <img src={MacbookAir}/>
        </ItemOptions>

        <ItemOptions>
          <img src={Macpro}/>
        </ItemOptions>

        <ItemOptions>
          <img src={iMac}/>
        </ItemOptions>

        <ItemOptions>
          <img src={Macmini}/>
        </ItemOptions>

        <ItemOptions>
          <img src={MacStudio}/>
        </ItemOptions>

        <ItemOptions>
          <img src={Macpro}/>
        </ItemOptions>

        <ItemOptions>
          <img src={Macsop}/>
        </ItemOptions>

        
      </OptionsProductsApple>
    </>
  )
}

export default App
