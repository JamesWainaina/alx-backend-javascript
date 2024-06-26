import { uploadPhoto, createUser } from './utils';

async function asynUploadPhoto() {
  try {
    const photo = await uploadPhoto('photo-profile-1');
    const user = await createUser('Guillaume', 'Salva');

    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asynUploadPhoto;
