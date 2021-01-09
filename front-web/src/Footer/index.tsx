import './styles.css';

import { ReactComponent as Youtube } from '../Footer/youtube.svg';
import { ReactComponent as LinkedIn } from '../Footer/youtube.svg';
import { ReactComponent as Instagram } from '../Footer/youtube.svg';

function Footer() {
    return(
      <footer className="main-footer" >
          App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
          <div className="footer-icons">
              <a href="https://www.youtube.com/c/DevSuperior" target="_new" >
                <Youtube />
              </a>
              <a href="https://www.linkdin.com/school/devsuperior" target="_new" >
                  <LinkedIn />
              </a>
              <a href="https://www.instagram.com/devsuperior.ig" target="_new" >
                  <Instagram />
              </a>
          </div>
      </footer>
    );
}

export default Footer;