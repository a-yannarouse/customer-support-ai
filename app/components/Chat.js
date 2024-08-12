'use client'
import { useState, useRef, useEffect } from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown';

const TextField = dynamic(
  () => import('@mui/material/TextField'),
  { ssr: false }
);

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState({})
  const messagesEndRef = useRef(null)
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    } else if (status === 'authenticated') {
      setMessages([
        {
          role: "assistant",
          content: `Welcome back, ${session.user.name}! I'm your guide to Africana Diaspora Religions. How can I assist you today?`
        }
      ])
    }
  }, [status, router, session])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    const userMessage = { role: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message,
          history: messages.slice(1),
          userEmail: session?.user?.email || null
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error processing your request.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const submitFeedback = async () => {
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, feedbackText }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Reset the feedback form
      setRating(0);
      setFeedbackText('');
      // Optionally, show a success message to the user
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Optionally, show an error message to the user
      alert('There was an error submitting your feedback. Please try again.');
    }
  };

  return (
    <Box 
      width="100vw" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
      sx={{
        background: 'linear-gradient(135deg, #E75A7C 0%, #2C363F 100%)',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Button
        variant="contained"
        onClick={() => signOut()}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: '#4285F4',
          '&:hover': {
            backgroundColor: '#357ae8',
          },
        }}
      >
        Sign out
      </Button>
      <Typography 
        variant="h3" 
        sx={{ 
          color: '#0F1020', 
          marginBottom: 4, 
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          fontFamily: "'Times New Roman', serif",
        }}
      >
        AfriReligions AI
      </Typography>
      <Stack 
        direction="column"
        width="600px"
        height="700px"
        sx={{
          background: 'rgba(242, 245, 234, 0.8)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px 0 rgba(44, 54, 63, 0.37)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(187, 199, 164, 0.18)',
        }}
        p={3}
        spacing={3}
      >
        <Stack
          direction="column"
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
          position="relative"
          sx={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(0,0,0,0.1)',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '4px',
            },
          }}
        >
          {messages.map((message, index) => (
            <Box 
              key={index} 
              display='flex' 
              flexDirection='column'
              alignItems={message.role === 'assistant' ? 'flex-start' : 'flex-end'}
            >
              <Box 
                sx={{
                  bgcolor: message.role === 'assistant' ? '#6B8E23' : '#8B4513',
                  color: 'white',
                  borderRadius: message.role === 'assistant' ? '20px 20px 20px 5px' : '20px 20px 5px 20px',
                  p: 2,
                  maxWidth: "80%",
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  fontWeight: 300,
                  wordBreak: 'break-word',
                  whiteSpace: 'pre-wrap',
                  overflowWrap: 'break-word',
                  '& ul, & ol': {
                    paddingLeft: '1.5em',
                    marginLeft: '0.5em',
                  },
                }}
              >
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </Box>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField 
            label="Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            multiline
            maxRows={4}
            disabled={isLoading}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '15px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          />
          <Button 
            variant="contained" 
            onClick={sendMessage}
            disabled={isLoading || !message.trim()}
            sx={{
              borderRadius: '15px',
              backgroundColor: '#4caf50',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
      <Box 
        position="fixed"
        bottom={8}
        right={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
        zIndex={1000}
        sx={{
          backgroundColor: 'rgba(214, 219, 210, 0.9)',
          padding: '16px',
          borderRadius: '20px',
          boxShadow: '0 2px 4px rgba(44, 54, 63, 0.1)',
          width: '300px',
        }}
      >
        <Typography variant="body2" sx={{ mb: 1, color: '#2C363F' }}>
          Rate this conversation
        </Typography>
        <Box display="flex" flexDirection="row" mb={2}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Button 
              key={star}
              onClick={() => setRating(star)}
              sx={{ 
                minWidth: 'auto',
                p: 1,
                color: rating >= star ? '#FFD700' : '#C0C0C0',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              ★
            </Button>
          ))}
        </Box>
        <TextField
          multiline
          rows={3}
          variant="outlined"
          placeholder="Your feedback (optional)"
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          onClick={submitFeedback}
          disabled={!rating}
          fullWidth
          sx={{
            backgroundColor: '#4caf50',
            '&:hover': {
              backgroundColor: '#45a049',
            },
          }}
        >
          Submit Feedback
        </Button>
      </Box>
    </Box>
  );
}