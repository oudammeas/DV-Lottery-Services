import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'rsuite'
import { Footer, FlexboxGrid, Button, IconButton, ButtonGroup, ButtonToolbar, Icon, Col } from 'rsuite'
import { useTranslation } from 'react-i18next'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { external_link } from '../../../constant'
import { v4 as uuidv4 } from 'uuid'
import { menu } from '../../../routes/router'

// const menu = [
//   { title: 'common.routes.home', route: '/' },
//   { title: 'common.routes.register', route: '/register' },
//   { title: 'common.routes.faqs', route: '/faqs' },
//   { title: 'common.routes.contact-us', route: '/contact-us' },
// ]

const links = [
  {
    name: 'common.external-link.us-embassy',
    link: external_link.US_CAMBODIA_EMBBASY,
  },
  { name: 'common.external-link.usaid', link: external_link.USAID },
  {
    name: 'common.external-link.advanced-op',
    link: external_link.ADVANCED_OP,
  },
  {
    name: 'common.external-link.khmer-doctors',
    link: external_link.KHMER_DOCTOR,
  },
  { name: 'common.external-link.cwcc', link: external_link.CWCC },
  {
    name: 'common.external-link.us-dv-visa',
    link: external_link.US_DV_SERVICE,
  },
]

const PageFooter = () => {
  const { t } = useTranslation()

  const styles = {
    flexboxgrid: {
      root: {
        minHeight: '200px',
        color: '#E5E5E5',
        padding: '1em 1em 1em 1em',
      },
      item: {
        ul: {
          textAlign: 'left',
          lh: {
            fontWeight: 'bold',
          },
          li: {
            listStyleType: 'none',
            marginTop: '0.5em',
            marginBottom: '0.5em',
          },
        },
      },
    },

    span: {
      color: '#E5E5E5',
    },

    a: {
      color: '#E5E5E5',
    },
    footer: {
      backgroundColor: ' #03438c',
    },
  }

  return (
    <Footer style={styles.footer}>
      <FlexboxGrid style={styles.flexboxgrid.root}>
        <FlexboxGrid.Item colspan={24} componentClass={Col} md={6} style={styles.flexboxgrid.item}>
          <ul style={styles.flexboxgrid.item.ul}>
            <lh style={styles.flexboxgrid.item.ul.lh}>Menu</lh>
            <Divider />
            {menu.map(m => (
              <li style={styles.flexboxgrid.item.ul.li} key={uuidv4()}>
                <Link to={t(m.path)}>
                  <span href={t(m.path)} style={styles.span}>
                    {t(m.name)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24} componentClass={Col} md={6} style={styles.flexboxgrid.item}>
          <ul style={styles.flexboxgrid.item.ul}>
            <lh style={styles.flexboxgrid.item.ul.lh}>External Links</lh>
            <Divider />
            {links.map(l => (
              <li style={styles.flexboxgrid.item.ul.li} key={uuidv4()}>
                <a href={t(l.link)} style={styles.a}>
                  {t(l.name)}
                </a>
              </li>
            ))}
          </ul>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24} componentClass={Col} md={6} style={styles.flexboxgrid.item}>
          <ul style={styles.flexboxgrid.item.ul}>
            <lh style={styles.flexboxgrid.item.ul.lh}>Contact Us</lh>
            <Divider />
            <li style={styles.flexboxgrid.item.ul.li} key={uuidv4()}>
              {t('common.contact-us-page.name')}
            </li>
            <li style={styles.flexboxgrid.item.ul.li} key={uuidv4()}>
              {t('common.contact-us-page.street')}
            </li>
            <li style={styles.flexboxgrid.item.ul.li} key={uuidv4()}>
              {t('common.contact-us-page.city')}, {t('common.contact-us-page.province')}
            </li>
            <li style={styles.flexboxgrid.item.ul.li} key={uuidv4()}>
              {t('common.contact-us-page.phone')}
            </li>
            <li style={styles.flexboxgrid.item.ul.li} key={uuidv4()}>
              {t('common.contact-us-page.email')}
            </li>
            <li style={styles.flexboxgrid.item.ul.li} key={uuidv4()}>
              <ButtonToolbar>
                <IconButton
                  icon={<Icon icon="facebook-official" />}
                  color="blue"
                  circle
                  href={t('common.contact-us-page.facebook')}
                />
                <IconButton icon={<Icon icon="twitter" />} color="cyan" circle href={t('common.contact-us-page.twitter')} />
              </ButtonToolbar>
            </li>
          </ul>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24} componentClass={Col} md={6} style={styles.flexboxgrid.item}>
          <ul style={styles.flexboxgrid.item.ul}>
            <lh style={styles.flexboxgrid.item.ul.lh}>Disclaimer</lh>
            <Divider />
            <li style={styles.flexboxgrid.item.ul.li} key={uuidv4()}>
              {t('common.disclaimer.text')}
            </li>
          </ul>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Footer>
  )
}

PageFooter.propTypes = {}

// export default PageFooter;

export default withRouter(PageFooter)
