import { Injectable } from '@nestjs/common'
import { v2 } from 'cloudinary'

@Injectable()
export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    })
  }
  uploadToCloudinary = async (file: Express.Multer.File) => {
    const response = await v2.uploader.upload(`data:${file.mimetype};base64,${file.buffer.toString('base64')}`, {
      folder: 'imobiliaria-imoveis',
      format: 'webp',
      transformation: {
        quality: 'auto',
        gravity: 'auto',
        crop: 'fill'
      }
    })
    return response
  }

  deleteFromCloudinary = async (public_id: string) => {
    await v2.uploader.destroy(public_id, (error, result) => {
      if (error) {
        console.log(error)
      } else {
        console.log(result)
      }
    })
  }
}
