import React from 'react'
import { Container, Content, Footer, Panel, PanelGroup } from 'rsuite'
import MainLayout from '../../layouts/MainLayout.js/MainLayout'
import { useTranslation } from 'react-i18next'

const faqs_data = [
  {
    question: 'What is the Diversity Lottery or DV Lottery program?',
    answer: 'What is the Diversity Lottery or DV Lottery program?',
  },
  { question: 'Who is eligible for the DV Lottery program?', answer: 'Who is eligible for the DV Lottery program?' },
  {
    question: 'What is the cost for participating in the DV Lottery program?',
    answer: 'What is the cost for participating in the DV Lottery program?',
  },
]

const FaqsPage = () => {
  const { t } = useTranslation()

  const styles = {
    content: {
      padding: '5em',
      minHeight: '40em',
      maxWidth: '100%',
      margin: '0 auto',
      textAlign: 'start',
    },

    pagetitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '1em',
    },

    panelGroup: {
      root: {
        width: '40em',
      },
    },
  }

  return (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.pagetitle}>{t('common.faqs-page.page-title')}</div>
        <PanelGroup accordion bordered style={styles.panelGroup.root}>
          {faqs_data.map(d => {
            return (
              <Panel header={d.question}>
                <p>A: {d.answer}</p>
              </Panel>
            )
          })}
        </PanelGroup>
      </Content>
    </MainLayout>
  )
}

FaqsPage.propTypes = {}

export default FaqsPage
