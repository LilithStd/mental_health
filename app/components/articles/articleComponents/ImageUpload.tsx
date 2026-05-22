'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return

    setFile(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  const removeImage = () => {
    setFile(null)
    setPreview(null)
  }

  return (
    <div className="w-full max-w-md">

      {/* Upload area */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="
          relative
          flex flex-col items-center justify-center
          w-full 
          h-full
          rounded-large
          border border-primary-color/30
          bg-primary-color/10
          backdrop-blur-md
          cursor-pointer
          transition
          hover:bg-primary-color/20
        "
      >
        {!preview && (
          <span className="text-sm opacity-70">
            Click or drag image сюда
          </span>
        )}

        {preview && (
          <Image
            src={preview}

            alt="preview"
            className="absolute inset-0 w-full h-full object-cover rounded-large"
            width={500}
            height={500}
          />
        )}

        {/* overlay */}
        {preview && (
          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center rounded-large">
            <span className="text-white text-sm">Change image</span>
          </div>
        )}
      </div>

      {/* hidden input */}
      <input
        ref={inputRef}
        type="file"
        name='image'
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

      {/* actions */}
      {file && (
        <div className="flex justify-between mt-2 text-sm">
          <span className="truncate">{file.name}</span>

          <button
            onClick={removeImage}
            className="text-red-400 hover:underline"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  )
}