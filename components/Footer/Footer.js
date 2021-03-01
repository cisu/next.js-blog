import styles from './Footer.module.scss';

import {Container} from '../index';

export default function Footer() {
  return (
    <div className={styles.container}>
      <Container>
        <div>logo</div>
        <div className={styles.grid}>
          <div>
            <h5>About Us</h5>
            <p>Designs products and experience for users.</p>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li>georgrekis@gmail.com</li>
            </ul>
          </div>
          <address>
            <h5>Address</h5>
            <ul>
              <li>Xwra</li>
              <li>Polh</li>
              <li>address</li>
              <li>t.k.</li>
            </ul>
          </address>
          <div>
            <h5>Other Link</h5>
            <ul>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
