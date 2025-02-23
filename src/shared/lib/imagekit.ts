import ImageKit from 'imagekit'
import { EnvKeys } from '../config'

if (!process.env[EnvKeys.imagekitPublicKey]) {
  console.warn('ImageKit publicKey не найден в переменных окружения')
}

if (!process.env[EnvKeys.imagekitUrlEndpoint]) {
  console.warn('ImageKit urlEndpoint не найден в переменных окружения')
}

export const imagekit = new ImageKit({
  publicKey: process.env[EnvKeys.imagekitPublicKey]! || '123',
  urlEndpoint: process.env[EnvKeys.imagekitUrlEndpoint]! || '123',
  privateKey: process.env[EnvKeys.imagekitPrivateKey]! || '123',
})
