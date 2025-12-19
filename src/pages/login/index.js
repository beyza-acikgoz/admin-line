// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 680,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'admin@vuexy.com'
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, password } = data
    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }
  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <LoginIllustration alt='login-illustration' src={`/images/pages/${imageSource}-${theme.palette.mode}.png`} />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' width='56' height='56'>
              <path
                d='M0 0 C5.61937858 4.9076978 10.79564496 10.30476818 16.03515625 15.609375 C17.56465985 17.14380864 19.09498255 18.67742622 20.62608337 20.21026611 C23.81663831 23.40842655 27.00064987 26.61290355 30.17944336 29.82275391 C34.25980903 33.94291056 38.35106855 38.05202701 42.44654179 42.15716171 C46.3546321 46.07520052 50.25773703 49.99818888 54.16015625 53.921875 C54.90636797 54.67148247 55.65257969 55.42108994 56.42140388 56.19341278 C58.5207504 58.30429176 60.61656144 60.418612 62.71118164 62.53417969 C63.33707687 63.16276382 63.96297211 63.79134796 64.60783386 64.4389801 C69.74020178 69.63605933 69.74020178 69.63605933 70.5 73.625 C69.73792102 78.76903314 66.55241234 81.38813306 63 85 C62.154375 85.969375 61.30875 86.93875 60.4375 87.9375 C57.49583643 90.42659995 55.84291609 91 52 91 C47.35367079 88.75055561 44.09886295 85.33844928 40.54492188 81.69262695 C39.60490074 80.7409967 39.60490074 80.7409967 38.64588928 79.7701416 C37.29059141 78.39723694 35.93751883 77.0221327 34.58644104 75.64507484 C32.44815337 73.46730431 30.30237025 71.29719151 28.1541748 69.12919617 C22.04914064 62.96616213 15.95398492 56.79349461 9.87353516 50.60620117 C6.15018168 46.8185004 2.41481134 43.04301202 -1.32847595 39.27501488 C-2.75252472 37.8366878 -4.17188037 36.39369861 -5.58644104 34.9460392 C-7.56133032 32.92556812 -9.5510775 30.92093199 -11.54492188 28.91918945 C-12.12688828 28.31610458 -12.70885468 27.71301971 -13.30845642 27.09165955 C-15.55923684 24.85728124 -17.41696809 23.18180758 -20.47428894 22.22843933 C-24.57923969 23.48243017 -26.95349595 26.37023465 -29.86645508 29.42578125 C-30.53708481 30.10853119 -31.20771454 30.79128113 -31.89866638 31.49472046 C-33.35388696 32.97901758 -34.80339633 34.46893056 -36.24784279 35.9637146 C-38.53541371 38.32892148 -40.83941952 40.67689627 -43.14884949 43.02075195 C-49.71166996 49.68760154 -56.24320532 56.38475357 -62.76391602 63.09277344 C-66.75334726 67.19443307 -70.76208992 71.27640173 -74.78293419 75.34725952 C-76.31091132 76.90258052 -77.83111161 78.4655815 -79.34327126 80.0362854 C-81.4593727 82.23402638 -83.59900859 84.40607101 -85.74536133 86.57421875 C-86.36329559 87.22877045 -86.98122986 87.88332214 -87.6178894 88.55770874 C-90.72129554 91.64136911 -92.80841246 93.39379861 -97.28935242 93.53833008 C-101.92482295 92.86582935 -103.02194916 91.52663915 -106 88 C-107.06658886 87.08429444 -108.15026393 86.18811924 -109.25 85.3125 C-112.47527007 82.60034108 -112.84751683 81.95975964 -113.49832153 77.86346436 C-112.78059202 72.29893982 -109.94910057 69.99391506 -106.02685547 66.18457031 C-105.28546829 65.43734207 -104.54408112 64.69011383 -103.78022766 63.92024231 C-101.32590806 61.45550849 -98.84735851 59.01682233 -96.3671875 56.578125 C-94.65389117 54.87027174 -92.94192353 53.16108462 -91.23123169 51.45062256 C-87.64199581 47.86911798 -84.04143643 44.29954883 -80.43164062 40.73876953 C-75.80770144 36.17704538 -71.20585168 31.59381944 -66.61144829 27.00236893 C-63.07632298 23.47194834 -59.53321233 19.94963776 -55.98727798 16.4300766 C-54.28799587 14.74284609 -52.59037886 13.05393686 -50.8944664 11.3633194 C-48.52033137 9.00041537 -46.136504 6.64775764 -43.74951172 4.29785156 C-43.05107651 3.59962784 -42.3526413 2.90140411 -41.63304138 2.18202209 C-28.92860219 -10.24669357 -14.02147162 -10.35025677 0 0 Z '
                fill='#476D9B'
                transform='translate(149,86)'
              />
              <path
                d='M0 0 C4.97873733 3.20790152 9.43732152 7.65180144 12 13 C12.15172302 18.0628834 10.96964652 20.42635661 7.59275818 24.18260193 C6.05579154 25.76126088 4.50197299 27.32361751 2.93530273 28.87280273 C2.08969284 29.73213913 1.24408295 30.59147552 0.37284851 31.47685242 C-1.94281812 33.82279879 -4.27119311 36.15443388 -6.60770154 38.4795177 C-8.55914608 40.42477005 -10.50132134 42.37914767 -12.44362587 44.33351952 C-17.02669285 48.94465159 -21.62514476 53.54002695 -26.23364258 58.12573242 C-30.98277569 62.85189499 -35.70576942 67.60306531 -40.41654927 72.36743206 C-44.46756453 76.46278883 -48.53395229 80.5424182 -52.61306232 84.60979229 C-55.04679141 87.03678724 -57.47439582 89.46918122 -59.8874836 91.91671562 C-62.5790572 94.64502563 -65.30240448 97.34017397 -68.02954102 100.03295898 C-68.82207275 100.84482666 -69.61460449 101.65669434 -70.43115234 102.49316406 C-76.57254393 108.47350107 -76.57254393 108.47350107 -81.39537048 108.61439514 C-85.63728714 107.89137687 -86.99142546 106.87455178 -89.8125 103.6875 C-90.90498047 102.48673828 -90.90498047 102.48673828 -92.01953125 101.26171875 C-92.67308594 100.51535156 -93.32664062 99.76898438 -94 99 C-94.56847656 98.46375 -95.13695313 97.9275 -95.72265625 97.375 C-97 96 -97 96 -97.625 93.3125 C-96.15897761 85.54258134 -87.25157823 79.10705247 -81.80151367 73.67211914 C-80.61974045 72.48771744 -80.61974045 72.48771744 -79.41409302 71.27938843 C-76.83454476 68.69547303 -74.25139699 66.11519195 -71.66796875 63.53515625 C-69.86657848 61.73309187 -68.06533663 59.9308791 -66.26423645 58.12852478 C-62.50273129 54.36554997 -58.73948307 50.60433054 -54.97485352 46.84448242 C-50.62224558 42.49733888 -46.27328371 38.14657264 -41.92615145 33.79395396 C-37.73434512 29.5970695 -33.53973935 25.40299176 -29.34392738 21.21011162 C-27.56132849 19.42818106 -25.77947558 17.64550393 -23.99837303 15.86207771 C-21.51849212 13.37966962 -19.03544989 10.9004685 -16.55151367 8.42211914 C-15.81229172 7.68087296 -15.07306976 6.93962677 -14.31144714 6.17591858 C-13.30017761 5.16887878 -13.30017761 5.16887878 -12.26847839 4.14149475 C-11.68209186 3.55548524 -11.09570532 2.96947573 -10.49154949 2.36570835 C-7.19953339 -0.64856232 -4.33535853 -0.5594011 0 0 Z '
                fill='#476D9B'
                transform='translate(102,40)'
              />
              <path
                d='M0 0 C3.90750806 0.79579014 5.51260872 2.38335978 8.03344727 5.40405273 C12.19042006 10.18180494 16.53069072 14.71253947 21.00366211 19.19555664 C21.71857095 19.91261497 22.43347979 20.62967329 23.17005253 21.36846066 C25.47457603 23.67610894 27.78206071 25.98076803 30.08984375 28.28515625 C31.70901331 29.90500043 33.32803449 31.52499295 34.94691467 33.14512634 C38.3198413 36.51951913 41.69454986 39.89211666 45.07055664 43.26342773 C49.4040027 47.59114036 53.73289434 51.92337666 58.06049252 56.25693607 C61.39314163 59.59318888 64.72815648 62.92706858 68.06390572 66.26022148 C69.66229267 67.85794052 71.25993483 69.45640502 72.85682487 71.05562019 C75.07784514 73.27916775 77.30202398 75.49950577 79.52709961 77.71899414 C80.51901054 78.71394142 80.51901054 78.71394142 81.53096008 79.72898865 C82.13493622 80.33014496 82.73891235 80.93130127 83.3611908 81.55067444 C83.88598495 82.07509156 84.41077909 82.59950869 84.9514761 83.13981724 C86.3144869 84.48846307 86.3144869 84.48846307 88.3125 85.375 C89.24834592 88.51283631 89.7173838 90.21252928 89.3125 93.375 C87.41509443 96.51434376 84.98942954 98.88927971 82.3125 101.375 C81.7865625 101.89578125 81.260625 102.4165625 80.71875 102.953125 C78.46255627 105.0413043 76.25161272 106.40147273 73.4375 107.625 C69.82484645 107.33598772 69.22617046 106.72054331 66.62046814 104.35456848 C65.91428282 103.71380182 65.2080975 103.07303516 64.48051262 102.41285133 C61.01189074 99.15247561 57.62113079 95.82275844 54.26000977 92.4519043 C53.11949913 91.31402214 53.11949913 91.31402214 51.95594788 90.15315247 C49.46943025 87.67099968 46.98654489 85.18525082 44.50390625 82.69921875 C42.76910258 80.96508924 41.03415054 79.23110816 39.29905701 77.49726868 C35.67731784 73.87699884 32.05738146 70.2549386 28.4387207 66.6315918 C23.79258063 61.97972925 19.14193123 57.33240474 14.48994541 52.68638897 C10.91349416 49.11354219 7.33941682 45.53832837 3.7660656 41.96238136 C2.05112109 40.24676859 0.33543018 38.53190159 -1.38101006 36.81778526 C-3.77001952 34.43130318 -6.15582079 32.04166034 -8.54077148 29.65112305 C-9.25396545 28.93995331 -9.96715942 28.22878357 -10.70196533 27.49606323 C-11.34808273 26.84712601 -11.99420013 26.19818878 -12.65989685 25.52958679 C-13.22378333 24.96532329 -13.78766981 24.40105978 -14.36864376 23.81969738 C-16.4389348 21.55186564 -16.70081482 20.2683522 -17.08984375 17.15234375 C-16.56209403 12.19764489 -14.76124646 10.28289811 -11.25 6.9375 C-10.70303467 6.41269043 -10.15606934 5.88788086 -9.5925293 5.34716797 C-6.6287836 2.67317031 -4.09268197 0.47167434 0 0 Z '
                fill='#476D9B'
                transform='translate(161.6875,37.625)'
              />
              <path
                d='M0 0 C5.10165255 3.55929247 8.45815852 7.72829261 9.6875 13.875 C9.67466272 20.26796773 7.8396312 25.3193442 3.6875 30.25 C1.6875 31.875 1.6875 31.875 -1.3125 31.875 C-1.6425 32.535 -1.9725 33.195 -2.3125 33.875 C-6.36020148 35.6097292 -9.22745872 36.23223528 -13.375 34.8125 C-18.6707748 32.45198023 -22.85905797 29.5423146 -25.25 24.125 C-26.68972531 19.58300944 -26.58411909 15.45282874 -25.3125 10.875 C-23.375 7.5 -23.375 7.5 -21.3125 4.875 C-20.6525 3.885 -19.9925 2.895 -19.3125 1.875 C-13.30155505 -2.18238784 -6.72433386 -2.28373603 0 0 Z '
                fill='#476D9B'
                transform='translate(138.3125,7.125)'
              />
            </svg>
            <Box sx={{ my: 6 }}>
              <Typography variant='h3' sx={{ mb: 1.5 }}>
                {`Welcome to ${themeConfig.templateName}! 👋🏻`}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            <Alert icon={false} sx={{ py: 3, mb: 6, ...bgColors.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='body2' sx={{ mb: 2, color: 'primary.main' }}>
                Admin: <strong>admin@vuexy.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='body2' sx={{ color: 'primary.main' }}>
                Client: <strong>client@vuexy.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 4 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      label='Email'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      placeholder='admin@vuexy.com'
                      error={Boolean(errors.email)}
                      {...(errors.email && { helperText: errors.email.message })}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 1.5 }}>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      onBlur={onBlur}
                      label='Password'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      {...(errors.password && { helperText: errors.password.message })}
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>
              <Box
                sx={{
                  mb: 1.75,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <FormControlLabel
                  label='Remember Me'
                  control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
                />
                <Typography component={LinkStyled} href='/forgot-password'>
                  Forgot Password?
                </Typography>
              </Box>
              <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
                Login
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>New on our platform?</Typography>
                <Typography href='/register' component={LinkStyled}>
                  Create an account
                </Typography>
              </Box>
              <Divider
                sx={{
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: theme => `${theme.spacing(6)} !important`
                }}
              >
                or
              </Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:facebook' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:twitter' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                >
                  <Icon icon='mdi:github' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:google' />
                </IconButton>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
