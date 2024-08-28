import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { CloudUpload } from '@mui/icons-material';

function ImageUpload({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsUploading(true);
      // Simulated upload delay
      setTimeout(() => {
        onUpload(selectedFile);
        setIsUploading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="outlined"
          component="span"
          startIcon={<CloudUpload />}
          sx={{ mb: 2 }}
        >
          Choose Image
        </Button>
      </label>
      {selectedFile && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
            Selected file: {selectedFile.name}
          </Typography>
        </motion.div>
      )}
      <Button
        variant="contained"
        onClick={handleUpload}
        disabled={!selectedFile || isUploading}
        sx={{ minWidth: 120 }}
      >
        {isUploading ? <CircularProgress size={24} /> : 'Upload'}
      </Button>
    </Box>
  );
}

export default ImageUpload;