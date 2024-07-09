
import notificationUtil from "./notification.util";



const handleError = (error) => {
  const message = (error.response?.data)?.message || error.message;
  const code = (error.response?.data)?.statusCode || error.code;



  // if (code === 401) {
  //   console.log(';kjsf');

  //   try {
  //     storageUtil.deleteItem(StorageKey.token);
  //     // router.push('/login');
  //     return;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  notificationUtil.error(message);
}

export default handleError;