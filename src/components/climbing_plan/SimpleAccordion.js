import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import { ExpandMore } from '@material-ui/icons'

const Accordion = withStyles((theme) => ({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: '#323232',
    color: 'white',
    padding: '0 60px',
    boxShadow: 'none',
    whiteSpace: 'pre-line',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 10px',
    },
  },
  expanded: {},
}))(MuiAccordion)

const AccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: '#323232',
    color: 'white',
    fontSize: 60,
    minHeight: 80,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '10px 0',
    },
  },
  expanded: {},
}))(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    margin: '0 30px'
  },
}))(MuiAccordionDetails)

export default function CustomizedAccordions({ faqs }) {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      {
        faqs.map((faq) => (
          <Accordion square expanded={expanded === faq.title} onChange={handleChange(faq.title)}>
            <AccordionSummary expandIcon={<ExpandMore  style={{fill: "white"}}/>} aria-controls="panel1d-content" id="panel1d-header">
              <Typography >{faq.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                faq.contents.map((content) => (
                  <Typography style={{whiteSpace: 'pre-line' }}>
                    {content}
                  </Typography>
                ))
              }
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  )
}
