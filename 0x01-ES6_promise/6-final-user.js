import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const usr = {
    status: 'pending',
    value: '',
  };
  const foto = {
    status: 'pending',
    value: '',
  };
  try {
    const register = await signUpUser(firstName, lastName);
    usr.status = 'fulfilled';
    usr.value = register;
  } catch (error) {
    usr.status = 'rejected';
    usr.value = error.toString();
  }
  try {
    const photoUpload = await uploadPhoto(filename);
    foto.status = 'fulfilled';
    foto.value = photoUpload;
  } catch (error) {
    foto.status = 'rejected';
    foto.value = error.toString();
  }
  return { usr, foto };
}
