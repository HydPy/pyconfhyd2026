'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

import Icon from '@/components/Icon';
import { Confetti } from '@/components/Confetti';
import CTAButton from '@/components/CTAButton';

const FRAME_PATH = '/images/attendingWithPhoto.png';

const FRAME_ROTATION = -5.9;

const PHOTO_REGION = {
  x: 0.13,
  y: 0.25,
  width: 0.4,
  height: 0.35,
};

const TEXT_CONFIG = {
  nameY: 0.66,
  designationY: 0.7,
  centerX: 0.37,
  nameFontSize: 0.04,
  designationFontSize: 0.025,
};

export default function IAmAttendingFrame() {
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const frameImgRef = useRef(null);
  const userImgRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [canvasSize, setCanvasSize] = useState({ width: 1080, height: 1350 });

  const [state, setState] = useState({
    scale: 1,
    rotation: 0,
    opacity: 1,
    x: 0,
    y: 0,
    isDragging: false,
    lastX: 0,
    lastY: 0,
  });

  const [fields, setFields] = useState({
    name: '',
    designation: '',
  });

  const canvasDimensions = useRef({ width: 1080, height: 1350 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const frameImg = frameImgRef.current;
    const userImg = userImgRef.current;

    if (!canvas || !ctx) return;

    const { width, height } = canvasDimensions.current;
    ctx.clearRect(0, 0, width, height);

    // 1. White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // 2. Frame overlay first (frame has opaque cream - user image goes ON TOP)
    if (frameImg?.complete && frameImg.naturalWidth > 0) {
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.drawImage(frameImg, 0, 0, width, height);
      ctx.restore();
    }

    // 3. User image ON TOP of frame, clipped to rotated photo region (aligns with tilted badge)
    if (userImg?.complete && userImg.naturalWidth > 0) {
      const px = width * PHOTO_REGION.x;
      const py = height * PHOTO_REGION.y;
      const pw = width * PHOTO_REGION.width;
      const ph = height * PHOTO_REGION.height;
      const centerX = px + pw / 2;
      const centerY = py + ph / 2;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((FRAME_ROTATION * Math.PI) / 180);
      ctx.beginPath();
      ctx.rect(-pw / 2, -ph / 2, pw, ph);
      ctx.clip();
      ctx.translate(state.x, state.y);
      ctx.rotate((state.rotation * Math.PI) / 180);
      ctx.scale(state.scale, state.scale);
      ctx.globalAlpha = state.opacity;
      ctx.drawImage(userImg, -userImg.width / 2, -userImg.height / 2);
      ctx.restore();
    }

    // 4. Text (name and designation)
    ctx.globalAlpha = 1;

    const nameY = height * TEXT_CONFIG.nameY;
    const designationY = height * TEXT_CONFIG.designationY;
    const textCenterX = width * TEXT_CONFIG.centerX;
    const frameRad = (FRAME_ROTATION * Math.PI) / 180;

    if (fields.name.trim()) {
      ctx.save();
      ctx.font = `bold ${Math.round(height * TEXT_CONFIG.nameFontSize)}px "Bungee", "Belanosima", sans-serif`;
      ctx.fillStyle = '#1A202C';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.translate(textCenterX, nameY);
      ctx.rotate(frameRad);
      ctx.fillText(fields.name.trim(), 0, 0);
      ctx.restore();
    }

    if (fields.designation.trim()) {
      ctx.save();
      ctx.font = `${Math.round(height * TEXT_CONFIG.designationFontSize)}px "Belanosima", sans-serif`;
      ctx.fillStyle = '#4A5568';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.translate(textCenterX, designationY);
      ctx.rotate(frameRad);
      ctx.fillText(fields.designation.trim(), 0, 0);
      ctx.restore();
    }
  }, [state, fields]);

  useEffect(() => {
    draw();
  }, [draw, isLoading, canvasSize]);

  // Load frame image
  useEffect(() => {
    const frameImg = new Image();
    frameImg.crossOrigin = 'anonymous';
    frameImg.src = FRAME_PATH;
    frameImg.onload = () => {
      frameImgRef.current = frameImg;
      const size = {
        width: frameImg.naturalWidth,
        height: frameImg.naturalHeight,
      };
      canvasDimensions.current = size;
      setCanvasSize(size);
      setIsLoading(false);
    };
    frameImg.onerror = () => {
      canvasDimensions.current = { width: 1080, height: 1350 };
      setCanvasSize({ width: 1080, height: 1350 });
      setIsLoading(false);
    };
  }, []);

  const resetState = useCallback(() => {
    const userImg = userImgRef.current;

    setState((prev) => {
      let newScale = prev.scale;
      if (userImg?.complete && userImg.naturalWidth > 0) {
        const { width, height } = canvasDimensions.current;
        const pw = width * PHOTO_REGION.width;
        const ph = height * PHOTO_REGION.height;
        const scaleX = pw / userImg.width;
        const scaleY = ph / userImg.height;
        newScale = Math.max(scaleX, scaleY);
      } else {
        newScale = 1;
      }
      return {
        ...prev,
        x: 0,
        y: 0,
        opacity: 1,
        rotation: 0,
        scale: newScale,
      };
    });
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        userImgRef.current = img;
        setIsUserLoaded(true);
        setShowEditor(true);
        // Reset with fit-to-photo-region scale
        setState((prev) => {
          const { width, height } = canvasDimensions.current;
          const pw = width * PHOTO_REGION.width;
          const ph = height * PHOTO_REGION.height;
          const scaleX = pw / img.width;
          const scaleY = ph / img.height;
          const newScale = Math.max(scaleX, scaleY);
          return {
            ...prev,
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            scale: newScale,
          };
        });
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleScaleChange = (e) => {
    const value = parseFloat(e.target.value);
    setState((prev) => ({ ...prev, scale: value }));
  };

  const handleRotateChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setState((prev) => ({ ...prev, rotation: value }));
  };

  const handleOpacityChange = (e) => {
    const value = parseFloat(e.target.value);
    setState((prev) => ({ ...prev, opacity: value }));
  };

  const handleReset = () => resetState();

  const handleMouseDown = (e) => {
    if (!isUserLoaded) return;
    setState((prev) => ({
      ...prev,
      isDragging: true,
      lastX: e.clientX ?? e.touches?.[0]?.clientX,
      lastY: e.clientY ?? e.touches?.[0]?.clientY,
    }));
  };

  const handleMouseMove = (e) => {
    if (!state.isDragging) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX;
    const y = e.clientY ?? e.touches?.[0]?.clientY;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scale = canvasDimensions.current.width / rect.width;
    const dx = (x - state.lastX) * scale;
    const dy = (y - state.lastY) * scale;

    // Convert canvas delta to badge's rotated coordinate system
    const rad = (FRAME_ROTATION * Math.PI) / 180;
    const cos = Math.cos(-rad);
    const sin = Math.sin(-rad);
    const dxRot = dx * cos - dy * sin;
    const dyRot = dx * sin + dy * cos;

    setState((prev) => ({
      ...prev,
      x: prev.x + dxRot,
      y: prev.y + dyRot,
      lastX: x,
      lastY: y,
    }));
  };

  const handleMouseUp = () => {
    setState((prev) => ({ ...prev, isDragging: false }));
  };

  const downloadImage = (format) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setConfettiTrigger((t) => t + 1);
    const ext = format === 'image/jpeg' ? 'jpg' : 'png';
    const link = document.createElement('a');
    link.download = `pyconf-hyderabad-2026-im-attending.${ext}`;
    link.href = canvas.toDataURL(format, 0.95);
    link.click();
  };

  const copyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      });
    }
  };

  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <div className="w-full max-w-lg bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
        {/* Canvas container - preserve frame aspect ratio (no stretch) */}
        <div
          className="relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center mb-5 w-full"
          style={{
            aspectRatio: canvasSize.width / canvasSize.height,
            maxHeight: '70vh',
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          {isLoading && (
            <div className="absolute w-10 h-10 border-3 border-gray-300 dark:border-gray-600 border-t-primary-500 rounded-full animate-spin" />
          )}
          <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            className="w-full h-full object-contain cursor-move touch-none"
            style={{ cursor: state.isDragging ? 'grabbing' : 'move' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          />
        </div>

        {/* Upload button */}
        <label className="flex justify-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
          <div
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
          >
            <CTAButton label="Choose Photo" icon="Upload" variant="secondary" />
          </div>
        </label>

        {/* Editor controls */}
        {showEditor && (
          <div className="mt-6 space-y-5 animate-in fade-in duration-300">
            {/* Optional text fields */}
            <div className="space-y-3">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Your Name
                <span className="text-gray-400 font-normal ml-1">
                  (optional)
                </span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={fields.name}
                onChange={(e) =>
                  setFields((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <label
                htmlFor="role"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Designation / Role
                <span className="text-gray-400 font-normal ml-1">
                  (optional)
                </span>
              </label>
              <input
                id="role"
                type="text"
                placeholder="e.g. Software Engineer, Student"
                value={fields.designation}
                onChange={(e) =>
                  setFields((prev) => ({
                    ...prev,
                    designation: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Adjustment sliders */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 space-y-4">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="zoom"
                  className="text-sm text-gray-600 dark:text-gray-400 w-16"
                >
                  Zoom
                </label>
                <Icon name="Minus" size={12} className="text-gray-500" />
                <input
                  id="zoom"
                  type="range"
                  min="0.1"
                  max="3"
                  step="0.05"
                  value={state.scale}
                  onChange={handleScaleChange}
                  className="flex-1 h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <Icon name="Plus" size={12} className="text-gray-500" />
              </div>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="rotate"
                  className="text-sm text-gray-600 dark:text-gray-400 w-16"
                >
                  Rotate
                </label>
                <Icon name="RotateLeft" size={12} className="text-gray-500" />
                <input
                  id="rotate"
                  type="range"
                  min="-180"
                  max="180"
                  step="1"
                  value={state.rotation}
                  onChange={handleRotateChange}
                  className="flex-1 h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="opacity"
                  className="text-sm text-gray-600 dark:text-gray-400 w-16"
                >
                  Opacity
                </label>
                <Icon
                  name="CircleHalfStroke"
                  size={12}
                  className="text-gray-500"
                />
                <input
                  id="opacity"
                  type="range"
                  min="0.3"
                  max="1"
                  step="0.05"
                  value={state.opacity}
                  onChange={handleOpacityChange}
                  className="flex-1 h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <Icon name="Circle" size={12} className="text-gray-500" />
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              {/* <div className="w-full" onClick={handleReset}>
                <CTAButton
                  label="Reset"
                  icon="RotateLeft"
                  variant="secondary"
                  className="w-full justify-center py-3 text-base"
                />
              </div> */}
              {/* <div className="w-full" onClick={() => downloadImage('image/jpeg')}>
                <CTAButton
                  label="Download"
                  icon="Download"
                  variant="accent"
                  className="w-full justify-center py-3 text-base"
                />
              </div> */}
              <div
                className="col-span-2 w-full"
                onClick={() => downloadImage('image/png')}
              >
                <CTAButton
                  label="Download"
                  icon="Download"
                  variant="accent"
                  className="w-full justify-center py-3 text-base"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-50 animate-in fade-in duration-200">
          Link Copied!
        </div>
      )}

      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <Confetti
          trigger={confettiTrigger}
          count={120}
          colors={['#E68D00', '#E3453A', '#FDD100', '#1A202C', '#FFF8F3']}
        />
      </div>
    </section>
  );
}
