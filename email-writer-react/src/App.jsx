import { useState } from 'react'
import { Typography, Container, Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again!');
      console.error(error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{py:4}}>
      <Typography variant='h4' component="h1" gutterBottom sx={{ mx: 3 }}>
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 3 }}>
        <TextField 
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          label='Original Email Content'
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb:2, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'}}/>

          <FormControl fullWidth sx={{mb:2, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'}}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ''}
              label={"Tone (Optional)"}
              onChange={(e) => setTone(e.target.value)}>
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant='contained'
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            sx={{ 
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', 
              ':hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.4)' }
            }}>
            {loading ? <CircularProgress size={24}/> : "Generate Replay" }
          </Button>
      </Box>

      {error && (
         <Typography color='error' sx={{ mx:3 }}>
            {error}
       </Typography>
      )}

      {generatedReply && (
        <Box sx={{ mt:5, mx:3 }}>
          <Typography variant='h6' gutterBottom>
            Generated Reply:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            sx={{boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'}}
            value={generatedReply || ''}
            inputProps={{ readOnly: true }}/>

          <Button 
          variant='outlined'
          sx={{ mt:2,  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', 
            ':hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.4)' }}}
          onClick={() => navigator.clipboard.writeText(generatedReply)}>
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  )
}

export default App
