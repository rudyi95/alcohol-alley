import React from 'react'
import { Cropper } from 'react-cropper'

import 'cropperjs/dist/cropper.css'

interface IProps {
  image?: string
  setCropper: (i: Cropper) => void | Promise<void>
  aspectRatio?: number
}

export const ImageCropper: React.FC<IProps> = ({ image, setCropper, aspectRatio = 2/3 }) => {
  return (
    <Cropper
      style={{ height: 400, width: '100%' }}
      zoomTo={0}
      preview='.img-preview'
      src={image}
      viewMode={1}
      aspectRatio={aspectRatio}
      background={false}
      responsive={true}
      checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
      onInitialized={(instance) => setCropper(instance)}
      guides={true}
    />
  )
}
