import * as React from 'react'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import styles from './styles.module.css'

export const FooterImpl: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Tu jest Twój napis Copyright */}
      <div className={styles.copyright}>
        Copyright 2025 Kamil Jucha
      </div>

      {/* Tu jest tylko ikonka Instagrama */}
      <div className={styles.social}>
        <a
          className={styles.socialLink}
          href="https://www.instagram.com/kamil_jucha_"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
