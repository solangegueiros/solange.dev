import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import icon from '../images/icon.png'

const Menu = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  //console.log("Layout data \n", JSON.stringify(data, null, 2));    
  
  return (
      <div className="menu">
        <Link to="/" className="menu-title">
          <img src={icon} alt="Solange.Dev" className="logoIcon" />
          {data.site.siteMetadata.title }
        </Link>         
        <nav>
          <ul className="menu-links">
              <li className="menu-link-item">
                <Link to="/" className="nav-link-text">
                    {t('menu.home')}
                </Link>
              </li>
              <li className="menu-link-item">
                <Link to="/events" className="nav-link-text">
                    {t('menu.events')}
                </Link>
              </li>
              <li className="menu-link-item">
                <Link to="/projects" className="nav-link-text">
                    {t('menu.projects')}
                </Link>
              </li>
              <li className="menu-link-item">
                <Link to="/about" className="nav-link-text">
                    {t('menu.about')}
                </Link>
              </li>
          </ul>
        </nav>
        <div>
          <LanguageSwitcher />
        </div>        
      </div>
    )
  }
  
  export default Menu

  /*
              <li className="menu-link-item">
                <Link to="/blog" className="nav-link-text">
                    {t('menu.blog')}
                </Link>
              </li>
              <li className="menu-link-item">
                <Link to="/docs" className="nav-link-text">
                    {t('menu.docs')}
                </Link>
              </li>

  */