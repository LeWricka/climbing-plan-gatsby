import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root:{
    marginTop: theme.spacing(5),
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.light
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  discount: {
    color: theme.palette.success.main
  }
}))

const tiers = [
  {
    title: ['2 weeks training'],
    price: 'Free',
    description: [
      'Detailed workout summary',
      'Daily workout schedules',
      'Compatible with outdoor climbing',
      'Prepared by pro coaches',
      '3 auto-assessments',
      'Training diary',
      'trial workouts book'

    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: ['12 weeks', 'Premium training'],
    subheader: 'Most popular',
    price: '$15/mo',
    discount: ' Save 30%',
    description: [
      'Everything in the Free trial',
      'Handcrafted by pro coaches',
      '+200 available workouts',
      'Full workouts book',
      'Detailed workout summary',
      '12 week full of routines',
      'Compatible with outdoor climbing',
      'Priority support',
      'Avoid waiting for upcoming trainings'
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: ['4 weeks', 'Essential'],
    price: '$30/mo',
    description: [
      'Everything in the Free trial',
      'Handcrafted by pro coaches',
      '+200 available workouts',
      'Full workouts book',
      'Detailed workout summary',
      '4 week full of routines',
      'Compatible with outdoor climbing'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
]

export default function Pricing() {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography variant="h5" align="center" component="p">
          Best pricing for best training plans
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title.map((line) => (
                      <Typography variant="h5" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h3" variant="h5" color='textPrimary'>
                      {tier.price}
                    </Typography>
                  </div>
                  <Typography align="center" variant="h6" className={classes.discount}>
                    {tier.discount}
                  </Typography>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography  component="li" variant="subtitle1" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="secondary.light">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}