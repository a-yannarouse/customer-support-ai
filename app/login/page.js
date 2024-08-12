'use client'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Box, Button, Typography } from "@mui/material"
import { Providers } from '../providers'

function LoginContent() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
      sx={{
        background: 'linear-gradient(135deg, #E75A7C 0%, #2C363F 100%)',
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, color: 'white' }}>
        Welcome to AfriReligions AI
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => signIn('google')}
        sx={{
          backgroundColor: '#4285F4',
          '&:hover': {
            backgroundColor: '#357ae8',
          },
        }}
      >
        Sign in with Google
      </Button>
    </Box>
  )
}

export default function Login() {
  return (
    <Providers>
      <LoginContent />
    </Providers>
  )
}