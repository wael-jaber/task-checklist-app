import React, { useState, useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface Marker {
  x: number;
  y: number;
}

export interface ImageMarkerProps {
  src: string;
  initialMarker?: Marker;
  onChange?: (marker: Marker) => void;
  disabled?: boolean;
}

const MarkerPoint = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  position: 'absolute',
  width: 16,
  height: 16,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.secondary.main,
  border: `2px solid ${theme.palette.common.white}`,
  transform: 'translate(-50%, -50%)',
  boxShadow: theme.shadows[2],
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  cursor: 'crosshair',
});

export const ImageMarker: React.FC<ImageMarkerProps> = ({
  src,
  initialMarker,
  onChange,
  disabled = false,
}) => {
  const [marker, setMarker] = useState<Marker | undefined>(initialMarker);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newMarker = { x, y };
    setMarker(newMarker);

    if (onChange) {
      onChange(newMarker);
    }
  };

  return (
    <Paper elevation={2} sx={{ overflow: 'hidden' }}>
      <ImageContainer onClick={handleImageClick}>
        <img
          ref={imageRef}
          src={src}
          alt="Task location"
          style={{ width: '100%', display: 'block' }}
        />
        {marker && (
          <MarkerPoint active={!disabled} style={{ left: `${marker.x}%`, top: `${marker.y}%` }} />
        )}
      </ImageContainer>
      {!disabled && (
        <Typography variant="caption" color="text.secondary" sx={{ p: 1, display: 'block' }}>
          Click on the image to place a marker
        </Typography>
      )}
    </Paper>
  );
};
